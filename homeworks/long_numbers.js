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

function create_array(number) {
	var len = number.length;
	var count = 1;
	var List = new SinglyList();
	var div = 10;
	var elm = 0;
	while(count<=len) {
		elm = number%div;
		List.add(elm);
		number-=elm;
		number=parseInt(number/div);
		count++;
	}
	return List;
}

function print_list(lst) {
	console.log("Number:");
	var current = lst.head;
	while(current) {
		console.log(current.data);
		current = current.next;
	}
}

function add_two_list(first, second) {
	var result = new SinglyList();
	var sum = 0;
	var current_1 = first.head;
	var current_2 = second.head;
	var count = 0;
	var flag = 0;
	while(count<first.size && count<second.size) {
		sum = current_1.data+current_2.data+flag;
		if(sum >= 10) {
			result.add(sum-10);
			flag=1;
		}
		else {
			result.add(sum);
			flag=0;
		}
		current_1 = current_1.next;
		current_2 = current_2.next;
		count++;
	}
	if(first.size>second.size) {
		while(count<first.size) {
			result.add(current_1.data+flag);
			flag=0;
			current_1 = current_1.next;
			count++;
		}
	}
	if(first.size<second.size) {
		while(count<second.size) {
			result.add(current_2.data+flag);
			flag=0;
			current_2 = current_2.next;
			count++;
		}
	}

	return result;
}

var num_1 = create_array('11111111');
var num_2 = create_array('22222222');

var RES = add_two_list(num_1, num_2);
print_list(RES);
