import { students } from "./students.js";

const katalogArticle = document.querySelector('.student-katalog') as HTMLElement

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


        // Appends section element to article element
        katalogArticle.appendChild(sectionElement)
    }
}

renderStudents(displayedStudentsAmount)