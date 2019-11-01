

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    window.alert(user + " just signed in.")
  } else {
    // No user is signed in.
  }
});



function login() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  firebase.auth().signInWithEmailAndPassword(username, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    window.alert(errorMessage);
  });
}
