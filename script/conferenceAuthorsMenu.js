const dayList = document.querySelector('.scheduleSection__dayList');

const day1Button = document.querySelector('#day1');

const section1 = document.querySelector('#section1');

let activeSection = section1;
let activeButton = day1Button;

const hideActiveSection = () => {
    activeSection.classList.add('conferenceAuthors__hidden');
};

// Hide active section and button

const hideActiveButton = () => {
    activeButton.classList.remove('scheduleSection__dayList__day__clicked');
};

const hideActive = () => {
    hideActiveSection();
    hideActiveButton();
};

//

// Set active section and button

const setActiveSection = (section) => {
    section.classList.remove('conferenceAuthors__hidden');
    activeSection = section;
}

const setActiveButton = (button) => {
    button.classList.add('scheduleSection__dayList__day__clicked');
    activeButton = button;
}

const setActive = (button, section) => {
    setActiveSection(section);
    setActiveButton(button);
}

//

const onDayButtonClick = (event) => {

    const { target } = event;

    if(target.tagName !== 'LI') {
        return;
    }

    hideActive();

    const day = target.id;
    const section = document.querySelector(`#section${day[day.length - 1]}`);
    const button = document.querySelector(`#${day}`);

    setActive(button, section);
}

dayList.onclick = onDayButtonClick;