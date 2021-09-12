//How arrays work under the hood in Javascript

class ArrayList {
    constructor() {
        this.data = {};
        this.length = 0;
    }
    push(value) {
        this.data[this.length] = value;
        this.length++;
    }
    pop() {
        return response;
    }
    get(index) {
       return this.data[index];
    }
    delete(index) {
        const response = this.data[index];
        this._collapseTo(index);
        return response;
    }
    _collapseTo(index) {
        for (let i = index; i < this.length; i++) {
          this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
}