const {Node, Stack} = require('../index.js');

const testStack = new Stack();

describe('Stack Methods', () => {
  describe('#push', () => {
    it('should add item to stack', () => {
      let result = testStack.push(10);
      expect(testStack.size).toEqual(1);
      expect(result.val).toEqual(10);
    })
  })
  describe('#pop', () => {
    it('should remove item from top of Stack', () => {
      let popStack = new Stack();
      popStack.push(10);
      popStack.push(11);
      popStack.push(12);
      let result = popStack.pop();
      expect(popStack.size).toEqual(2);
      expect(result.val).toEqual(12);
    })
  })
})