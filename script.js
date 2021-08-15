var buttons = document.querySelectorAll(".btn");
// console.log(buttons);
var cards = document.querySelectorAll(".item");
// console.log(cards);
var label = document.querySelector(".label");
// console.log(label);
var searchBar = document.querySelector("input");
//console.log(searchBar);
buttons.forEach(function(button) {
    button.addEventListener('click', function(){
        var btnClick = button.textContent.toLowerCase();
        if (btnClick == 'all') {
            cards.forEach(function (card) {
                card.style.display = 'block';
                label.textContent="MembER";
            })
        } else {
            cards.forEach(function (card) {
                if (card.classList.contains(btnClick)) {
                    card.style.display = 'block';
                    label.textContent=btnClick.charAt(0).toUpperCase() + btnClick.slice(1)
                    ;
                }   else {
                    card.style.display = 'none';
                }
            })
        }
    })
});

searchBar.addEventListener('keyup', function(event) {
    console.log(event.target.value.toLowerCase().trim());
    var userInput = event.target.value.toLowerCase().trim();
    cards.forEach(function(card) {
        if (card.textContent.toLowerCase().trim().includes(userInput)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});
    

console.log(cards[0].textContent.toLocaleLowerCase().trim());
// buttons[0].addEventListener('click', function () {
//     cards.forEach(function (card) {
//         card.style.display = 'block';
//         label.textContent = "MembER";
//     })
// });
// //cat
// buttons[1].addEventListener('click', function () {
//     var btnClick = buttons[1].textContent.toLowerCase()
//     cards.forEach(function (card) {
//         if (card.classList.contains(btnClick)) {
//             card.style.display = 'block';
//             label.textContent = "Cat";
//         }   else {
//             card.style.display = 'none';
//         }
//     })

// });
// //dog
// buttons[2].addEventListener('click', function () {
//     var btnClick = buttons[2].textContent.toLowerCase()
//     cards.forEach(function (card) {
//         if (card.classList.contains(btnClick)) {
//             card.style.display = 'block';
//             label.textContent = "Dog";
//         }   else {
//             card.style.display = 'none';
//         }
//     })
// });
// //hamster
// buttons[3].addEventListener('click', function () {
//     var btnClick = buttons[3].textContent.toLowerCase()
//     cards.forEach(function (card) {
//         if (card.classList.contains(btnClick)) {
//             card.style.display = 'block';
//             label.textContent = "Hamster";
//         }   else {
//             card.style.display = 'none';
//         }
//     })
// });
// //others
// buttons[4].addEventListener('click', function () {
//     var btnClick = buttons[4].textContent.toLowerCase()
//     cards.forEach(function (card) {
//         if (card.classList.contains(btnClick)) {
//             card.style.display = 'block';
//             label.textContent = "Others";
//         }   else {
//             card.style.display = 'none';
//         }
//     })
// });
var imageall = document.querySelectorAll(".card-img-top")
imageall.forEach(function (element) {
    element.addEventListener("mouseover", function () {
        element.style.width = "100%";
        element.style.height = "70%";
    });
});
imageall.forEach(function (element) {
    element.addEventListener("mouseout", function () {
        element.style.width = "100%";
        element.style.height = "55%";
    });
});
