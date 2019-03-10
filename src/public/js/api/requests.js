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
    });
}());


