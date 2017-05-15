Accounts.onCreateUser(function(options,user){
    if (typeof(user.services.google) != "undefined") {
        user.email = user.services.google.email;
        user.profilePicture = user.services.google.picture;
        user.username = user.services.google.name;
    }
    return user;
});