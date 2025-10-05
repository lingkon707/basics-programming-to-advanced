class Calculator {
  constructor(value = 0) {
    this.value = value;
  }
  add(num) {
    this.value += num;
    return this;
  }
  multiply(num) {
    this.value *= num;
    return this;
  }
  show() {
    console.log(this.value);
  }
}

new Calculator().add(5).multiply(10).show(); // 50
