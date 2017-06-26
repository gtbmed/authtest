  var config = {
    apiKey: "AIzaSyB02ri4PZSuQmOv_Z9IDn0HTLs4xsLPY6Q",
    authDomain: "authentication-testing-231da.firebaseapp.com",
    databaseURL: "https://authentication-testing-231da.firebaseio.com",
    projectId: "authentication-testing-231da",
    storageBucket: "authentication-testing-231da.appspot.com",
    messagingSenderId: "686766866707"
  };
  firebase.initializeApp(config);
      // FirebaseUI config.
      var uiConfig = {
        signInSuccessUrl: '//gtbmed.github.io/authtest/page2.html',
        signInOptions: [
          // Leave the lines as is for the providers you want to offer your users.
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        // Terms of service url.
        tosUrl: '<your-tos-url>'
      };
      // Initialize the FirebaseUI Widget using Firebase.
      var ui = new firebaseui.auth.AuthUI(firebase.auth());
      // The start method will wait until the DOM is loaded.
      ui.start('#firebaseui-auth-container', uiConfig);

      var auth = firebase.auth();
      console.log(auth);



// var database = firebase.database();

//         ref.child("users").child(authData.uid).set({
//           provider: authData.provider,
//           name: getName(authData)
//           //some more user data
//             });