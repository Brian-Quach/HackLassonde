(function(){
    "use strict";

    function send(method, url, data, callback){
        let xhr = new XMLHttpRequest();
        xhr.onload = function() {
            if (xhr.status !== 200) callback("[" + xhr.status + "] " + xhr.responseText, null);
            else callback(null, JSON.parse(xhr.responseText));
        };
        xhr.open(method, url, true);
        if (!data) xhr.send();
        else{
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(JSON.stringify(data));
        }
    }

    window.addEventListener('load', function(){

        document.querySelector('#SI_submit').addEventListener('click', function(e){
            let userName = document.querySelector('#SI_userName').value;
            let password = document.querySelector('#SI_password').value;
            api.login(userName, password, function(err, res){
                if (err) return alert(err);
                console.log("yay!!");
                window.location = '/';

            })

            e.preventDefault();
        });


        document.querySelector('#CA_submit').addEventListener('click', function(e){
            let firstName = document.querySelector('#CA_firstName').value;
            let lastName = document.querySelector('#CA_lastName').value;
            let userName = document.querySelector('#CA_userName').value;
            let password = document.querySelector('#CA_password').value;
            let email = document.querySelector('#CA_email').value;
            api.createAccount(firstName, lastName, userName, password, function(err, res){
                if (err) return  alert(err);
                console.log(JSON.stringify(res));
                window.location = '/';
            })
            e.preventDefault();
        });

        document.querySelector('form').addEventListener('submit', function(e){
            e.preventDefault();
        });
    });
}());


