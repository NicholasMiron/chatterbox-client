var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // RoomsView.render();
    Parse.readAll(RoomsView.render);
    RoomsView.$button.on('click', RoomsView.addNewRoom);
  },

  render: function(data) {
    console.log(data);
    for (var i = 0; i < data.results.length; i++) {
      if (data.results[i].roomname){
        RoomsView.renderRoom(data.results[i].roomname)
      }
    }
  },

  renderRoom: function(roomname) {
    Messages.roomname = roomname; 
    if (!Rooms.storage.includes(Messages.roomname)){
      var aTemplate = RoomsView.createTemplate(Messages);
      $('select').append(aTemplate);
      Rooms.storage.push(Messages.roomname);
    }
  },

  addNewRoom: function(event) {
    console.log($('#newRoomName'));
  },

  createTemplate: _.template(

    '<option value="<%= roomname %>">' +
    '<%= roomname %>' + 
    '</option>'
    
  )
};
