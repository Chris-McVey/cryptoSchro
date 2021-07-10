const hash = require('object-hash');


class BlockChain {
  constructor() {

    //create the chain
    this.chain = [];
    //transactions
    this.currentTransations = [];

  }

  addNewBlock(previousHash) {
    let block = {
      index: this.chain.length + 1,
      timestamp: Date.now(),
      transactions: this.currentTransations,
      previousHash
    };
    this.hash = hash(block);
    //add it to the chain
    this.chain.push(block);
    this.currentTransations = [];
    return block;
  }

  addNewTransaction(sender, recipient, amount) {
    this.currentTransations.push({ sender, recipient, amount });
  }

  lastBlock() {
    return this.chain.slice(-1)[0];
  }

  isEmpty() {
    return this.chain.length === 0;
  }


}

module.exports = BlockChain;