function Graph() {
	this.vertices = [];
	this.edges = [];
	this.numberOfEdges = 0;
}

Graph.prototype.addVertex = function(vertex) {
	this.vertices.push(vertex);
	this.edges[vertex] = [];
};

Graph.prototype.addEdges = function(vertex_1, vertex_2, data) {
	this.edges[vertex_1].push([]);
	this.edges[vertex_1][this.edges[vertex_1].length - 1].push(vertex_2);
	this.edges[vertex_1][this.edges[vertex_1].length - 1].push(data);
	this.edges[vertex_2].push([]);
	this.edges[vertex_2][this.edges[vertex_2].length - 1].push(vertex_1);
	this.edges[vertex_2][this.edges[vertex_2].length - 1].push(data);
	this.numberOfEdges++;
};

Graph.prototype.Search = function(start, end) {
    if(!~this.vertices.indexOf(start)) {
        return console.log('Vertex start not found');
    }
    if(!~this.vertices.indexOf(end)) {
        return console.log("Vertex end not found")
    }
    var visited = new Array(this.numberOfEdges);
    visited.fill(0);
    var sum=0;
    var res=[];
    this._traverseDFS(start, end, visited, sum, res);
    return res;
};

Graph.prototype._traverseDFS = function(vertex, end,  visited, sum, res) {
    if(vertex==end) {
        res.push(sum);
        return;
    }
    var flag=0;
    visited[vertex]++;
    for(var i = 0; i < this.edges[vertex].length; i++) {
        if(visited[this.edges[vertex][i][0]]<visited[vertex]) {
            sum+=this.edges[vertex][i][1];
            this._traverseDFS(this.edges[vertex][i][0], end, visited, sum, res);
            sum-=this.edges[vertex][i][1];
        }
    }
    return 0;
};

function create_Graph(lst) {
	var count = 0;
	var graph = new Graph();
	var num = 0;
	while(count<lst.length) {
		if(!graph.vertices[lst[count][0]]) {
			while(num<=lst[count][0]) {
				graph.addVertex(num);
				num++;
			}
		}
		if(!graph.vertices[lst[count][1]]) {
			while(num<=lst[count][1]) {
				graph.addVertex(num);
				num++;
			}
		}
		graph.addEdges(lst[count][0], lst[count][1], lst[count][2]);
		count++;
	}
	return graph;
}

Array.prototype.min = function () {
    return Math.min.apply(Math, this);
};

var qwe =  [[0, 3, 5], [1, 3, 11], [2, 3, 56], [4, 3, 77], [5, 4, 89], [3, 6, 1], [5, 6, 1000], [7, 0, 1], [8, 0, 2], [9, 7, 3]];
var GRAPH = create_Graph(qwe);

var result=GRAPH.Search(3, 5);
console.log(result.min());
