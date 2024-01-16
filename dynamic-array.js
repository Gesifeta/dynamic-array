class DynamicArray {

  constructor(defaultSize = 4) {

    // Your code here
    this.capacity = defaultSize;
    this.data = [];
    this.data.length = defaultSize;
    this.length = 0;
  }

  read(index) {
    return this.data[index]
  }

  push(val) {

    // Your code here
    //if array length is less resize capacity
    if (this.length >= this.data.length) this.resize()
    this.data[this.length] = val;
    this.length++;

    return (this.data);
  }

  pop() {

    // this.data.shift()
    if (this.length === 0) return undefined
    this.data.length--
    this.length--
    return this.data.length

  }

  shift() {

    if (this.length === 0) return undefined

    for (let i = 1; i < this.data.length; i++) {
      this.data[i - 1] = this.data[i]
    }

    this.data.length--
    this.length--
    return this.length;
    // Your code here
  }

  unshift(val) {
    //if array length is less resize capacity
    if (this.length >= this.data.length) this.resize()
    for (let j = this.data.length - 1; j >= 0; j--) {
      this.data[j] = this.data[j - 1]
    }

    this.data[0] = val;
    this.length++;

    return this.data.length;
    // Your code here
  }

  indexOf(val) {

    // Your code here
    for (let i = 0; i < this.data.length; i++) {
      if (val === this.data[i]) return i

    }
    return -1
  }

  resize() {

    // Your code here
    this.capacity *= 2;
    this.data.length *= 2
  }

}


module.exports = DynamicArray;