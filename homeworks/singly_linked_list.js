function Node(data) {
	this.data = data;
	this.next = null;
}

function SinglyList() {
	this.size = 0;
	this.head = null;
}

SinglyList.prototype.add = function add(value) {
	var node = new Node(value);
	currentNode = this.head;
	if(!currentNode) {
		this.head = node;
		this.size++;
		return node;
	}

	while(currentNode.next) {
		currentNode = currentNode.next;
	}
	currentNode.next = node;
	this.size++;
	return node;
};

SinglyList.prototype.searchNodeAt = function(position) {
	var currentNode = this.head;
	var size = this.size;
	var count = 1;
	var message = {failure: "Fail: non-existent node in this list."};
	if(size === 0 || position<1 || position>size) {
		throw new Error(message.failure);
	}
	while(count<position) {
		currentNode = currentNode.next;
		count++;
	}
	return currentNode;
};

SinglyList.prototype.remove = function(position) {
	var currentNode = this.head;
	var size = this.size;
	var count = 0;
	var message = {failure: "Fail: non-existent node in this list."};
	var beforeNodeToDelete = null;
	var nodeToDelete = null;
	var deleteNode = null;

	if(position<0 || position>size) {
		throw new Error(message.failure);
	}
	if(position==1) {
		this.head = currentNode.next;
		deleteNode = currentNode;
		currentNode = null;
		this.size--;
		return deleteNode;
	}

	while(count<position-1) {
		beforeNodeToDelete = currentNode;
		nodeToDelete = currentNode.next;
		currentNode = currentNode.next;
		count++;
	}

	beforeNodeToDelete.next = nodeToDelete.next;
	deleteNode = nodeToDelete;
	nodeToDelete = null;
	this.size--; 
	return deleteNode;
};

function create_array(number) {
	var len = 0;
	var d = 1;
	while(parseInt(number/d) != 0) {
		d *= 10;
		len++;
	}
	var list = new SinglyList();
	var div = 0;
	var elm = 0;
	while(len!=0) {
		div = Math.pow(10, len-1);
		elm = parseInt(number/div);
		list.add(elm);
		number-=elm*Math.pow(10, len-1);
		len--;
	}
	return list;
}

var num = 42;
var NUMBER = create_array(num);
