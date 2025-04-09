function fetchData() {
    fetch("https://randomuser.me/api/")
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            document.getElementById("user-data").innerHTML =
                `<p>Name: ${user.name.first} ${user.name.last}</p>
                 <p>Email: ${user.email}</p>
                 <img src="${user.picture.medium}" alt="User Image">`;
        })
        .catch(error => console.error("Error fetching data:", error));
}
