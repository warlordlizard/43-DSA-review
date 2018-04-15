const {Node, Queue} = require('../index.js');

let testQ = new Queue();
testQ.enqueque(3)
testQ.enqueque(4)
testQ.enqueque(5)
testQ.enqueque(6)
testQ.enqueque(7)
testQ.enqueque(8)

describe('Queue methods', () => {
  describe('#enqueue', () => {
    it('should add an item to the end of the list', () => {
      let result = testQ.enqueque(9);
      expect(testQ.length).toEqual(7);
      expect(testQ.next).toEqual(0);
      expect(testQ['6'].val).toEqual(result.val);
    })
  })
  describe('#dequeue', () => {
    it('should remove oldest item/ front of line', () => {
      let result = testQ.dequeue();
      expect(testQ.length).toEqual(6);
      expect(testQ.next).toEqual(1);
      expect(result.val).toEqual(3)
    })
  })
})