var head;

class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(40);
head.next.next.next.next = new Node(50);
head.next.next.next.next.next = new Node(60);

function rotate(head, k) {
  if (k == 0) return;

  let newHead = head;
  for (let i = 0; i < k; i++) {
    newHead = newHead.next;
  }

  let newHeadEnd = newHead;
  while (newHeadEnd.next != null) {
    newHeadEnd = newHeadEnd.next;
  }

  let newTail = head;
  newHeadEnd.next = newTail;

  let newTailEnd = newTail;
  for (let i = 1; i < k; i++) {
    newTailEnd = newTailEnd.next;
  }

  newTailEnd.next = null;

  return newHead;
}

console.log(rotate(head, 3));