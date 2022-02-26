// Loading Screen

const loadingScreen = document.querySelector(".loading-screen");
const lsLogo = document.querySelector(".ls-logo");
const container = document.querySelector(".container");
const loginScreen = document.querySelector(".login-screen");
const loginForm = document.querySelector(".login-form");
const title = document.querySelector(".title");
const scrollTip = document.querySelector(".scroll-tip");

const addName = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    localStorage.setItem('userName', e.target[0].value);
    loginScreen.style.display = "none";
    const reloadPage = () => {
        window.location.reload();
    }
    setTimeout(reloadPage, 1000);
}

const animate = () => {
    lsLogo.style.opacity = "1";
    let degree = 0;
    const pulsateUpLogo = () => {
        lsLogo.style.transform = "scale(1.2)";
    }
    const rotateLogo = () => {
        degree += 360;
        lsLogo.style.transform = `rotate(${degree}deg)`;
    }
    const showTitle = () => {
        title.innerHTML = `Welcome ${localStorage.getItem('userName')}`;
        title.style.opacity = 1;
    }
    const showScrollTip = () => {
        scrollTip.style.opacity = 1;
    }
   
    const removeLoadingScreenDisplayPage = () => {
        loadingScreen.style.display = "none";
        if(localStorage.getItem('userName')) {
            container.style.display = "block";
        } else {
            loginScreen.style.display = "block";
        }
        setTimeout(showTitle, 500);
        setTimeout(showScrollTip, 1000);
    }
    

    setTimeout(pulsateUpLogo, 600);
    let interval = setInterval(rotateLogo, 1200);
    const stopAnim = () => {
        clearInterval(interval);
        loadingScreen.style.opacity = "0";
        setTimeout(removeLoadingScreenDisplayPage, 1100);
    }
    setTimeout(stopAnim, 6000);
}

setTimeout(animate, 500);

loginForm.addEventListener("submit", addName);