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
      initApp = function() {
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            // User is signed in.
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var uid = user.uid;
            var phoneNumber = user.phoneNumber;
            var providerData = user.providerData;
            user.getIdToken().then(function(accessToken) {
              document.getElementById('sign-in-status').textContent = 'Signed in';
              document.getElementById('sign-in').textContent = 'Sign out';
              document.getElementById('account-details').textContent = JSON.stringify({
                displayName: displayName,
                email: email,
                emailVerified: emailVerified,
                phoneNumber: phoneNumber,
                photoURL: photoURL,
                uid: uid,
                accessToken: accessToken,
                providerData: providerData
              }, null, '  ');
            });
          } else {
            // User is signed out.
            document.getElementById('sign-in-status').textContent = 'Signed out';
            document.getElementById('sign-in').textContent = 'Sign in';
            document.getElementById('account-details').textContent = 'null';
          }
        }, function(error) {
          console.log(error);
        });
      };

      window.addEventListener('load', function() {
        initApp()
      });

var database = firebase.database();

    //Global Variables
    var name = "";
    var destination = "";
    var startTime = 0;
    var frequency = 0;

    $("#add-Train").on("click", function(event) {
        event.preventDefault();

        name = $("#train-name").val().trim();
        destination = $("#destination").val().trim();
        startTime = $("#start-time").val().trim();
        frequency = $("#train-frequency").val().trim();
        console.log(name);
        console.log(destination);
        console.log(startTime);
        console.log(frequency);

        // First Time (pushed back 1 year to make sure it comes before current time)
        var firstTimeConverted = moment(startTime, "HHmm").subtract(1, "years");
        console.log(firstTimeConverted);


        // Difference between the times
        var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
        console.log("DIFFERENCE IN TIME: " + diffTime);

        // Time apart (remainder)
        var tRemainder = diffTime % frequency;
        console.log(tRemainder);

        // Minute Until Train
        minutesAway = frequency - tRemainder;
        console.log("MINUTES TILL TRAIN: " + minutesAway);

        // Next Train
        var nextTrain = moment().add(minutesAway, "minutes");
        console.log("ARRIVAL TIME: " + moment(nextTrain).format("HHmm"));
        nextArrival = moment(nextTrain, "HHmm").format("HHmm");
        // Upload train data to the database
        database.ref().push({
            name: name,
            destination: destination,
            startTime: startTime,
            frequency: frequency,
        });
        //Clear fields in "Add Train"
        $("#train-name").val("");
        $("#destination").val("");
        $("#start-time").val("");
        $("#train-frequency").val("");
    });

    database.ref().on("child_added", function(childSnapshot, prevChildKey) {
        console.log(childSnapshot.val());

        var recall_name = childSnapshot.val().name;
        var recall_destination = childSnapshot.val().destination;
        var recall_startTime = childSnapshot.val().startTime;
        var recall_frequency = childSnapshot.val().frequency;

        // Calculate Time of Next Train Arrival and minute until next train arrives
        // convert the Start time of the train to be used by momentJS as HHmm
        var firstTimeConverted = moment(recall_startTime, "HHmm").subtract(1, "years");
        // Find the difference in minutes between the start time and the current time
        var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
        // Divide the difference by the frequency as the remainder is used in the next calculation
        var tRemainder = diffTime % recall_frequency;
        //The frequency each train arrives minus the remainder equals the amount of time till the next train
        var minutesAway = recall_frequency - tRemainder;
        // Add the minutes from arrival to the current time to give an arrival time
        var nextTrain = moment().add(minutesAway, "minutes");
        //Store the arrival time in a usable format
        var nextArrival = moment(nextTrain, "HHmm").format("h:mm A");
        // add an entry to the train table
        $("#trainTable > tbody").append("<tr><td>" + recall_name + "</td><td>" + recall_destination + "</td><td>" + recall_frequency + "</td><td>" + nextArrival + "</td><td>" + minutesAway + "</td></tr>");

    }, function(errorObject) {
        console.log("Errors handled: " + errorObject.code);

    });


    //Get the firebase reference    
var ref = new Firebase("https://<YOUR-FIREBASE-APP>.firebaseio.com");
    ref.onAuth(function(authData) {
      if (authData && isNewUser) {
        // save the user's profile into Firebase so we can list users,
        // use them in Security and Firebase Rules, and show profiles
        ref.child("users").child(authData.uid).set({
          provider: authData.provider,
          name: getName(authData)
          //some more user data
            });
          }
        });