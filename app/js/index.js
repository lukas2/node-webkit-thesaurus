(function() {
  'use strict';
  var gui;

  gui = require('nw.gui');

  $(function() {
    var mapTerm, submit;
    mapTerm = function(terms) {
      return terms.map(function(term) {
        return term.term;
      });
    };
    submit = function(text) {
      $('#ajax-loader').show();
      $('#results').text('');
      console.log('submitting text: #{text}');
      return $.ajax('http://www.openthesaurus.de/synonyme/search?q=' + text + '&format=application/json', {
        error: function(jqXHR, textStatus, errorThrown) {
          $('#ajax-loader').hide();
          $('results').show();
          return $('results').append('AJAX Error: #{textStatus}');
        },
        success: function(data, textStatus, jqHXR) {
          var key, value, _ref, _results;
          $('#ajax-loader').hide();
          if (data.synsets.length > 0) {
            _ref = data.synsets;
            _results = [];
            for (key in _ref) {
              value = _ref[key];
              _results.push($('#results').append('<p>' + mapTerm(value.terms).join(', ') + '</p>'));
            }
            return _results;
          } else {
            return $('#results').append('<p> (kein Ergebnis) </p>');
          }
        }
      }, $('#results').show());
    };
    $('#blog-link').click(function(e) {
      console.log('this: ' + this);
      e.preventDefault();
      return gui.Shell.openExternal($(this).attr('href'));
    });
    $('#input-field').keypress(function(e) {
      if (e.which === 13) {
        return submit($('#input-field').val());
      }
    });
    $(document).keyup(function(e) {
      if (e.which === 27) {
        return gui.Window.get().hide();
      }
    });
    return $('#input-field').focus();
  });

}).call(this);
