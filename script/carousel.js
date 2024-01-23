const carouselList = document.querySelector('.reasonSection__reasonListSection');
const navButtons = document.querySelectorAll('.reasonSection__container__navigationContainer__navButton');
const [leftNavButton, rightNavButton] = navButtons;


let currentOffset = 600;

const setButtonsDisabledStyles = () => {
    const isLeftDisabled = currentOffset === 600;
    const isRightDisabled = currentOffset === -600;
    leftNavButton.classList.toggle('reasonSection__container__navigationContainer__navButton--disabled', isLeftDisabled);
    rightNavButton.classList.toggle('reasonSection__container__navigationContainer__navButton--disabled', isRightDisabled);
}


const calculateTransform = (elem, offset) => {
    const futureOffset = currentOffset + offset;
    if (futureOffset <= 600 && futureOffset >= -600) {
        currentOffset = futureOffset;
        elem.style.transform = `matrix(1, 0, 0, 1, ${currentOffset}, 0)`;
    }
    setButtonsDisabledStyles();
}


const handleNavClick = (event) => {
    event.stopPropagation();
    const {target} = event;
    switch (target.dataset.direction) {
        case "right":
            calculateTransform(carouselList, -600);
            return;
        case 'left':
            calculateTransform(carouselList, 600);
            return;
    }

}

navButtons.forEach(elem => {
    return elem.onclick = handleNavClick;
})