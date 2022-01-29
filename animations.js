const loadingScreen = document.querySelector(".loading-screen");
const lsLogo = document.querySelector(".ls-logo");

const animateLogo = () => {
    lsLogo.style.opacity = "1";
    let degree = 0;
    let id;
    const pulsateUpLogo = () => {
        lsLogo.style.transform = "scale(1.2)";
    }
    const rotateLogo = () => {
        degree += 360;
        lsLogo.style.transform = `rotate(${degree}deg)`;
    }
    setTimeout(pulsateUpLogo, 600);
    setInterval(rotateLogo, 1200);
    const stopAnim = () => {
        clearInterval(4);
        loadingScreen.style.opacity = "0";
    }
    setTimeout(stopAnim, 6000);
}

setTimeout(animateLogo, 500);