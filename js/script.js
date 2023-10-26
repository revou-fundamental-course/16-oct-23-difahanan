function replaceName() {
    let NAMA = prompt("WHAT'S YOUR NAME ?", "")
    document.getElementById("hi").innerHTML = NAMA
}

    document.getElementById("change-name").addEventListener("click", function() {
    replaceName()
})

// FOR SHOW/HIDE LIST NAV ITEMS IN MOBILE DEVICE
function toggleNav() {
    let nav = document.getElementById("nav")
    if (nav.style.display === "block") {
        nav.style.display = "none"
    } else {
        nav.style.display = "block"
    }
}

function validateForm() {
    const name = document.getElementById("nama").value
    const birthDateInput = document.getElementById("tanggal-lahir").value
    const gender = document.querySelector('input[name="gender"]:checked')
    const messages = document.getElementById("message").value
    const errorName = document.getElementById("error-name")
    const errorDate = document.getElementById("error-date")
    const errorGender = document.getElementById("error-gender")
    const errorMessages = document.getElementById("error-messages")

    errorName.textContent = ""
    errorDate.textContent = ""
    errorGender.textContent = ""
    errorMessages.textContent = ""

    if (name === "") {
        errorName.textContent = "Nama tidak boleh kosong !"
    }
    if (birthDateInput === "") {
        errorDate.textContent = "Tanggal Lahir tidak boleh kosong !"
    }
    // CHANGE FORMAT DATE
    const birthDateComponents = birthDateInput.split("-")
    const formattedBirthDate = birthDateComponents[2] + "-" + birthDateComponents[1] + "-" + birthDateComponents[0]
    if (!gender) {
        errorGender.textContent = "Jenis Kelamin harus dipilih !"
    }
    if (messages === "") {
        errorMessages.textContent = "Pesan tidak boleh kosong !"
        return false
    }
    setSenderUI(name, formattedBirthDate, gender.value, messages)

    document.getElementById("MESSAGE-US").reset()

    return false
}

function setSenderUI(name, birthDate, gender, messages) {
    document.getElementById("sender-full-name").textContent = "Nama : " + name
    document.getElementById("sender-birth-date").textContent = "Tanggal lahir : " + birthDate
    document.getElementById("sender-gender").textContent = "Jenis Kelamin : " + gender
    document.getElementById("sender-messages").textContent = "Pesan : " + messages
}

// BANNER AUTOSLIDE
let slideIndex = 0
const backgroundImages = [
    "https://source.unsplash.com/random/1352x700?landscape&sig=1",
    "https://source.unsplash.com/random/1352x700?landscape&sig=2",
    "https://source.unsplash.com/random/1352x700?landscape&sig=3",
    "https://source.unsplash.com/random/1352x700?landscape&sig=4",
    "https://source.unsplash.com/random/1352x700?landscape&sig=5",
    "https://source.unsplash.com/random/1352x700?landscape&sig=6",
    "https://source.unsplash.com/random/1352x700?landscape&sig=7",
    "https://source.unsplash.com/random/1352x700?landscape&sig=8",
    "https://source.unsplash.com/random/1352x700?landscape&sig=9",
    "https://source.unsplash.com/random/1352x700?landscape&sig=10"
]

showDivs(slideIndex)

function plusDivs(n) {
    showDivs(slideIndex += n)
}

function showDivs(n) {
    const openingRemarks = document.getElementById("opening-remarks")

    if (n >= backgroundImages.length) {
        slideIndex = 0
    }
    if (n < 0) {
        slideIndex = backgroundImages.length - 1
    }

    openingRemarks.style.background = `url(${backgroundImages[slideIndex]})`
    openingRemarks.style.backgroundSize = "cover"

    startInterval()
}

    function startInterval() {
        setTimeout(function() {
            plusDivs(1)
        }, 3000)
    }

    startInterval()