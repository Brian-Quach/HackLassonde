let api = (function(){
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

    let module = {};

    module.login = function (username, password, callback){
        send("POST", "/login/", {userName: username, password: password}, callback);
    };

    module.createAccount = function (firstName, lastName, username, password, callback){
        send("POST", "/createAccount/", {userName: username, password: password, firstName: firstName, lastName: lastName}, callback);
    };

    return module;
})();