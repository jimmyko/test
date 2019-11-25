// -- in page multi step form. 333
var multiStepForm = {
  _init: function() {
    this.backBtn = null;
    this.continueBtn = null;
    this.previousBtn = null;
    this.nextBtn = null;
    this.forms = [];
    this.current;
  },
  addForm: function(elem) {
    this.forms.push(elem);
  },
  start: function() {
    // do nothing when no forms defined.
    if (this.forms.length == 0) {
      return;
    }

    this._init();

    this.current = 0;

    this.processButtons();
  },
  hideElem: function(elem) {
    elem.hide();
  },
  showElem: function(elem) {
    elem.show();
  },
  processButtons: function() {
    if (current == 0) {
      this.hideElem(this.previousBtn);
      this.showElem(this.backBtn);
    }
    if (current > 0) {
      this.showElem(this.previousBtn);
      this.hideelem(this.backBtn);
    }
    if (current == this.forms.length - 1) {
      this.hideElem(this.nextBtn);
      this.showElem(this.continueBtn);
    }
    if (current < this.forms.length - 1) {
      this.showElem(this.nextBtn);
      this.hideElem(this.continueBtn);
    }
  }
}
