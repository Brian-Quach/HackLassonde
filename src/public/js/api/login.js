(function(){
    "use strict";


    window.addEventListener('load', function(){

        document.querySelector('#SI_submit').addEventListener('click', function(e){
            let userName = document.querySelector('#SI_userName').value;
            let password = document.querySelector('#SI_password').value;
            api.login(userName, password, function(err, res){
                if (err) return alert(err);
                console.log("yay!!");
                window.location = '/';

            });

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
            });
            e.preventDefault();
        });

        document.querySelector('form').addEventListener('submit', function(e){
            e.preventDefault();
        });
    });
}());


