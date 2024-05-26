const buttons = document.querySelectorAll('.Btn');
const boxes = document.querySelectorAll('.box1');
const extraContents = document.querySelectorAll('.extra-content');

buttons.forEach((button, index) => {
    let a = false;
    button.addEventListener('click', function () {
        a = !a;
        const box = boxes[index];
        const extraContent = extraContents[index];
        if (a) {
            box.style.height = '140px'; 
            extraContent.style.display = 'block'; 
        } else {
            box.style.height = '70px'; 
            extraContent.style.display = 'none'; 
        }
    });
});
