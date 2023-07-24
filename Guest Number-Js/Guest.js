const btn = document.getElementById("btn")
const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
let ayo = document.getElementById("ayo")

let number = generateRandomNumber();
let score = getScore();

btn1.style.display = "none"

function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function newScore(updateScore) {
    score = updateScore;
    localStorage.setItem('userScore', score)
}

function getScore() {
    let savedSCore = localStorage.getItem('userScore')
    return savedSCore ? parseInt(savedSCore) : 0;
}

btn.addEventListener('click', function(){
    let guest = document.getElementById("guest").value;
    if(guest == number) {
        ayo.innerHTML = `Tebakan Kamu Benar, Angka Tebakmu ${number}`;
        newScore(score + 1);
        btn1.style.display = "block"
        btn.style.display = "none"
    } else if (guest < number) {
        ayo.innerHTML = "Tebakan Kamu Terlalu Kecil"
    };

    if(guest > number) {
        ayo.innerHTML = "Tebakan Kamu Terlalu Besar"
    }

    document.getElementById("guest").value = ""

    document.getElementById("btn1").addEventListener('click', function() {
        number = generateRandomNumber();
        ayo.innerHTML = "Ayo Tebak Dulu Angka nya"
        btn.style.display = "block"
        btn1.style.display = "none"
    })
    bebek.innerHTML = `Skor Anda : ${score}`
})

    function baten() {
        localStorage.clear();
        window.location.reload()
    }