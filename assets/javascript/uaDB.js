  var config = {
    apiKey: "AIzaSyB02ri4PZSuQmOv_Z9IDn0HTLs4xsLPY6Q",
    authDomain: "authentication-testing-231da.firebaseapp.com",
    databaseURL: "https://authentication-testing-231da.firebaseio.com",
    projectId: "authentication-testing-231da",
    storageBucket: "authentication-testing-231da.appspot.com",
    messagingSenderId: "686766866707"
  };
  firebase.initializeApp(config);

//Get Login Elements
const signInEmail = document.getElementById('signInEmail');
const signInPassword = document.getElementById('signInPassword');
const btnLogin = document.getElementById('btnLogin');
const btnSignUp = document.getElementById('btnSignUp');
const btnLogOut = document.getElementById('btnLogOut');


btnLogin.addEventListener('click', e => {
    //Get credentials from inputs
    const email = signInEmail.value;
    const pass = signInPassword.value;
    const auth = firebase.auth();
    //Sign the user into firebase
    auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
});

btnLogin.addEventListener('click', e => {
    //Get credentials from inputs
    const email = signInEmail.value;
    const pass = signInPassword.value;
    const auth = firebase.auth();
    //Sign the user into firebase
    auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
});


btnLogOut.addEventListener('click', e => {
    firebase.auth().signOut();
});


firebase.auth.onAuthStateChanged(firebaseUser => {
  if (firebaseUser) {
    btnLogOut.classList.remove('hide');
  } else {
    btnLogOut.classList.add('hide');
  }
});

// var user = firebase.auth().currentUser;

// var database = firebase.database();
// function storeRecipe()
// firebase.auth.onAuthStateChanged(firebaseUser => {

// if (firebaseUser != null) {

// }



// if (user != null) {
//   user.providerData.forEach(function (profile) {
//     console.log("Sign-in provider: "+profile.providerId);
//     console.log("  Provider-specific UID: "+profile.uid);
//     console.log("  Name: "+profile.displayName);
//     console.log("  Email: "+profile.email);
//     console.log("  Photo URL: "+profile.photoURL);
//   });
// }
      // // FirebaseUI config.
      // var uiConfig = {
      //   callbacks: {
      //     signInSuccess: function(currentUser, credential, redirectUrl) {
      //       // Do something.
      //       // Return type determines whether we continue the redirect automatically
      //       // or whether we leave that to developer to handle.
      //       return true;
      //     }
      //   }
      //   signInSuccessUrl: '//gtbmed.github.io/authtest/page2.html',
      //   signInOptions: [
      //     // Leave the lines as is for the providers you want to offer your users.
      //     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      //     firebase.auth.EmailAuthProvider.PROVIDER_ID
      //   ],
      //   // Terms of service url.
      //   tosUrl: '<your-tos-url>'
      // };
      // // Initialize the FirebaseUI Widget using Firebase.
      // var ui = new firebaseui.auth.AuthUI(firebase.auth());
      // // The start method will wait until the DOM is loaded.
      // ui.start('#firebaseui-auth-container', uiConfig);





//         ref.child("users").child(authData.uid).set({
//           provider: authData.provider,
//           name: getName(authData)
//           //some more user data
//             });


// Firebase Functions trigger events on UA
// functions.auth.user().onCreate
// functions.auth.user().onDelete
// event.data
//
// const functions = require('firebase-functions')
// const admin = require('firebase-admin')
// admin.initilizeApp(functions.config().firebase)  //initialize admin sdk
const ref = database.ref(); // create reference to root of the db
exports.createUserAccount = function.auth.user().onCreate(event => { // createUserAccount is function name created by dev
    const uid = event.data.uid
    const newUserRef = ref.child('/users/${uid}') //creates reference to users/uid
    return newUserRef.set ({
      uid: uid,
      })
})

// exports.cleanupUserData = functions.auth.user().onDelete(event =>{ // createUserAccount is function name created by dev
//     const uid = event.data.uid //get user uid
//     const userRef = ref.child('/users/${uid}')
//     return userRef.update({isDeleted: true}) // adds boolean object "isDeleted"
// }) 