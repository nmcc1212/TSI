function click2img(game) {
    console.log(game);
    let imgsrc
    if (game == "mw2"){
      imgsrc= 'https://imageio.forbes.com/specials-images/imageserve/628d337e791f9767c05ca2e7/1--2-/960x0.jpg?height=887&width=711&fit=bounds'
    }
    else if (game == "gta"){
      imgsrc= 'https://media.rockstargames.com/rockstargames/img/global/news/upload/actual_1380583804.jpg'
    }
    else if (game == "valorant"){
      imgsrc= 'https://cdn.oneesports.gg/cdn-data/2022/09/Valorant_Phoenix_Banner.jpg'
    }
    else if (game == "mw"){
      imgsrc= 'https://static.wikia.nocookie.net/callofduty/images/1/15/ModernWarfare_Artwork_MW.jpg/revision/latest?cb=20190530170954'
    }
    else if (game == "wz"){
      imgsrc= 'https://static.wikia.nocookie.net/callofduty/images/3/3d/Warzone_Artwork_CoDWarzone_MW.jpg/revision/latest?cb=20200331223136'
    }
    document.getElementById(game).src = imgsrc;
    document.body.style.cssText+=`background-image:url(${imgsrc})`;
}

function hideTable() {
    document.getElementById("pcpp-table").style.display = "none";
}
function unhideTable() {
    document.getElementById("pcpp-table").style.display = "block";
}
function autohideTable() {
    if (document.getElementById("pcpp-table").style.display == "none"){
        document.getElementById("pcpp-table").style.display = "block";
    }
    else{
        document.getElementById("pcpp-table").style.display = "none";
    }
}

function Random() {
    while (True) {
    let RandomX = Math.random() * 90 + "%";
    let RandomY = Math.random() * 92 + "%";
    console.log(RandomX);
    console.log(RandomY);
    document.getElementById("myBtn").style.left = RandomX;
    document.getElementById("myBtn").style.top = RandomY;
    sleep(2000);
    }
}

async function getQuote() {
    let api_url = "https://api.kanye.rest"
    const response = await fetch(api_url);
    const data = await response.json();
    document.getElementById("quote").innerHTML = data.quote;
    console.log(data.quote);
}

async function getAPOD() {
    let randomyear = Math.floor(Math.random() * 20) + 2000;
    let randommonth = Math.floor(Math.random() * 12) + 1;
    let randomday = Math.floor(Math.random() * 28) + 1;
    let formatDate = randomyear + "-" + randommonth + "-" + randomday;
    console.log(formatDate);
    let api_url = "https://api.nasa.gov/planetary/apod?api_key=gZjPsiBxKY4m53pyMWV0KHj3pbQoB61k8aovfWOe&date=" + formatDate;
    const response = await fetch(api_url);
    const data = await response.json();
    console.log (response);
    console.log(data);
    document.getElementById("apod").src = data.url;
    document.getElementById("apod_title").innerHTML = data.title;
    document.getElementById("apod_explanation").innerHTML = data.explanation;
    console.log(data.url);
}
async function getAPODcal(){
    let date = document.getElementById("date").innerHTML = document.getElementById("date").value;
    console.log(date);
    const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=gZjPsiBxKY4m53pyMWV0KHj3pbQoB61k8aovfWOe&date=" + date);
    const data = await response.json();
    console.log (response);
    console.log(data);
    document.getElementById("apod").src = data.url;
    document.getElementById("apod_title").innerHTML = data.title;
    document.getElementById("apod_explanation").innerHTML = data.explanation;
    console.log(data.url);
}
