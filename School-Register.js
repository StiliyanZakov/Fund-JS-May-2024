function schoolRegister(students) {
    let school = {};

    students.forEach(student => {
        // Parse the student information
        let parts = student.split(', ');
        let namePart = parts[0].split(': ')[1];
        let gradePart = parseInt(parts[1].split(': ')[1]) + 1;
        let scorePart = parseFloat(parts[2].split(': ')[1]);

        // Check if the student is eligible to advance to the next grade
        if (scorePart >= 3) {
            if (!school[gradePart]) {
                school[gradePart] = { students: [], totalScore: 0, count: 0 };
            }
            school[gradePart].students.push(namePart);
            school[gradePart].totalScore += scorePart;
            school[gradePart].count++;
        }
    });

    // Sort grades in ascending order
    let sortedGrades = Object.keys(school).sort((a, b) => a - b);

    // Generate and print the output
    sortedGrades.forEach(grade => {
        let gradeInfo = school[grade];
        let averageScore = (gradeInfo.totalScore / gradeInfo.count).toFixed(2);
        console.log(`${grade} Grade`);
        console.log(`List of students: ${gradeInfo.students.join(', ')}`);
        console.log(`Average annual score from last year: ${averageScore}`);
        console.log('');
    });
}

// Example usage
const input1 = [
    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
];

// const input2 = [
//     "Student name: George, Grade: 5, Graduated with an average score: 2.75",
//     "Student name: Alex, Grade: 9, Graduated with an average score: 3.66",
//     "Student name: Peter, Grade: 8, Graduated with an average score: 2.83",
//     "Student name: Boby, Grade: 5, Graduated with an average score: 4.20",
//     "Student name: John, Grade: 9, Graduated with an average score: 2.90",
//     "Student name: Steven, Grade: 2, Graduated with an average score: 4.90",
//     "Student name: Darsy, Grade: 1, Graduated with an average score: 5.15"
// ];

schoolRegister(input1);
//schoolRegister(input2);