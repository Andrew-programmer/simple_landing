const carouselList = document.querySelector('.reasonSection__reasonListSection');
const navButtons = document.querySelectorAll('.reasonSection__container__navigationContainer__navButton');
const [leftNavButton, rightNavButton] = navButtons;
const screenWidth = window.screen.width;

const calculateCurrentOffsetByScreen = () => {
    if (screenWidth <= 991) {
        return 1015;
    } else if (screenWidth <= 1199) {
        return 350;
    } else {
        return 600;
    }
}

const calculateOffsetBytScreen = () => {
    if (screenWidth <= 991) {
        return 675;
    } else if (screenWidth <= 1199) {
        return 350;
    } else {
        return 600;
    }
}

let currentOffset = calculateCurrentOffsetByScreen();
let maxOffset = calculateCurrentOffsetByScreen();

const setButtonsDisabledStyles = () => {
    const isLeftDisabled = currentOffset === maxOffset;
    const isRightDisabled = currentOffset === -maxOffset;
    leftNavButton.classList.toggle('reasonSection__container__navigationContainer__navButton--disabled', isLeftDisabled);
    rightNavButton.classList.toggle('reasonSection__container__navigationContainer__navButton--disabled', isRightDisabled);
}


const calculateTransform = (elem, offset) => {
    const futureOffset = currentOffset + offset;
    if (futureOffset <= maxOffset && futureOffset >= -maxOffset) {
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
            calculateTransform(carouselList, -calculateOffsetBytScreen());
            return;
        case 'left':
            calculateTransform(carouselList, calculateOffsetBytScreen());
            return;
    }

}

navButtons.forEach(elem => {
    return elem.onclick = handleNavClick;
})