const joinBtn = document.getElementById("joinBtn");
const modal = document.getElementById("modal");

const submitBtn = document.getElementById("submitName");

const userNameInput =
document.getElementById("userName");

const successScreen =
document.getElementById("successScreen");

const passName =
document.getElementById("passName");

// temporary memory storage
let attendeeName = "";

// open modal

joinBtn.addEventListener("click", () => {

    modal.classList.add("active");

});

// submit name

submitBtn.addEventListener("click", () => {

    attendeeName = userNameInput.value.trim();

    if(attendeeName === ""){
        alert("Please enter your name");
        return;
    }

    modal.classList.remove("active");

    setTimeout(() => {

        successScreen.classList.add("active");

        passName.innerHTML =`Guest : ${attendeeName}`;

    },500);

});

window.addEventListener("load",()=>{

    setTimeout(()=>{

        document.getElementById("loader").style.display="none";

    },3000);

});

const text =
"Initializing AI Ecosystems... Quantum Systems Online... Future Unveiled.";

let index = 0;

function typeEffect(){

    if(index < text.length){

        document.getElementById("typewriter").innerHTML +=
        text.charAt(index);

        index++;

        setTimeout(typeEffect,40);
    }
}

typeEffect();

const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

});

document.querySelectorAll(".hidden")
.forEach(el => observer.observe(el));

const eventDate = new Date(
    "August 15, 2050 09:00:00"
).getTime();

const countdown = setInterval(() => {

    const now = new Date().getTime();

    const distance = eventDate - now;

    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    if(distance < 0){

        clearInterval(countdown);

        document.querySelector(".countdown").innerHTML = `
            <h2 style="
                color:#00f5ff;
                text-align:center;
                width:100%;
            ">
                🚀 Future Unveiled
            </h2>
        `;
    }

},1000);

const hamburger =
document.getElementById("hamburger");

const navLinks =
document.getElementById("navLinks");

hamburger.addEventListener("click",()=>{

    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");

});

document.querySelectorAll(".nav-links a")
.forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");

    });

});

const closePass = document.getElementById("closePass");

closePass.addEventListener("click", () => {

    successScreen.classList.remove("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});