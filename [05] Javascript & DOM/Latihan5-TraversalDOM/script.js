// //Event Handling
// const close = document.querySelector('.close');
// const card = document.querySelector('.card');

// close.addEventListener('click',function(){
//     card.style.display = 'none';
// })

// DOM Traversal
const close = document.querySelectorAll('.close');
// for(let i = 0; i < close.length; i++){
//     close[i].addEventListener('click',function(e){
//         // close[i].parentElement.style.display = 'none';
//         e.target.parentElement.style.display = 'none';
//     })};

// close.forEach(function(el){
//     el.addEventListener('click',function(e){
//         e.target.parentElement.style.display = 'none';
//     })
// });

// Prevent Default
// close.forEach(clickX => 
//     clickX.addEventListener('click', closeCard => {
//         closeCard.target.parentElement.style.display = 'none';
//         closeCard.preventDefault();
//     })
// );

// Event Bubling
const container = document.querySelector('.container');

// container.addEventListener('click',function(e){
//     if(e.target.className == 'close'){
//         e.target.parentElement.style.display = 'none';
//         e.preventDefault();
//     }
// })

container.addEventListener('click', e => {
    if (e.target.className === 'close') {
        e.preventDefault();
        e.target.parentElement.style.display = 'none';
    }
});
