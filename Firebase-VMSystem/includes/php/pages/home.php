<?php
session_start();
include("{$_SERVER['DOCUMENT_ROOT']}/Firebase-VMSystem/includes/php/header.php");
?>

<style>
*{
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    user-select: none;
}

a{
    text-decoration: none;
}

.currentvoyage-topic{
    text-align: center;
    margin-top: 40px;
    margin-bottom: 20px;
}


.card{
    border: 3px solid #212529;
    border-radius: 0px;
    margin-bottom: 20px;
    margin-top: 10px;
}
.currentvoyage-wrapper{
    margin-left: 50px;
}

html, body {
    max-width: 100%;
    overflow-x: hidden;
    margin-bottom: 30px;
}

.overview-topic{
    text-align: center;
    margin-top: 40px;
    margin-bottom: 20px;
}
.overview-back{
    margin-bottom: 20px;
}
.overview-wrapper{
    margin-left: 20px;
    margin-right: 20px;
}
#map {
  height: 510px;
  width: 100%;
}
#managetable{
    text-align: center;
    width: 60%;
    margin-left: 20%;
    margin-right: 20%;
}

#wholetable{
    text-align: center;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
}
</style>

<div class="home-wrapper">
    <ul class="nav nav-tabs justify-content-center" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
            <button class="nav-link active" id="currentvoyage-tab" data-bs-toggle="tab" data-bs-target="#currentvoyage" type="button" role="tab" aria-controls="home" aria-selected="true">Current Voyage</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="overview-tab" data-bs-toggle="tab" data-bs-target="#overview" type="button" role="tab" aria-controls="overview" aria-selected="false">Overview</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="map-tab" data-bs-toggle="tab" data-bs-target="#map" type="button" role="tab" aria-controls="map" aria-selected="false">Map</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="manage-tab" data-bs-toggle="tab" data-bs-target="#manage" type="button" role="tab" aria-controls="manage" aria-selected="false">Day to Day</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="wholevoyage-tab" data-bs-toggle="tab" data-bs-target="#wholevoyage" type="button" role="tab" aria-controls="wholevoyage" aria-selected="false">Whole Voyage</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="history-tab" data-bs-toggle="tab" data-bs-target="#history" type="button" role="tab" aria-controls="history" aria-selected="false">History</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="message-tab" data-bs-toggle="tab" data-bs-target="#message" type="button" role="tab" aria-controls="message" aria-selected="false">Change Password</button>
        </li>
    </ul>
    <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="currentvoyage" role="tabpanel" aria-labelledby="currentvoyage-tab"><?php include("{$_SERVER['DOCUMENT_ROOT']}/Firebase-VMSystem/includes/php/pages/homecontent.php"); ?></div>
        <div class="tab-pane fade" id="overview" role="tabpanel" aria-labelledby="overview-tab"><?php include("{$_SERVER['DOCUMENT_ROOT']}/Firebase-VMSystem/includes/php/pages/overviewcontent.php"); ?></div>
        <div class="tab-pane fade" id="map" role="tabpanel" aria-labelledby="map-tab"><?php include("{$_SERVER['DOCUMENT_ROOT']}/Firebase-VMSystem/includes/php/pages/mapcontent.php"); ?></div>
        <div class="tab-pane fade" id="manage" role="tabpanel" aria-labelledby="manage-tab"><?php include("{$_SERVER['DOCUMENT_ROOT']}/Firebase-VMSystem/includes/php/pages/daytoday.php"); ?></div>
        <div class="tab-pane fade" id="wholevoyage" role="tabpanel" aria-labelledby="wholevoyage-tab"><?php include("{$_SERVER['DOCUMENT_ROOT']}/Firebase-VMSystem/includes/php/pages/wholevoyage.php"); ?></div>
        <div class="tab-pane fade" id="history" role="tabpanel" aria-labelledby="history-tab"><?php include("{$_SERVER['DOCUMENT_ROOT']}/Firebase-VMSystem/includes/php/pages/history.php"); ?></div>
        <div class="tab-pane fade" id="message" role="tabpanel" aria-labelledby="message-tab"><?php include("{$_SERVER['DOCUMENT_ROOT']}/Firebase-VMSystem/includes/php/pages/changepassword.php"); ?></div>
    </div>
</div><!--home-wrapper-->
<?php
include("{$_SERVER['DOCUMENT_ROOT']}/Firebase-VMSystem/includes/php/footer.php");
?>

<script>
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
</script>

<script src="../../js/script.js"></script>

<script>
window.onload = tableLoad();
window.onload = d2dLoad();
window.onload = getTableData();

function wholeLoad(){
    var firebaseRef = firebase.database().ref("Voyage History");
    var lastNo;
    var getNo;
    firebaseRef.once('value', function(snapshot){
            snapshot.forEach(child => {
                lastNo = child.key;
                 getNo = ++lastNo;
            }) 
            document.getElementById('voyagenumber').value = getNo;
        })
    
}

