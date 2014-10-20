(function() {
  'use strict';
  var gui, option, shortcut;

  gui = require('nw.gui');

  option = {
    key: 'Alt+Shift+T',
    active: function() {
      gui.Window.get().show();
      gui.Window.get().focus();
      return $('#input-field').select();
    },
    failed: function(msg) {
      return console.log('failed to register global keyboard shortcut: ' + msg);
    }
  };

  shortcut = new gui.Shortcut(option);

  gui.App.registerGlobalHotKey(shortcut);

}).call(this);
