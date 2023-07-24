const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")
const load = document.getElementById("load")
const kontener = document.getElementsByClassName("kontener")

let init = 0

const botSay = (data) => {
    return [
        "Perkenalkan nama saya Zaabot. Siapa nama kamu ? ",
        `Halo ${data?.nama}, berapa Usia kamu ? `,
        `Ohhh ${data?.Usia}, Hobi kamu apa ya `,
        `waawww sama dong aku juga hobi ${data?.Hobi}, btw punya pacar gak ? `,
        `ooohh ${data?.Pacar}, yaudah deh kalo gitu. udahan ya?`,
    ]
} 

pertanyaan.innerHTML = botSay()[0]

let userData = []

function botStart() {
    if (jawaban.value.length < 1 ) return alert ("Isi dlu dong")
    init++
    if (init === 1 ) {
        botDelay({nama : jawaban.value})
    } else if (init === 2 ) {
        botDelay({Usia : jawaban.value})
        
    } else if (init === 3 ) {
        botDelay({Hobi : jawaban.value})
        
        
    } else if (init === 4 ) {
        botDelay({Pacar : jawaban.value})
        
    } else if (init === 5 ) {
        finishing()
    } else {
        botEnd()
    }

}

function botDelay(jawabanUser) {
    load.style.display = "block"
    kontener[0].style.filter = "blur(2px)"
    setTimeout (() => {
        pertanyaan.innerHTML = botSay(jawabanUser)[init]
        load.style.display = "none"
        kontener[0].style.filter = "none"
    }, [1000])
    userData.push(jawaban.value)
    jawaban.value = ""
}

function finishing() {
    pertanyaan.innerHTML = `Thanks ya ${userData[0]} udah main ke Zaabot 😄, lain kali kita ${userData[2]} bareng ya!`
    jawaban.value = "Siap Thanks juga!"
}

function botEnd() {
    alert (`Terima kasih ${userData[0]} sudah berkunjung, anda akan diarahkan ke halaman utama.`)
    window.location.reload()
    
}