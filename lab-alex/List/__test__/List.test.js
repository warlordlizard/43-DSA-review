const List = require('../index');

const testList = new List(1, 2, 3, 4, 5, 6)

describe('List Methods', () => {
  describe('#copy', () => {
    it('should copy List', () => {
      let result = testList.copy()
      expect(result).toEqual(testList);
      expect(result.length).toEqual(testList.length);
    })
  })
  describe('#push', () => {
    it('should add an item', () => {
      let result = testList.push(7)
      expect(result.length).toBe(7);
      expect(result).toContain(7);
    })
  })
  describe('#pop', () => {
    it('should remove an item', () => {
      let {list:result, last:lastNum} = testList.pop();
      expect(result.length).toBe(5);
      expect(result).not.toContain(6);
    })
  })
})