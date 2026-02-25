const card = document.querySelector(".card");

card.addEventListener("mousemove", e => {
    const x = e.offsetX;
    const y = e.offsetY;

    const rotateX = -(y - 190) / 20;
    const rotateY = (x - 140) / 20;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0)";
});

const card = document.getElementById("card");
const glow = document.querySelector(".card-glow");

let isDragging = false;

function rotateCard(clientX, clientY){
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const rotateX = -(clientY - centerY) / 15;
    const rotateY = (clientX - centerX) / 15;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    // Move glow
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    glow.style.left = x + "px";
    glow.style.top = y + "px";
}

// DESKTOP
card.addEventListener("mousedown", () => isDragging = true);

document.addEventListener("mouseup", () => {
    isDragging = false;
    card.style.transform = "rotateX(0) rotateY(0)";
});

document.addEventListener("mousemove", (e) => {
    if(isDragging){
        rotateCard(e.clientX, e.clientY);
    }
});

// MOBILE
card.addEventListener("touchstart", () => isDragging = true);

document.addEventListener("touchend", () => {
    isDragging = false;
    card.style.transform = "rotateX(0) rotateY(0)";
});

document.addEventListener("touchmove", (e) => {
    if(isDragging){
        const touch = e.touches[0];
        rotateCard(touch.clientX, touch.clientY);
    }
});
