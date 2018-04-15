const {Node, BST} = require('../index.js');
describe('BST methods', () => {
  beforeEach(() => {
    let nums = [50, 30, 40, 60];
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
      this.bst.insert(new Node(70));
      expect(this.bst.root.right.right.val).toEqual(70)
    })
  })
  describe('#find', () => {
    it('should return true if BST contains value', () => {
      let result = this.bst.find(40);
      expect(result).toBe(true)
    })
    it('should return false if BST does not contain value', () => {
      let result = this.bst.find(100);
      expect(result).toBe(false)
    })
  })
  describe('#findMax', () => {
    it('should return max value in BST', () => {
      let result = this.bst.findMax();
      expect(result).toEqual(60);
    })
  })
  describe('#findMin', () => {
    it('should return min value in BST', () => {
      let result = this.bst.findMin();
      expect(result).toEqual(30);
    })
  })
  describe('#findNearest', () => {
    it('should return node with nearest val to one input', () => {
      let result = this.bst.findNearest(36);
      expect(result.val).toEqual(40);
    })
  })
  describe('#calcHeight', () => {
    it('should equal distance in nodes from leaf to root', () => {
      let result = this.bst.calcHeight();
      expect(result).toEqual(1)
    })
    it('should still work on taller tree', () => {
      this.bst.insert(new Node(70));
      this.bst.insert(new Node(80));
      this.bst.insert(new Node(90));
      let result = this.bst.calcHeight();
      expect(result).toEqual(4)
    })
  })
})

