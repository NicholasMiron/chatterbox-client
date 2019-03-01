var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // Messages.storage = data.results.slice();
    // MessagesView.loadMessages()
    Parse.readAll(MessagesView.loadMessages);
  },

  renderMessage: function(message) {
    // call messageView.render and pass in message
    console.log(message);
    MessagesView.encodeMessage(message);
    let structuredMessage = MessageView.render(message);
    // append to chats in index.html
    $('#chats').append(structuredMessage);
  },

  encodeMessage: function(message) {
    message.username = encodeURI(message.username).replace(/%20/g, ' ');
    message.text = encodeURI(message.text).replace(/%20/g, ' ');
    message.roomname = encodeURI(message.roomname).replace(/%20/g, ' ');
    
    return message;
  },

  loadMessages: function(data) {
    // itterate through all messages
    console.log('turtle', this);
    console.log('i am a hippo', data);
    for (var i = 0; i < data.results.length; i++) {
      // call render message for each message
      console.log('we are hippi', data[i]);
      if (data.results[i].username && data.results[i].text) {
        MessagesView.renderMessage(data.results[i]);
      }
    }
  }

};