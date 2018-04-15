module.exports = class List {
  constructor(...args) {
    args.forEach((item, i) => {
      this[i] = item;
    })
    this.length = args.length;
  }

  /* copy() {
    let copy = [];
    for (let i = 0; i < this.length; i++) copy.push(this[i])
    return new List(...copy);
  }
   make it declaritive!
   
   copy() {
    const list = new Array(this.length)
      .fill(0)
      .map((v,i) => this[i]);
    return new List(...list);
  } */
  _valsArray() {
    return new Array(this.length)
      .fill(0)
      .map((v, i) => this[i])
  }

  //robs functional programming
  copy() {
    return new List(...this._valsArray())
  }
  push(val) { //or append
    return new List(...this._valsArray(), val)
  }
  prepend(val) {
    return new List(val, ...this._valsArray())
  }
  pop() {
    const vals = this._valsArray();
    const last = vals.pop();
    return {list: new List(...vals), last}
  }
}



// const testList = new List(1,2,3,4,5,6)
// console.log(testList)
// const pushList = testList.push(7)
// console.log(pushList)
// const {list:popOne, last:lastOne} = testList.pop()
// const { list: popTwo, last:lastTwo } = popOne.pop()
// console.log(popOne, lastOne)
// console.log(popTwo)
// const copyList = testList.copy();
// console.log(copyList)
