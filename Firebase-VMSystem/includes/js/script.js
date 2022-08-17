function tableLoad(){
    var tbody =document.getElementById('tbody1');
    var firebaseRef = firebase.database().ref("Fishing Details");
    firebaseRef.once('value', function(snapshot){
        snapshot.forEach(child => {
            let tr = document.createElement("tr");
            let td1 = document.createElement('td');
            td1.innerHTML = child.key;
            tr.appendChild(td1);

            var root = firebase.database().ref("Fishing Details").child(child.key);
            root.once('value', function(childSnapshot){
                let mackerel = 0;
                let alaskansalmon = 0;
                let rainbowtrout = 0;
                let alaskanpollock = 0;
                let stripedbase = 0;
                let tuna = 0;
                let herring = 0;
                let perch = 0;
                let char = 0;
                let other = 0;
                    childSnapshot.forEach(grandchildSnapshot => {
                        var data = grandchildSnapshot.val();
                        var fishname = data["Fish Name"];
                        var fishweight =  parseFloat(data["Fish Weight"]);
                        if(fishname == "Meckerel"){
                            mackerel = mackerel + fishweight;
                        }
                        else if(fishname == "Alaskan Salmon"){
                            alaskansalmon = alaskansalmon + fishweight;
                        }
                        else if(fishname == "Rainbow trout"){
                            rainbowtrout = rainbowtrout + fishweight;
                        }
                        else if(fishname == "Alaskan pollock"){
                            alaskanpollock = alaskanpollock + fishweight;
                        }
                        else if(fishname == "Striped base"){
                            stripedbase = stripedbase + fishweight;
                        }
                        else if(fishname == "Tuna"){
                            tuna = tuna + fishweight;
                        }
                        else if(fishname == "Herring"){
                            herring = herring + fishweight;
                        }
                        else if(fishname == "Perch"){
                            perch = perch + fishweight;
                        }
                        else if(fishname == "Char"){
                            char = char + fishweight;
                        }
                        else if(fishname == "Other"){
                            other = other + fishweight;
                        }
                    })
                    let td2 = document.createElement('td');
                    let td3 = document.createElement('td');
                    let td4 = document.createElement('td');
                    let td5 = document.createElement('td');
                    let td6 = document.createElement('td');
                    let td7 = document.createElement('td');
                    let td8 = document.createElement('td');
                    let td9 = document.createElement('td');
                    let td10 = document.createElement('td');
                    let td11 = document.createElement('td');

                    td2.innerHTML = mackerel.toFixed(2) + " kg";
                    td3.innerHTML = alaskansalmon.toFixed(2) + " kg";
                    td4.innerHTML = rainbowtrout.toFixed(2) + " kg";
                    td5.innerHTML = alaskanpollock.toFixed(2) + " kg";
                    td6.innerHTML = stripedbase.toFixed(2) + " kg";
                    td7.innerHTML = tuna.toFixed(2) + " kg";
                    td8.innerHTML = herring.toFixed(2) + " kg";
                    td9.innerHTML = perch.toFixed(2) + " kg";
                    td10.innerHTML = char.toFixed(2) + " kg";
                    td11.innerHTML = other.toFixed(2) + " kg";

                    tr.appendChild(td2);
                    tr.appendChild(td3);
                    tr.appendChild(td4);
                    tr.appendChild(td5);
                    tr.appendChild(td6);
                    tr.appendChild(td7);
                    tr.appendChild(td8);
                    tr.appendChild(td9);
                    tr.appendChild(td10);
                    tr.appendChild(td11);

                    tbody.appendChild(tr);
            })
        })
    })
}

