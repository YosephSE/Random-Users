

function randomUserData() {
    const apiURL = 'https://randomuser.me/api/';

    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            document.write(JSON.stringify(data))
            const userData = data.results[0];
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

randomUserData();