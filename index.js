"use strict";

// lastMod.js
module.exports = exports = function createdModifiedPlugin (schema, options) {
  schema.add({ 
    created: {
      type: Date,
      'default': Date.now
    }, modified: {
      type: Date
    } 
  });

  schema.pre('save', function (next) {
    this.modified = new Date;
    next();
  })

  if (options && options.index) {
    schema.path('created').index(options.index);
    schema.path('modified').index(options.index);
  }
}
