/**
 * if a new user instance connects, keep track of user
 */
Ape.addEvent('adduser', function(user) {
    addUser(user);
});

/**
 * user times out
 * delete the user
 */
Ape.addEvent('deluser', function(user) {
  delUser(user);
});