function d2dLoad(){
    var tbody =document.getElementById('tbodyd2d');
    var firebaseRef = firebase.database().ref("Fishing Details");
    firebaseRef.once('value', function(snapshot){
        snapshot.forEach(child => {
            let tr = document.createElement("tr");
            let td1 = document.createElement('td');
            td1.innerHTML = child.key;
            tr.appendChild(td1);
            var root = firebase.database().ref("Fishing Details").child(child.key);
            root.once('value', function(childSnapshot){
                let mackerel = 0;
                let alaskansalmon = 0;
                let rainbowtrout = 0;
                let alaskanpollock = 0;
                let stripedbase = 0;
                let tuna = 0;
                let herring = 0;
                let perch = 0;
                let char = 0;
                let other = 0;
                    childSnapshot.forEach(grandchildSnapshot => {
                        var data = grandchildSnapshot.val();
                        var fishname = data["Fish Name"];
                        var fishweight =  parseFloat(data["Fish Weight"]);
                        if(fishname == "Meckerel"){
                            mackerel = mackerel + fishweight;
                        }
                        else if(fishname == "Alaskan Salmon"){
                            alaskansalmon = alaskansalmon + fishweight;
                        }
                        else if(fishname == "Rainbow trout"){
                            rainbowtrout = rainbowtrout + fishweight;
                        }
                        else if(fishname == "Alaskan pollock"){
                            alaskanpollock = alaskanpollock + fishweight;
                        }
                        else if(fishname == "Striped base"){
                            stripedbase = stripedbase + fishweight;
                        }
                        else if(fishname == "Tuna"){
                            tuna = tuna + fishweight;
                        }
                        else if(fishname == "Herring"){
                            herring = herring + fishweight;
                        }
                        else if(fishname == "Perch"){
                            perch = perch + fishweight;
                        }
                        else if(fishname == "Char"){
                            char = char + fishweight;
                        }
                        else if(fishname == "Other"){
                            other = other + fishweight;
                        }
                    })
                    let td2 = document.createElement('td');
                    //  let td3 = document.createElement('td');
                    // let td4 = document.createElement('td');
                    // let td5 = document.createElement('td');
                    // let td6 = document.createElement('td');
                    // let td7 = document.createElement('td');
                    // let td8 = document.createElement('td');
                    // let td9 = document.createElement('td');
                    // let td10 = document.createElement('td');
                    // let td11 = document.createElement('td');
                    var total = mackerel + alaskansalmon + rainbowtrout + alaskanpollock + stripedbase + tuna + herring + perch + char + other;

                    td2.innerHTML = total.toFixed(2) + " kg";
                    //  td3.innerHTML = "<button class = 'btn btn-danger'>Delete</button>";
                    // td4.innerHTML = rainbowtrout.toFixed(2) + " kg";
                    // td5.innerHTML = alaskanpollock.toFixed(2) + " kg";
                    // td6.innerHTML = stripedbase.toFixed(2) + " kg";
                    // td7.innerHTML = tuna.toFixed(2) + " kg";
                    // td8.innerHTML = herring.toFixed(2) + " kg";
                    // td9.innerHTML = perch.toFixed(2) + " kg";
                    // td10.innerHTML = char.toFixed(2) + " kg";
                    // td11.innerHTML = other.toFixed(2) + " kg";

                    tr.appendChild(td2);
                    //  tr.appendChild(td3);
                    // tr.appendChild(td4);
                    // tr.appendChild(td5);
                    // tr.appendChild(td6);
                    // tr.appendChild(td7);
                    // tr.appendChild(td8);
                    // tr.appendChild(td9);
                    // tr.appendChild(td10);
                    // tr.appendChild(td11);

                    tbody.appendChild(tr);
            })
        })
    })
}

// function wholeLoad(){
//     // var tbody =document.getElementById('tbodywhole');
//     var firebaseRef = firebase.database().ref("Voyage History");
//     var lastNo;
//     var getNo;
//     firebaseRef.once('value', function(snapshot){
//             snapshot.forEach(child => {
//                 lastNo = child.key;
//                  getNo = ++lastNo;
//             }) 
//             document.getElementById('voyagenumber').innerHTML = getNo;
//                 // let tr = document.createElement("tr");
//                 // let td1 = document.createElement('td');
//                 // td1.innerHTML = getNo;
//                 // tr.appendChild(td1);
//                 // tbody.appendChild(tr);   
//         })
    
