/* eslint-env node */
'use strict';

module.exports = {
  name: 'inplace-edit',
  included: function(app) {
    this._super.included(app);

    // OPTIONAL: import your addon dependencies from bower_components
    // app.import(`${app.bowerDirectory}/bootstrap/dist/js/bootstrap.js`);
  }
};
