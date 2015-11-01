Meteor.publish('games', function() {
  return Games.find();
});

Meteor.publish('game', function(_id) {
  return Games.find({_id: _id});
});