"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function click2img(game) {
    console.log(game);
    let imgsrc;
    if (game == "mw2") {
        imgsrc = 'https://imageio.forbes.com/specials-images/imageserve/628d337e791f9767c05ca2e7/1--2-/960x0.jpg?height=887&width=711&fit=bounds';
    }
    else if (game == "gta") {
        imgsrc = 'https://media.rockstargames.com/rockstargames/img/global/news/upload/actual_1380583804.jpg';
    }
    else if (game == "valorant") {
        imgsrc = 'https://cdn.oneesports.gg/cdn-data/2022/09/Valorant_Phoenix_Banner.jpg';
    }
    else if (game == "mw") {
        imgsrc = 'https://static.wikia.nocookie.net/callofduty/images/1/15/ModernWarfare_Artwork_MW.jpg/revision/latest?cb=20190530170954';
    }
    else if (game == "wz") {
        imgsrc = 'https://static.wikia.nocookie.net/callofduty/images/3/3d/Warzone_Artwork_CoDWarzone_MW.jpg/revision/latest?cb=20200331223136';
    }
    let gameid = document.getElementById(game);
    gameid.src = imgsrc;
    document.body.style.cssText += `background-image:url(${imgsrc})`;
}
function hideTable() {
    document.getElementById("pcpp-table").style.display = "none";
}
function unhideTable() {
    document.getElementById("pcpp-table").style.display = "block";
}
function autohideTable() {
    if (document.getElementById("pcpp-table").style.display == "none") {
        document.getElementById("pcpp-table").style.display = "block";
    }
    else {
        document.getElementById("pcpp-table").style.display = "none";
    }
}
function Random() {
    return __awaiter(this, void 0, void 0, function* () {
        let x = 1;
        while (x == 1) {
            var RandomX = Math.random() * 90 + "%";
            var RandomY = Math.random() * 92 + "%";
            console.log(RandomX);
            console.log(RandomY);
            let button = document.getElementById("myBtn");
            button.style.left = RandomX;
            button.style.top = RandomY;
            sleep(2000);
        }
    });
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function getQuote() {
    return __awaiter(this, void 0, void 0, function* () {
        let api_url = "https://api.kanye.rest";
        const response = yield fetch(api_url);
        const data = yield response.json();
        let quote = document.getElementById("quote");
        quote.innerHTML = data.quote;
        console.log(data.quote);
    });
}
function getAPOD() {
    return __awaiter(this, void 0, void 0, function* () {
        let randomyear;
        randomyear = Math.floor(Math.random() * 20) + 2000;
        let randommonth;
        randommonth = Math.floor(Math.random() * 12) + 1;
        let randomday;
        randomday = Math.floor(Math.random() * 28) + 1;
        let formatDate;
        formatDate = randomyear + "-" + randommonth + "-" + randomday;
        console.log(formatDate);
        let api_url = "https://api.nasa.gov/planetary/apod?api_key=gZjPsiBxKY4m53pyMWV0KHj3pbQoB61k8aovfWOe&date=" + formatDate;
        const response = yield fetch(api_url);
        const data = yield response.json();
        console.log(response);
        console.log(data);
        //@ts-ignore
        document.getElementById("apod").src = data.url;
        let apod_title = document.getElementById("apod_title");
        apod_title.innerHTML = data.title;
        let apod_explanation = document.getElementById("apod_explanation");
        apod_explanation.innerHTML = data.explanation;
        console.log(data.url);
    });
}
function getAPODcal() {
    return __awaiter(this, void 0, void 0, function* () {
        let dateElement = document.getElementById("date");
        let date = dateElement.innerHTML = document.getElementById("date").value;
        console.log(date);
        const response = yield fetch("https://api.nasa.gov/planetary/apod?api_key=gZjPsiBxKY4m53pyMWV0KHj3pbQoB61k8aovfWOe&date=" + date);
        const data = yield response.json();
        console.log(response);
        console.log(data);
        document.getElementById("apod").src = data.url;
        document.getElementById("apod_title").innerHTML = data.title;
        document.getElementById("apod_explanation").innerHTML = data.explanation;
        console.log(data.url);
    });
}
