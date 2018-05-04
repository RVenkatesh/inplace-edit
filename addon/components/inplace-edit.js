import Ember from 'ember';
import layout from '../templates/components/inplace-edit';

export default Ember.Component.extend({
  layout,
  classNames: ['inplace-edit'],
  // classNamesBinding: 'focus',
  classNameBindings: ['focus', 'disabled'],
  disabled: false,
  spellcheck: false,
  type: 'text',
  value: null,
  focus: false,

  oldValue: null,
  actions: {
    focusIn() {
      this.set('focus', true);
      this.set('oldValue', this.get('value'));
    },
    focusOut() {
      this.set('focus', false);
      if (this.get('oldValue') !== this.get('value')) {
        this.get('onchange')();
      }
    }
  }
});