// }

function getTableData(){
    var firebaseRef = firebase.database().ref("Fishing Details");
    firebaseRef.once("value", function(snapshot){
        let mackerel = 0;
                var alaskansalmon = 0;
                var rainbowtrout = 0;
                var alaskanpollock = 0;
                var stripedbase = 0;
                var tuna = 0;
                var herring = 0;
                var perch = 0;
                var char = 0;
                var other = 0;
        snapshot.forEach(childSnapshot => {   
            childSnapshot.forEach(grandchildSnapshot => {
                var data = grandchildSnapshot.val();
                    var fishname = data["Fish Name"];
                    var fishweight =  parseFloat(data["Fish Weight"]);
                    if(fishname == "Meckerel"){
                        mackerel = mackerel + fishweight;
                    }
                    else if(fishname == "Alaskan Salmon"){
                        alaskansalmon = alaskansalmon + fishweight;
                    }
                    else if(fishname == "Rainbow trout"){
                        rainbowtrout = rainbowtrout + fishweight;
                    }
                    else if(fishname == "Alaskan pollock"){
                        alaskanpollock = alaskanpollock + fishweight;
                    }
                    else if(fishname == "Striped base"){
                        stripedbase = stripedbase + fishweight;
                    }
                    else if(fishname == "Tuna"){
                        tuna = tuna + fishweight;
                    }
                    else if(fishname == "Herring"){
                        herring = herring + fishweight;
                    }
                    else if(fishname == "Perch"){
                        perch = perch + fishweight;
                    }
                    else if(fishname == "Char"){
                        char = char + fishweight;
                    }
                    else if(fishname == "Other"){
                        other = other + fishweight;
                    }
            })
        });

        document.getElementById('meckerel').innerHTML = mackerel.toFixed(2) + " kg";
        document.getElementById('alaskansalmon').innerHTML = alaskansalmon.toFixed(2) + " kg";
        document.getElementById('rainbowtrout').innerHTML = rainbowtrout.toFixed(2) + " kg";
        document.getElementById('alaskanpollock').innerHTML = alaskanpollock.toFixed(2) + " kg";
        document.getElementById('stripedbase').innerHTML = stripedbase.toFixed(2) + " kg";
        document.getElementById('tuna').innerHTML = tuna.toFixed(2) + " kg";
        document.getElementById('herring').innerHTML = herring.toFixed(2) + " kg";
        document.getElementById('perch').innerHTML = perch.toFixed(2) + " kg";
        document.getElementById('char').innerHTML = char.toFixed(2) + " kg";
        document.getElementById('other').innerHTML = other.toFixed(2) + " kg";
        
    });
}

//--------------------------------------------------------Map----------------------------------------------

// Initialize and add the map
function initMap(){

    //Map Option
    // var options = {
    //     zoom: 9,
    //     center: {lat:9.5998117, lng:80.4396933}
    // }

    //New Map
    // var map = new google.maps.Map(document.getElementById("map"), options);

    //Firebase
    var firebaseRef = firebase.database().ref("GPS");
        firebaseRef.once("value", function(snapshot){
        var data = snapshot.val();
        var latGPS = data["Latitude"];
        var lanGPS = data["Longitude"];

        var latitudeGPS = parseFloat(latGPS);
        var longitudeGPS = parseFloat(lanGPS);
        
        //Map option
        var options = {
            zoom: 9,
            center: {lat:latitudeGPS, lng:longitudeGPS}
        }

        //New Map
        var map = new google.maps.Map(document.getElementById("map"), options);

        var marker = new google.maps.Marker({
            position: {lat:latitudeGPS, lng:longitudeGPS},
            map: map,
            icon: '../../img/boat.png'
        });
    });

  }
