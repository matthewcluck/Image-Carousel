let dots = document.querySelectorAll('.dot');
let arrows = document.querySelectorAll('.arrow');
let lions = document.querySelectorAll('.lion');

function dotPicker (dot) {
    dots[0].innerHTML = '<img src="images/circle1-svgrepo-com.svg">';
    dots[1].innerHTML = '<img src="images/circle1-svgrepo-com.svg">';
    dots[2].innerHTML = '<img src="images/circle1-svgrepo-com.svg">';
    dots[3].innerHTML = '<img src="images/circle1-svgrepo-com.svg">';
    dots[4].innerHTML = '<img src="images/circle1-svgrepo-com.svg">';
    dot.innerHTML = '<img src="images/circle-filled-circle-radio-filled-round-bullet-svgrepo-com.svg">';

    lions[0].style.display = 'none';
    lions[1].style.display = 'none';
    lions[2].style.display = 'none';
    lions[3].style.display = 'none';
    lions[4].style.display = 'none';
    lions[dot.id].style.display = 'block';
}

function arrowPicker (arrow) {
    lions.forEach((lion) => {
        if (lion.style.display == 'block'){
            let current = lion.id;
            lions[0].style.display = 'none';
            lions[1].style.display = 'none';
            lions[2].style.display = 'none';
            lions[3].style.display = 'none';
            lions[4].style.display = 'none';

            if (arrow.id == 'left'){
                lions;
            } else {
                console.log(current);
            }
        }
    })

}

dots.forEach((dot) => {
    dot.addEventListener('click', () => {
        dotPicker(dot);
    })
})

arrows.forEach((arrow) => {
    arrow.addEventListener('click', () => {
       arrowPicker(arrow);
    })
})

