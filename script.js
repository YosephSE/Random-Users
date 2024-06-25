
function randomUserData() {
    const apiURL = 'https://randomuser.me/api/';

    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            let user = (data.results[0])
            // document.write(JSON.stringify(user))
            let fullName = `${user.name.title} ${user.name.first} ${user.name.last}`
            let userName = user.login.username
            console.log(fullName)
            console.log(userName)
            let age = user.dob.age
            console.log(age)
            let proflie = user.picture.large
            console.log(proflie)
            
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

randomUserData();
