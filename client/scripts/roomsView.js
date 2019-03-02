var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // RoomsView.render();
    Parse.readAll(RoomsView.render());
  },

  render: function(data) {
    
    
    for (var i = 0; i < data.results.length; i++) {
      var aTemplate = RoomsView.createTemplate(data.results[i]);
      $('select').append(aTemplate);
    }
    
  },

  createTemplate: function(aName) {
    _.template(
      '<option value="' + aName + '">' +
      '<%= username %>' + 
      '</option>'
    )
  }
};
