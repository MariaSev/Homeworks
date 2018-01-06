function Graph() {
	this.vertices = [];
	this.edges = [];
	this.numberOfEdges = 0;
}

Graph.prototype.addVertex = function(vertex) {
	this.vertices.push(vertex);
	this.edges[vertex] = [];
};

Graph.prototype.addEdges = function(vertex_1, vertex_2) {
	this.edges[vertex_1].push(vertex_2);
	this.edges[vertex_2].push(vertex_1);
	this.numberOfEdges++;
};

Graph.prototype.traverseDFS = function(vertex) {
    if(!~this.vertices.indexOf(vertex)) {
        return console.log('Vertex not found');
    }
    var visited = [];
    console.log("traverseDFS");
    this._traverseDFS(vertex, visited);
};

Graph.prototype._traverseDFS = function(vertex, visited) {
    visited[vertex] = true;
    if(this.edges[vertex] !== undefined) {
        console.log(vertex);
    }

    for(var i = 0; i < this.edges[vertex].length; i++) {
        if(!visited[this.edges[vertex][i]]) {
            this._traverseDFS(this.edges[vertex][i], visited);
        }
    }
};

Graph.prototype.traverseBFS = function(vertex) {
    if(!~this.vertices.indexOf(vertex)) {
        return console.log('Vertex not found');
    }
    var queue = [];
    queue.push(vertex);
    var visited = [];
    visited[vertex] = true;
    console.log("traverseBFS");
    while(queue.length) {
        vertex = queue.shift();
        console.log(vertex);
        for(var i = 0; i < this.edges[vertex].length; i++) {
            if(!visited[this.edges[vertex][i]]) {
                visited[this.edges[vertex][i]] = true;
                queue.push(this.edges[vertex][i]);
            }
        }
    }
};

Graph.prototype.print = function() {
  console.log(this.vertices.map(function(vertex) {
    return (vertex + ' -> ' + this.edges[vertex].join(', ')).trim();
  }, this).join(' | '));
};

function create_Graph(lst) {
	var count = 0;
	var graph = new Graph();
	while(count<lst.length+1) {
		graph.addVertex(count);
		count++;
	}
	count = 0;
	while(count<lst.length) {
		graph.addEdges(lst[count][0], lst[count][1]);
		count++;
	}
    console.log(graph.edges);
	return graph;
}

var qwe =  [[0, 3], [1, 3], [2, 3], [4, 3], [5, 4], [1, 6]];
var GRAPH = create_Graph(qwe);
GRAPH.print();

GRAPH.traverseDFS(0);
GRAPH.traverseBFS(0);
