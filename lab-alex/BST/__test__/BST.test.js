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
      console.log(this.bst.root.val)
      this.bst.insert(new Node(7));
      expect(this.bst.root.right.right.right.val).toEqual(7)
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
})

