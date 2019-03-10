(function(){
    "use strict";


    window.addEventListener('load', function(){

        api.viewAllPosts(function(err, res){
            if(err) return alert(err);
            res.forEach(doc => {
                document.querySelector('#NB_posts').prepend(displayPosting(doc));
            });
            console.log(JSON.stringify(res));
        })

    });
}());


function displayPosting(posting){

    let htmlString = `
    <div class="staff">
    <div class="d-flex mb-4">
    <div class="img" style="background-image: url(images/person_1.jpg);"></div>
    <div class="info ml-4">
    <h3><a href="teacher-single.html">${posting.user}</a></h3>
    <span class="position">Requested Just now</span>
    <div class="text">
    <p>${posting.location}<br> <a href="#">Connect with them</a></p>
    </div>
    </div>
    </div>
    </div>
    `;

    let newdiv= document.createElement('div');
    newdiv.classList.add('col-lg-4', 'd-flex', 'mb-sm-4');
    newdiv.innerHTML = htmlString.trim();

    return newdiv;
}