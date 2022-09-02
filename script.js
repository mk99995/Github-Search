const { networkInterfaces } = require("os");

const button = document.querySelector('button');

async function dataIntoHtml(linkEnd) {
    const response = await fetch("https://api.github.com/users/" + linkEnd);
    const data = await response.json();
    const {login, avatar_url, html_url, created_at, public_repos, followers, following, location, twitter_username, blog} = data;
    document.getElementById("mainMenu").innerHTML = login + " " + created_at + "             ";
}

 button.onclick = function () {
    dataIntoHtml(document.getElementById("bar").value);
 }
 