function sizeofstock(){
    var firebaseRef = firebase.database().ref("Fishing Details");
            firebaseRef.once("value", function(snapshot){
                let tr = document.createElement("tr");
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
                        var total = 0;
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

                total = mackerel + alaskansalmon + rainbowtrout + alaskanpollock + stripedbase + tuna + herring + perch + char + other;
                // console.log(total.toFixed(2));
                document.getElementById('stocksize').value = total.toFixed(2);
            })
}
function deleteVoyage(){
    

    var answer = window.confirm("Do you want to delet voyage??");
        if (answer) {
            var firebaseRef = firebase.database().ref("Fishing Details");
            firebaseRef.remove();
            createHistory();
            window.alert("Delete Voyage");
            document.getElementById('voyagenumber').value = "";
            document.getElementById('stocksize').value = "";
        }
}

function getInputVal(id){
     return document.getElementById(id).value;
 }

function createHistory(){
    var voyageno = getInputVal('voyagenumber');
    var stocksize = getInputVal('stocksize');
    firebase.database().ref("Voyage History").child(voyageno).set({
        voyagenumber: voyageno,
        stockofsize: stocksize
      });
}

function historyLoad(){
    var tbody =document.getElementById('tbodyhistory');
    var firebaseRef = firebase.database().ref("Voyage History");
    firebaseRef.once('value', function(snapshot){
        snapshot.forEach(child => {
            let tr = document.createElement("tr");
            let td1 = document.createElement('td');
            td1.innerHTML = child.key;
            tr.appendChild(td1);
            var root = firebase.database().ref("Voyage History").child(child.key);
            root.once('value', function(childSnapshot){
                //console.log(childSnapshot.key);
                var rootRef = firebase.database().ref("Voyage History").child(child.key+"/"+childSnapshot.key);
                root.once('value', function(grandchildSnapshot){
                    var dataR = grandchildSnapshot.val();
                    //console.log(dataR["stockofsize"]);
                    var value = dataR["stockofsize"];
                    let td2 = document.createElement('td');
                    td2.innerHTML = value;
                    tr.appendChild(td2);
                })
                    // childSnapshot.forEach(grandchildSnapshot => {
                    //     var data = grandchildSnapshot.val();
                    //     var voyagenumber = data["voyagenumber"];
                    //     var stockofsize =  data["stockofsize"];
                    //     // if(fishname == "Meckerel"){
                    //     //     mackerel = mackerel + fishweight;
                    //     // }
                    //     // else if(fishname == "Alaskan Salmon"){
                    //     //     alaskansalmon = alaskansalmon + fishweight;
                    //     // }
                    //     // else if(fishname == "Rainbow trout"){
                    //     //     rainbowtrout = rainbowtrout + fishweight;
                    //     // }
                    //     // else if(fishname == "Alaskan pollock"){
                    //     //     alaskanpollock = alaskanpollock + fishweight;
                    //     // }
                    //     // else if(fishname == "Striped base"){
                    //     //     stripedbase = stripedbase + fishweight;
                    //     // }
                    //     // else if(fishname == "Tuna"){
                    //     //     tuna = tuna + fishweight;
                    //     // }
                    //     // else if(fishname == "Herring"){
                    //     //     herring = herring + fishweight;
                    //     // }
                    //     // else if(fishname == "Perch"){
                    //     //     perch = perch + fishweight;
                    //     // }
                    //     // else if(fishname == "Char"){
                    //     //     char = char + fishweight;
                    //     // }
                    //     // else if(fishname == "Other"){
                    //     //     other = other + fishweight;
                    //     // }
                    // })
                    
                    //  let td3 = document.createElement('td');
                    // let td4 = document.createElement('td');
                    // let td5 = document.createElement('td');
                    // let td6 = document.createElement('td');
                    // let td7 = document.createElement('td');
                    // let td8 = document.createElement('td');
                    // let td9 = document.createElement('td');
                    // let td10 = document.createElement('td');
                    // let td11 = document.createElement('td');
                    // var total = mackerel + alaskansalmon + rainbowtrout + alaskanpollock + stripedbase + tuna + herring + perch + char + other;

                     
                    //  td3.innerHTML = "<button class = 'btn btn-danger'>Delete</button>";
                    // td4.innerHTML = rainbowtrout.toFixed(2) + " kg";
                    // td5.innerHTML = alaskanpollock.toFixed(2) + " kg";
                    // td6.innerHTML = stripedbase.toFixed(2) + " kg";
                    // td7.innerHTML = tuna.toFixed(2) + " kg";
                    // td8.innerHTML = herring.toFixed(2) + " kg";
                    // td9.innerHTML = perch.toFixed(2) + " kg";
                    // td10.innerHTML = char.toFixed(2) + " kg";
                    // td11.innerHTML = other.toFixed(2) + " kg";

                    
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

wholeLoad();
sizeofstock();
historyLoad()
</script>

<script type = "text/javascript" >  
    function preventBack() { window.history.forward(); }  
    setTimeout("preventBack()", 0);  
    window.onunload = function () { null };  
</script>