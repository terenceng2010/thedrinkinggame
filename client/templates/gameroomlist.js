Template.GameRoomList.created = function () {
  this.autorun(function () {
    this.subscription = Meteor.subscribe('games');
  }.bind(this));
};

Template.GameRoomList.rendered = function () {
  this.autorun(function () {
    if (!this.subscription.ready()) {
      IonLoading.show();
    } else {
      IonLoading.hide();
    }
  }.bind(this));
};

Template.GameRoomList.helpers({
  games: function () {
    return Games.find();
  }
});