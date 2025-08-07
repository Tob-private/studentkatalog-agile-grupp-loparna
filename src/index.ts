import { students } from "./students.js";

const catalogUl = document.querySelector('.student-list') as HTMLElement

// This can be increased and decreased to "create" more students
let displayedStudentsAmount: number = 10

const renderStudents = (amount: number) => {
    // Clear catalog
    catalogUl.innerHTML = ""

    // Loop over the desired amount of students
    for (let i = 0; i < amount; i++) {
        // Select the student
        const element = students[i];

        // Create the parent section element, where all student data will be displayed
        const Lielement: HTMLElement = document.createElement('li')

        // Name
        const h3Element: HTMLHeadingElement = document.createElement('h3')
        h3Element.innerText = element.name
        Lielement.appendChild(h3Element)

        // Age
        const ageElement = document.createElement('p');
        ageElement.textContent = `Ålder: ${element.age}`;
        Lielement.appendChild(ageElement);

        // Appends section element to article element
        catalogUl.appendChild(Lielement)
    }
}

renderStudents(displayedStudentsAmount)