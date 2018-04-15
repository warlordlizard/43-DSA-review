const {Node, BST} = require('../index.js');
describe('BST methods', () => {
  beforeEach(() => {
    let nums = [5, 3, 4, 6];
    this.bst = new BST();
  
    for (let i of nums) {
      this.bst.insert(new Node(i));
    }
  })
  afterEach(() => {
    delete this.bst;
  })
  describe('#insert', () => {
    it('should add a node in correct spot', () => {
      this.bst.insert(new Node(7));
      expect(this.bst.root.right.right.val).toEqual(7)
    })
  })
  describe('#find', () => {
    it('should return true if BST contains value', () => {
      let result = this.bst.find(4);
      expect(result).toBe(true)
    })
    it('should return false if BST does not contain value', () => {
      let result = this.bst.find(10);
      expect(result).toBe(false)
    })
  })
  describe('#findMax', () => {
    it('should return max value in BST', () => {
      let result = this.bst.findMax();
      expect(result).toEqual(6);
    })
  })
  describe('#findMin', () => {
    it('should return min value in BST', () => {
      let result = this.bst.findMin();
      expect(result).toEqual(3);
    })
  })
})

