var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

    MessagesView.initialize();
    Friends.initialize();
    FormView.initialize();
    RoomsView.initialize();
    
    
    // App.loadMessages();

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      // FormView.initialize(data);
      // RoomsView.initialize(data);
      // MessagesView.initialize(data);

      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }


};
