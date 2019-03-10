(function(){
    "use strict";


    window.addEventListener('load', function(){

        function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(createMap);
            }
        }

        function createMap(position){
            L.mapquest.key = 'pYEp9dabgCwLIw9gyV0KbgoZ2brCpBJa';
            let mapQ = L.mapquest.map('reqMap', {
                center: [position.coords.latitude, position.coords.longitude],
                layers: L.mapquest.tileLayer('map'),
                zoom: 15
            });

            L.marker([position.coords.latitude, position.coords.longitude], {
                icon: L.mapquest.icons.marker(),
                draggable: false
            }).bindPopup('Post Location').addTo(mapQ);
        }

        getLocation();
        document.querySelector('form').addEventListener('submit', function(e){
            e.preventDefault();
        });


        document.querySelector('#NR_submit').addEventListener('click', function(e){
            let userName = document.querySelector('#NR_user').value;
            let reqType = document.querySelector('#NR_type').value;
            let location = document.querySelector('#NR_location').value;
            let note = document.querySelector('#NR_note').value;
            api.createPost(userName, reqType, location, note, function(err, res){
                if (err) return alert(err);
                console.log("yay!!");
                window.location = '/';

            });

            e.preventDefault();
        });

    });
}());


