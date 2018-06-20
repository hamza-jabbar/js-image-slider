/* This is the same as ∆
const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');
*/

// ∆
const [current, imgs, opacity] = 
[document.querySelector('#current'), 
document.querySelectorAll('.imgs img'),
0.4];

//  Set first image opacity
imgs[0].style.opacity = opacity;

imgs.forEach(img => 
    img.addEventListener('click', imgClick)
);

function imgClick(e) {
    //  Rest opacity of all images
    imgs.forEach(img => (img.style.opacity = 1));
    //  Change current image src to clicked image in the grid
    current.src = e.target.src;

    //  Add fade in class
    current.classList.add('fade-in');

    //  Remove fadein class after 0.5s
    setTimeout(() => current.classList.remove('fade-in'), 500);

    //  Change the opacity to the opacity variable
    e.target.style.opacity = opacity;
}