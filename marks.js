const marks = Number(prompt('Please enter the marks (0-100):'));

if (isNaN(marks)) {
    alert('Invalid input. Please enter a number from 0 to 100.');
} else if (marks < 0 || marks > 100) {
    alert('Marks must be between 0 and 100.');
} else if (marks >= 90) {
    alert('Marks: ' + marks + ' — Grade A');
} else if (marks >= 75) {
    alert('Marks: ' + marks + ' — Grade B');
} else if (marks >= 60) {
    alert('Marks: ' + marks + ' — Grade C');
} else if (marks >= 50) {
    alert('Marks: ' + marks + ' — Grade D');
} else {
    alert('Marks: ' + marks + ' — Grade F');
}