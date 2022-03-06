// About Us
const body = document.querySelector("body");
const infoBtn = document.querySelector("#info-btn");
const joke = document.querySelector(".joke");

const goToInfo = () => {
    body.style.overflowY= "scroll";
}

infoBtn.addEventListener("click", goToInfo);

window.scroll(0,0);

const getJoke = async () => {
    const response = await fetch("https://geek-jokes.p.rapidapi.com/api?format=json", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "geek-jokes.p.rapidapi.com",
		"x-rapidapi-key": "26322812damsh909f42bf90d25a8p1f23ddjsn63d6b73897c6"
	}
    })
    let jokeText = await response.json();
    joke.innerHTML = `<div class = "joke-box"><p>And here we have a random joke for you:</p>`
    + `<p>${jokeText.joke}</p></div>`
}

setTimeout(getJoke, 1000);