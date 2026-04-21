var ResturentState = {
  isOpen: false,

  open: function () {
    this.isOpen = true;
  },

  close: function () {
    this.isOpen = false;
  },

  status: function () {
    return this.isOpen ? "OPEN" : "CLOSED";
  }
};

ResturentState.open();
console.log(ResturentState.status());