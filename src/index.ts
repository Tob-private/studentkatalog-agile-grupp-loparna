import { students } from "./students.js";

const katalogArticle = document.querySelector('.student-katalog') as HTMLElement
const addButton = document.querySelector('.add-student') as HTMLButtonElement

if (addButton) {
    addButton.addEventListener('click', () => {
        if (displayedStudentsAmount < students.length) {
            displayedStudentsAmount++
        } else {
            alert('No more students to add')
        }
        renderStudents(displayedStudentsAmount)
    })
}

// This can be increased and decreased to "create" more students
let displayedStudentsAmount: number = 10

const renderStudents = (amount: number) => {
    // Loop over the desired amount of students
    for (let i = 0; i < amount; i++) {
        // Select the student
        const element = students[i];

        // Create the parent section element, where all student data will be displayed
        const sectionElement: HTMLElement = document.createElement('section')
        // Add html elements here

        // Name
        const h3Element: HTMLHeadingElement = document.createElement('h3')
        h3Element.innerText = element.name
        sectionElement.appendChild(h3Element)

        // Age
        const ageElement = document.createElement('p');
        ageElement.textContent = `Ålder: ${element.age}`;
        sectionElement.appendChild(ageElement);

        // Status om aktive eller inte
        // fixed a comment
        const status = document.createElement('p');
        status.textContent = element.active ? 'Status: Aktiv' : 'Status: Inaktiv';
        sectionElement.appendChild(status);

        // toggle function for status
        sectionElement.addEventListener('click', () => {
            element.active = !element.active;
            renderStudents(displayedStudentsAmount);
        });

        // Appends section element to article element
        katalogArticle.appendChild(sectionElement)

      
    }
}
 


renderStudents(displayedStudentsAmount)