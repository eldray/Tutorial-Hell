const track = document.getElementById("image-track");

window.onmousedown = e => {
    track.dataset mouseDownAt = e.clientx;
}

window.onmousemove = e => {
    if (track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) = e.ClientX,
        maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * 100,
        nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;

    track.dataset.percentage = nextPercentage;


    track.style.transform = 'translate($ { nextPercentage } % , -50 % )';
}

window.onmouseup = () => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;
}