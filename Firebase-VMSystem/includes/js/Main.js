
//Initialize firbase
var config = {
    apiKey: "AIzaSyAe303yTTYtWPmgJXhthtPZWTiiV7swX50",
    authDomain: "vesselmonitoringsystem-a87b8.firebaseapp.com",
    databaseURL: "https://vesselmonitoringsystem-a87b8-default-rtdb.firebaseio.com",
    projectId: "vesselmonitoringsystem-a87b8",
    storageBucket: "vesselmonitoringsystem-a87b8.appspot.com",
    messagingSenderId: "558254383614",
    appId: "1:558254383614:web:3fae7d63462de4a6cee0af",
    measurementId: "G-2YLXLQ15BL"
};
firebase.initializeApp(config);

function getData(){
    var firebaseRef = firebase.database().ref("Fishing Login").child("login");
    firebaseRef.once("value", function(snapshot){
        var data = snapshot.val();
        //console.log("Username is : " + data["username"]);
        //console.log("Password is : " + data["password"]);
        var u_name = data["username"];
        var pass = data["password"];
        document.getElementById('username').value = u_name;
        document.getElementById('password').value = pass;
    });
}

function getTableData(){
    var firebaseRef = firebase.database().ref("Fishing Login");
    firebaseRef.once("value", function(snapshot){
        var data = snapshot.val();
        console.log(data["Fishing Date"]);
        //console.log("Username is : " + data["username"]);
        //console.log("Password is : " + data["password"]);
        //var u_name = data["username"];
        //var pass = data["password"];
        //document.getElementById('username').value = u_name;
        //document.getElementById('password').value = pass;
    });
}

//Reference messages collection
//var loginRef = firebase.database().ref("Fishing Details").child("Login");

//Listen for form submit
document.getElementById('login').addEventListener('submit', submitForm);

//Submit form
function submitForm(e){
    e.preventDefault();

   //Save message
   loginLoad();
}
 

//Function to get form values
 function getInputVal(id){
     return document.getElementById(id).value;
 }

//Save message to firebase
// function saveLogin(username, password){
//     var newLoginRef = loginRef;
//     newLoginRef.set({
//         username: username,
//         password: password
//     }, error=>{
//         if(error){
//             alert("Error!");
//             document.getElementById('username').value = "";
//             document.getElementById('password').value = "";
//         }
//         else{
//             alert("Login Successfull")
//             document.getElementById('username').value = "";
//             document.getElementById('password').value = "";
//             window.location.replace("includes/php/pages/home.php");
//         }
//     });
// }
function resetLoginError(){
    document.getElementById("loginerror").style.display = "none";
}

function loginLoad(){
    var username = getInputVal('username');
    var password = getInputVal('password');
    var firebaseRef = firebase.database().ref("Fishing Login").child("login");
    firebaseRef.once("value", function(snapshot){
        var data = snapshot.val();
        var u_name = data["username"];
        var pass = data["password"];

        if(u_name == username && pass == password){
            document.getElementById("loginerror").style.display = "none";
            alert("Login Successful");
            window.location.replace("includes/php/pages/home.php");
        }
        else{
            document.getElementById("loginerror").style.display = "inline";
            document.getElementById('username').value = "";
            document.getElementById('password').value = "";
        }
    });
}