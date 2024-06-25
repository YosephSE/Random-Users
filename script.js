
function randomUserData() {
    const apiURL = 'https://randomuser.me/api/';

    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            let user = data.results[0]
            let userData = {
                fullName: `${user.name.title} ${user.name.first} ${user.name.last}`,
                userName: user.login.username,
                age: user.dob.age,
                profile: user.picture.large
            }
            return userData
            
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function showPage(){
    let con = document.getElementById("all-container")
    let dataToBeRendered = ''
    let apiData = randomUserData()
    for(i = 0; i <= 10; i++){
        dataToBeRendered += `
                <div class="container mt-5">
                    <div class="row justify-content-center">
                        <div class="col-md-6 col-lg-4">
                            <div class="card profile-card">
                                <img src=${apiData.profile} class="card-img-top" alt="User Image">
                                <div class="card-body">
                                    <h5 class="card-title">${apiData.fullName}</h5>
                                    <p class="card-text">${apiData.userName}</p>
                                    <p class="card-text">Age: ${apiData.age}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
    }
    con.innerHTML = dataToBeRendered

}


showPage()