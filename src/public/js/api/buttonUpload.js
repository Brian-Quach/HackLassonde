(function(){
    "use strict";
    document.querySelector('#imageButton').addEventListener('click', function(e){
    	e.target.parent.submit();
    	// document.querySelector("#imageFile").submit();
    });
		
    }());