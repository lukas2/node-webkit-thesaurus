'use strict'

gui = require('nw.gui')

option =
	key: 'Alt+Shift+T'
	active: ->
		gui.Window.get().show()
		gui.Window.get().focus()
		$('#input-field').select()

	failed: (msg) ->
		console.log('failed to register global keyboard shortcut: ' + msg)

shortcut = new gui.Shortcut( option )

gui.App.registerGlobalHotKey( shortcut )