// binary heaps
class MaxBh {
  constructor() {
    this.value = [];
  }

  insert(element) {
    let val = this.value;
    val.push(element);
    this.bubbleUp();
  }

  bubbleUp() {
    let value = this.value,
      index = value.length - 1,
      elem = value[index]; // type of loop??
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2),
        parent = value[parentIndex];
      if (elem <= parent) break;
      value[parentIndex] = elem;
      value[index] = parent;
      index = parentIndex;
    }
  }
}

let maxBh = new MaxBh();

maxBh.insert(41);
maxBh.insert(39);
maxBh.insert(33);
maxBh.insert(18);
maxBh.insert(27);
maxBh.insert(12);
maxBh.insert(55);
console.log(maxBh);
