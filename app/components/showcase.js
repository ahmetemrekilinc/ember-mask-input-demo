//BEGIN-SNIPPET showcase
import Component from '@ember/component';

export default Component.extend({

  init(){
    this._super(...arguments);
    this.set('ibanValue', 'TR625373458726249832302425');
    this.set('bindMaskedIbanValue', 'TR62 5373 4587 2624 9832 3024 25');
    this.set('customValue', '1234123443214321');
  },

  actions: {

    updatedIbanVal(ibanValue){
      this.set('enteredAction', true);
      this.set("ibanValue", ibanValue);
    }

  }

});
//END-SNIPPET
