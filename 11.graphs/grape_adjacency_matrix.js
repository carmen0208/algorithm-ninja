function Vertex(label) {
  this.label = label;
}
function Graph(v) {
  this.vertices = v;
  this.edge = 0;
  this.adj = [];
  for(var i=0;i<this.vertices; ++i) {
    this.adj[i] = []
  }
  this.addEdge = addEdge
  this.showGraph = showGraph
}

function addEdge(v, w) {
  this.adj[v].push(w)
  this.adj[w].push(v)
}
function showGraph() {
  for (var i = 0; i < this.vertices; ++i) {
    process.stdout.write(i + " -> ");
    for (var j = 0; j < this.vertices; ++j) {
    if (this.adj[i][j] != undefined) 
      process.stdout.write(this.adj[i][j] + ' ');
    }
    console.log("");
  }
}

g = new Graph(5);
g.addEdge(0,1);
g.addEdge(0,2);
g.addEdge(1,3);
g.addEdge(2,4);
g.showGraph();