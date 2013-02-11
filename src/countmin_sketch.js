/*
 * countmin_sketch
 * https://github.com/KurtRMueller/countmin_sketch
 *
 * Copyright (c) 2013 Kurt Mueller
 * Licensed under the MIT license.
 */


/*!
 * jQuery lightweight plugin boilerplate
 * Original author: @ajpiano
 * Further changes, comments: @addyosmani
 * Licensed under the MIT license
 */


// the semi-colon before the function invocation is a safety 
// net against concatenated scripts and/or other plugins 
// that are not closed properly.
;(function ( $, window, document, undefined ) {
    
    // undefined is used here as the undefined global 
    // variable in ECMAScript 3 and is mutable (i.e. it can 
    // be changed by someone else). undefined isn't really 
    // being passed in so we can ensure that its value is 
    // truly undefined. In ES5, undefined can no longer be 
    // modified.
    
    // window and document are passed through as local 
    // variables rather than as globals, because this (slightly) 
    // quickens the resolution process and can be more 
    // efficiently minified (especially when both are 
    // regularly referenced in our plugin).

    // Create the defaults once
    var pluginName = "dataStreamArray",
        defaults = {
            rows: 5,
            cols: 5,
            maxVal: 5
        };

    // The actual plugin constructor
    function DataStreamArray( element, options ) {
        


        // jQuery has an extend method that merges the 
        // contents of two or more objects, storing the 
        // result in the first object. The first object 
        // is generally empty because we don't want to alter 
        // the default options for future instances of the plugin
        this.options = $.extend( {}, defaults, options) ;
        
        this._defaults = defaults;
        this._name = pluginName;
        this._dsArray = new Array(this.options.rows);

        // get the default 'this' element
        this.el = element;
        this.$el = $(element);
        
        this.init();
    }

    DataStreamArray.prototype = {
      constructor: DataStreamArray,

      // the "constructor" function
      init: function () {
        this.initArray();
      },
      // initialize the array
      initArray: function() {
        var rows = this._dsArray.length;
        var cols = this.options.cols;
        var maxVal = this.options.maxVal;
        var rowIndex;
        var colIndex;

        // initialize the array and set each cell to a random value between 0 & max val
        for(rowIndex=0; rowIndex < rows; rowIndex++) {
          this._dsArray[rowIndex] = new Array(cols);

          for(colIndex=0; colIndex < cols; colIndex++) {
            this._dsArray[rowIndex][colIndex] = Math.floor(Math.random() * (maxVal));
          }
        }
      }
    };

    // A really lightweight plugin wrapper around the constructor, 
    // preventing against multiple instantiations
    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if ( !$.data(this, "plugin_" + pluginName )) {
                $.data( this, "plugin_" + pluginName, 
                new DataStreamArray( this, options ));
            }
        });
    };

})( jQuery, window, document );