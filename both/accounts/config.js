AccountsTemplates.configureRoute('signIn', {
    layoutTemplate: 'publicLayout',
    redirect: '/dashboard'
});
AccountsTemplates.configureRoute('signUp', {
    layoutTemplate: 'publicLayout',
    redirect: '/dashboard'
});
AccountsTemplates.configureRoute('ensureSignedIn', {
    layoutTemplate: 'publicLayout'
});