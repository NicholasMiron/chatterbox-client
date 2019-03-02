var Friends = {
  $user: $('.userAnchor'),

  initialize: function() {
    Friends.$user.on('click', function() {
      console.log('anton')
    });
  },

  addFriend: function() {
    console.log('add friend clicked');

  }

};