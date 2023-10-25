// window.onload = setTimeout(synopsis,2000)
// function synopsis() {
//     // alert("HI, WELCOME TO MY WEBSITE ")
// }

// function replaceName() {
//     let NAMA = prompt("WHAT'S YOUR NAME ?", "")
//     document.getElementById("NamE").innerHTML = NAMA
// }

// document.getElementById("tombol").addEventListener("click", function() {
//     replaceName()
// })

// let nameInput = document.getElementById("name-input")

// document.getElementById("kirim").addEventListener("click", function() {
//     const nama = nameInput.value

//     if (nAmA == "") {
//         document.getElementById('error-name').innerHTML = "Nama tidak boleh kosong!"
//     } else {
//         document.getElementById('name').innerHTML=  nAmA
//     }

//     document.getElementById('name').innerHTML = nama
// })

// FUNCTION VALIDATE FORM
// function validateForm() {
//     const name = documents.forms["message-form"]["full-name"].value
//     const birthDate = documents.forms["message-form"]["birth-date"].value
//     const gender = documents.forms["message-form"]["gender"].value
//     const messages = documents.forms["message-form"]["messages"].value

//     if(name === "" || birthDate === "" || gender === "" || messages === "") {
//         alert("Tidak Boleh Ada Yang Kosong")
//         return false
//     }

//     setSenderUI(name, birthDate, gender, messages)

//     return false
// }

// FUNCTION SETSENDER UI
// function setSenderUI(name, birthDate, gender, messages) {
//     document.getElementById("sender-full-name").innerHTML = name
//     document.getElementById("sender-birth-date").innerHTML = birthDate
//     document.getElementById("sender-gender").innerHTML = gender
//     document.getElementById("sender-messages").innerHTML = messages
// }

// BANNER AUTOSLIDE
let slideIndex = 1
showDivs(slideIndex)

function plusDivs(n) {
    showDivs(slideIndex += n)
}

function showDivs(n) {
    let i
    let x = document.getElementsByClassName("img-slideshow")
    if (n > x.length) {slideIndex = 1}

    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"
    }
    x[slideIndex-1].style.display = "block"

    function startInterval() {
        setTimeout(function() {
            plusDivs(1);
        }, 5000);
    }
    
    startInterval();
}