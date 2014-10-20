'use strict'

gui = require('nw.gui')

# Coffeescript ist knorke ;)

$ ->
  mapTerm = (terms) ->
  	return terms.map (term) -> term.term

  submit = (text) ->
  	$('#ajax-loader').show()
  	$('#results').text ''
  	console.log 'submitting text: #{text}'

  	$.ajax 'http://www.openthesaurus.de/synonyme/search?q=' + text + '&format=application/json', 
  	  error: (jqXHR, textStatus, errorThrown) ->
        $('#ajax-loader').hide()
        $('results').show()
        $('results').append 'AJAX Error: #{textStatus}'
  	  success: (data, textStatus, jqHXR) -> 
        $('#ajax-loader').hide()
        if data.synsets.length > 0
          for key, value of data.synsets
      	    $('#results').append '<p>' + mapTerm(value.terms).join(', ') + '</p>' 
        else
          $('#results').append '<p> (kein Ergebnis) </p>' 
  	    $('#results').show()

  $('#blog-link').click (e) ->
    console.log('this: '+this)
    e.preventDefault()
    gui.Shell.openExternal($(this).attr('href'))

  $('#input-field').keypress (e) ->
    if e.which == 13 # enter
      submit $('#input-field').val()
  $(document).keyup (e) ->
    if e.which == 27 # escape
      gui.Window.get().hide()

  $('#input-field').focus()