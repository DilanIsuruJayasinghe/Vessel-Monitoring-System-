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
                        else if(fishname == "Alaskan Pollock"){
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
                    else if(fishname == "Alaskan Pollock"){
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
    var options = {
        zoom: 8,
        center: {lat:6.583707, lng:79.961405}
    }

    //New Map
    var map = new google.maps.Map(document.getElementById("map"), options);
/*
    //Add marker
    var marker = new google.maps.Marker({
        position: {lat:42.4668,lan:-70.9495},
        map: map,
    });
  
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
      icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
    });

    var infoWindow = new google.maps.InfoWindow({
        content: '<h1>Lynn MA</h1>'
    });

    marker.addListener('click', function(){
        infoWindow.open(map, marker);
    });
    */

    addMarker({
        coords:{lat:6.583707, lng:79.961405},
        iconImage: '../../img/boat.png'
    });

    //Add marker function
    function addMarker(props){
        var marker = new google.maps.Marker({
            position: props.coords,
            map: map,
            icon: props.iconImage
          });
    }

  }
//--------------------------------------------------------Map-End------------------------------------------
    