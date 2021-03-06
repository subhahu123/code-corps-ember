import Component from '@ember/component';
import { get } from '@ember/object';
import { inject as service } from '@ember/service';
import { alias } from 'ember-computed';

/**
 * The `code-theme-selector` component is used to toggle code themes on
 * tasks/comments/etc.
 *
 * @class code-theme-selector
 * @module Component
 * @extends Ember.Component
 */
export default Component.extend({
  classNames: ['code-theme-selector'],
  classNameBindings: ['themeClass'],

  /**
   * @property codeTheme
   * @type Ember.Service
   */
  codeTheme: service(),

  /**
   * Returns the current code theme's class name.
   *
   * @property themeClass
   * @type String
   */
  themeClass: alias('codeTheme.className'),

  /**
   * Fires on click. Toggles the code theme.
   *
   * @method click
   */
  click() {
    get(this, 'codeTheme').toggle();
  }
});
