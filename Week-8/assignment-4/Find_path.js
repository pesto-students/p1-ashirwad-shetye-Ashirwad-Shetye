
/*
time complexity: O(n^2)
space complexity: O(n)
*/


class Queue {
    constructor() {
      this.elements = {};
      this.head = 0;
      this.tail = 0;
    }

    enqueue(element) {
      this.elements[this.tail] = element;
      this.tail++;
    }

    dequeue() {
      const item = this.elements[this.head];
      delete this.elements[this.head];
      this.head++;
      return item;
    }

    peek() {
      return this.elements[this.head];
    }

    get length() {
      return this.tail - this.head;
    }

    get isEmpty() {
      return this.length === 0;
    }
}
  
class Graph {
    constructor(vertices) {
      this.vertices = vertices;
      this.adjacencyList = [];
      this.initAdjList();
    }
  
    initAdjList() {
      this.adjacencyList = new Array(this.vertices);
      for (let i = 0; i < this.vertices; i++) {
        this.adjacencyList[i] = [];
      }
    }
  
    addVertex(v) {
      this.adjacencyList.set(v, []);
    }
  
    addEdge(v, w) {
      this.adjacencyList[v].push(w);
      this.adjacencyList[w].push(v);
    }
  
    printGraph() {
        var get_keys = this.adjacencyList.keys();
  
        for (var i of get_keys) {
            var get_values = this.adjacencyList[i];
            var conc = "";
  
            for (var j of get_values) conc += j + " ";
            console.log(i + " -> " + conc);
        }
    }
  
    isReachable(s, d) {

      if (s == d) {
          console.log(true);
          return true;
      }
  
      var visited = new Array(this.vertices).fill(false);
  
      var queue = new Queue();
  
      visited[s] = true;
      queue.enqueue(s);
  
      while (!queue.isEmpty) {

          s = queue.dequeue();
  
          for (var i = 0; i < this.adjacencyList[s].length; i++) {

              if (this.adjacencyList[s][i] == d) {
                  console.log(true);
                  return true;
              }
  
              if (!visited[this.adjacencyList[s][i]]) {
              visited[this.adjacencyList[s][i]] = true;
              queue.enqueue(this.adjacencyList[s][i]);
              }
          }
      }
  
      console.log(false);
      return false;
    }
  
}
  
var g = new Graph(7);
  
// adding edges
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(3, 5);
g.addEdge(5, 4);
g.addEdge(4, 3);
g.addEdge(4, 6);
g.addEdge(5, 6);
  
g.printGraph();
  
g.isReachable(3, 6);