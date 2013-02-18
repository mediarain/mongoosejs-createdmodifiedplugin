"use strict";

// lastMod.js
module.exports = exports = function createdModifiedPlugin (schema, options) {
  var select = false
  if (options && options.select == true){
    select = true
  }
  schema.add({ 
    created: {
      type: Date,
      'default': Date.now,
      select: select
    }, modified: {
      type: Date,
      'default': Date.now,
      select: select
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
