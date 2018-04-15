const {LinkNode, LinkedList} = require('../index.js');

const testLinkedList = new LinkedList();
testLinkedList.prepend(6);
testLinkedList.prepend(5);

describe('LinkedList Methods', () => {
  describe('#prepend', () => {
    it('should add node to the beginning', () => {
      let result = {
        head:  { next:  { next: { next: null, data: 6}, data: 5 }, data: 4 } }
      testLinkedList.prepend(4);
      expect(testLinkedList.head.data).toEqual(4);
      expect(testLinkedList).toEqual(result);
    })
  })
  describe('#append', () => {
    it('should add node to the end', () => {
      testLinkedList.append(7);
      let result = {
        head:  { next:  { next: { next: { next: null, data: 7}, data: 6}, data: 5 }, data: 4 } };
      expect(typeof testLinkedList).toBe('object');
      expect(testLinkedList).toEqual(result);
    })
  })
  describe('#find', () => {
    it('should find data at input index', () => {
      let result = 6
      expect(testLinkedList.find(2)).toEqual(result)
    })
  })
})