PublicController = RouteController.extend({
  layoutTemplate: 'publicLayout'
});

PublicController.events({
  'click [data-action=logout]' : function() {
    AccountsTemplates.logout();
  }
});