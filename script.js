// script.js
// de code voor de nav menu 
document.addEventListener('DOMContentLoaded', function() {
    const toggel_btn = document.querySelector('.toggel_btn');
    const dropdown = document.querySelector('.dropdown');
    
    toggel_btn.onclick = function() {
        dropdown.classList.toggle('open');
    };
});

// de code voor de FAQ vragen

document.addEventListener('DOMContentLoaded', function() {

    const FAQ_vragen = document.querySelectorAll('.FAQ_vragen');
    const FAQ_antwoorden = document.querySelectorAll('.FAQ_antwoorden');
    
    FAQ_vragen.forEach(function(vraag, index) {
        vraag.addEventListener('click', function() {
            FAQ_antwoorden[index].classList.toggle('open');
        });
    });
});



