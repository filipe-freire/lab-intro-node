class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    if (this.items.length) {
      this.items.sort((a, b) => {
        return a - b;
      });
    }
    this.length = this.items.length;
  }

  get(pos) {
    if (pos >= this.items.length) {
      throw new Error('OutOfBounds');
    } else {
      return this.items[pos];
    }
  }

  max() {
    if (this.length) {
      return Math.max(...this.items);
    } else {
      throw new Error('EmptySortedList');
    }
  }

  min() {
    if (this.length) {
      return Math.min(...this.items);
    } else {
      throw new Error('EmptySortedList');
    }
  }

  sum() {
    const arrClone = [...this.items];
    const sum = arrClone.reduce((acc, item) => acc + item, 0);
    return sum;
  }

  avg() {
    if (this.length) {
      const arrClone = [...this.items];
      const sum = arrClone.reduce((acc, item) => acc + item, 0);
      return sum / this.length;
    } else {
      throw new Error('EmptySortedList');
    }
  }
}

module.exports = SortedList;
