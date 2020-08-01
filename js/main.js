//self executing anonymous function
(function() {
	"use strict";
console.log("SEAF has fired");	

const searchUser = document.getElementById('search-user');
var userName = '';
const clientId = '';
const clientSecret = '';

searchUser.addEventListener('keyup', (e) => {
	userName = searchUser.value;
	console.log(userName);

	if(userName !== '') {
		fetch(`https://api.github.com/users/${userName}?client_id=${clientId}&client_secret=${clientSecret}`)
		.then(data => 
			data.json()
		)		
		.then(data=>{
			console.log(data);
		
		document.getElementById('profile').innerHTML= `
        <div class="card-body">
        <div class="row">
            <div class="col-md-3">
                <img class="img-avatar" src="${data.avatar_url}">
                <a class="view-profile" href="${data.html_url}" target="_blank">View Profile</a>
            </div>
            <div class="col-md-9">
                <span class="public-repo">Public Repos: ${data.public_repos}</span>              
                <span class="followers">Followers: ${data.followers}</span>
                <span class="following">Following: ${data.following}</span>               
                <ul class="list-group-info">
                <li class="list-group">Company: ${data.company}</li>
                <li class="list-group">Website/Blog: ${data.blog}</li>
                <li class="list-group">Email: ${data.email}</li>
                <li class="list-group">Member Since: ${data.created_at}</li>
                </ul>
            </div>
        </div>
    </div>
    
        `;
		
	})

		//const profile =  profileResponse.json();
		//console.log(profileResponse);
	} else {
		alert('please enter a value');
	}
});


})();