//--------------------------------------------------------Map-End------------------------------------------
function getGps(){
    var firebaseRef = firebase.database().ref("GPS");
    firebaseRef.once("value", function(snapshot){
        // snapshot.forEach(childSnapshot => {
        //     childSnapshot.forEach(grandchildSnapshot => {
        //         var data = grandchildSnapshot.val();
        //         console.log(data["Fishing Date"]);
        //     })
        // });
        var data = snapshot.val();
        console.log(data["Latitude"]);
        console.log(data["Longitude"]);

    });
}

function logoutload(){
    window.location.href = "../../../index.php";
}

function getInputValue(id){
    return document.getElementById(id).value;
}

function changePassword(){
    var currentpassword = getInputValue('currentpassword');
    var newpassword = getInputValue('newpassword');
    var confirmpassword = getInputValue('confirmpassword');
    var firebaseRef = firebase.database().ref("Fishing Login").child("login");
    firebaseRef.once("value", function(snapshot){
        var data = snapshot.val();
       // var u_name = data["username"];
        var password = data["password"];
        var username = data["username"];
         if(password == currentpassword){
             document.getElementById("changeerror").style.display = "none";
             //alert("Login Successful");
             //window.location.replace("includes/php/pages/home.php");
             if(newpassword == confirmpassword){
                writePassword(newpassword, username);
                window.alert("Password changed successfull");
                logoutload();
             }
             else{
                document.getElementById("changeerror").style.display = "inline";
                document.getElementById('currentpassword').value = "";
                document.getElementById('newpassword').value = "";
                document.getElementById('confirmpassword').value = "";
             }
             
         }
         else{
             document.getElementById("changeerror").style.display = "inline";
             document.getElementById('currentpassword').value = "";
             document.getElementById('newpassword').value = "";
             document.getElementById('confirmpassword').value = "";
         }
    });
}

function writePassword(arg1,arg2){
    firebase.database().ref("Fishing Login").child("login").set({
        password: arg1,
        username: arg2
      });
}

function resetChangeError(){
    document.getElementById("changeerror").style.display = "none";
}

function getData(){
    var rootRef = firebase.database().ref();
    var urlRef = rootRef.child("messages");
    var lastNum;
    urlRef.once("value", function(snapshot) {
      snapshot.forEach(function(child) {
        lastNum = child.key;
        var firebaseRef = firebase.database().ref("messages").child(lastNum);
        firebaseRef.once("value", function(snapshot){
            var data = snapshot.val();
            var company = data["company"];
            var email = data["email"];
            var message = data["message"];
            var name = data["name"];
            var phone = data["phone"];
   
            console.log(company);
            console.log(email);
            console.log(message);
            console.log(name);
            console.log(phone);
   
            AdditemToTable(name,email,company,phone,message);
        });
      });
    });
  }

   //var urlRef = rootRef.child("messages");
    //var lastNum;
    //var getNo;
    // urlRef.once("value", function(snapshot) {
    //   snapshot.forEach(function(child) {
    //     lastNum = child.key;
    //   });
    //   getNo = ++lastNum;
    //   var newMessageRef = messagesRef.child(getNo);
    //   newMessageRef.set({
    //     name: name,
    //     company: company,
    //     email: email,
    //     phone: phone,
    //     message: message
    //   });
    // });

  function getLastTour(){
    var rootRef = firebase.database().ref();
    var urlRef = rootRef.child("Voyage History");
    var lastNum;
    var getNo;
    urlRef.once("value",function(snapshot){
        snapshot.forEach(function(child){
            lastNum = child.key;
        });
        getNo = ++lastNum;
        console.log(getNo);
    });
  }

  function tableExample(){
    //var tbody =document.getElementById('tbodywhole');
    var firebaseRef = firebase.database().ref("Fishing Details");
    firebaseRef.once('value', function(snapshot){
        snapshot.forEach(child => {
            //let tr = document.createElement("tr");
            //let td1 = document.createElement('td');
            //td1.innerHTML = child.key;
            //tr.appendChild(td1);
            
        })
    })
}

