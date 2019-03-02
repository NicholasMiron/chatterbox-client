var MessageView = {

  render: _.template(

    '<div class="chat">' +
      
      '<a href="#" class= "userAnchor"><div class="username">' +
        '<%= username %>' +
      '</div></a>' +

      '<div class="message">' +
        '<%= text %>' +
      '</div>' +

    '</div>'
  )

};