function storeGrades(input) {
  // Create a new Map to store students and their grades
  const studentGrades = new Map();

  // Loop through each entry in the input array
  input.forEach((entry) => {
    // Split the entry string into tokens
    const tokens = entry.split(" ");
    const studentName = tokens[0];
    const grades = tokens.slice(1).map(Number); // Convert grade strings to numbers

    // Check if the map already has the student
    if (!studentGrades.has(studentName)) {
      // If not, set the student with the given grades
      studentGrades.set(studentName, grades);
    } else {
      // If it does, get the existing grades and add the new grades to it
      const existingGrades = studentGrades.get(studentName);
      studentGrades.set(studentName, existingGrades.concat(grades));
    }
  });

  // Create an array from the map entries and sort it alphabetically by student name
  const sortedEntries = Array.from(studentGrades).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  // Print the result
  sortedEntries.forEach(([studentName, grades]) => {
    // Calculate the average grade, fixed to 2 decimal places
    const averageGrade = (
      grades.reduce((sum, grade) => sum + grade, 0) / grades.length
    ).toFixed(2);
    console.log(`${studentName}: ${averageGrade}`);
  });
}

// Example usage
storeGrades(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
//storeGrades(['Steven 3 5 6 4', 'George 4 6', 'Tammy 2 5 3', 'Steven 6 3']);
