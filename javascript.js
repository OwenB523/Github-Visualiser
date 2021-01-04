function input() {
    var user = document.getElementById("user").value;
    var token = document.getElementById("token").value
    main(user, token);
}

async function getRequest(url, token) {

    const headers = {
        'Authorization':`Token ${token}`
    }

    const response =  await fetch(url, {
        "method": "GET",
        "Authorization": "Token" + token,
    });
    
    let ans = await response.json();
    return ans;
}

async function main(user, token) {
    let url = `https://api.github.com/users/` + user;
    let basicinfo = await getRequest(url, token).catch(error => console.error(error));

    document.write("Login: " + basicinfo.login + "<br>");
    document.write("Link: " + basicinfo.html_url + "<br>");
    document.write("Followers: " + basicinfo.followers + "<br>");
    document.write("Following: " + basicinfo.following + "<br>");
    document.write("Date of creation: " + basicinfo.created_at + "<br>");
}