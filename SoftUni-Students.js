function manageCourses(arr) {
  let courses = {};

  arr.forEach((line) => {
    if (line.includes(": ")) {
      let [courseName, capacity] = line.split(": ");
      capacity = Number(capacity);
      if (!courses[courseName]) {
        courses[courseName] = { capacity: 0, students: [] };
      }
      courses[courseName].capacity += capacity;
    } else if (line.includes(" joins ")) {
      let [studentInfo, courseName] = line.split(" joins ");
      let [userCredits, email] = studentInfo.split(" with email ");
      let username = userCredits.split("[")[0];
      let credits = Number(userCredits.split("[")[1].split("]")[0]);

      if (
        courses[courseName] &&
        courses[courseName].students.length < courses[courseName].capacity
      ) {
        courses[courseName].students.push({ username, email, credits });
      }
    }
  });

  let sortedCourses = Object.keys(courses).sort(
    (a, b) => courses[b].students.length - courses[a].students.length
  );

  sortedCourses.forEach((courseName) => {
    let course = courses[courseName];
    let placesLeft = course.capacity - course.students.length;
    console.log(`${courseName}: ${placesLeft} places left`);
    course.students
      .sort((a, b) => b.credits - a.credits)
      .forEach((student) => {
        console.log(
          `--- ${student.credits}: ${student.username}, ${student.email}`
        );
      });
  });
}

// Example usage:
let input1 = [
  "JavaBasics: 2",
  "user1[25] with email user1@user.com joins C#Basics",
  "C#Advanced: 3",
  "JSCore: 4",
  "user2[30] with email user2@user.com joins C#Basics",
  "user13[50] with email user13@user.com joins JSCore",
  "user1[25] with email user1@user.com joins JSCore",
  "user8[18] with email user8@user.com joins C#Advanced",
  "user6[85] with email user6@user.com joins JSCore",
  "JSCore: 2",
  "user11[3] with email user11@user.com joins JavaBasics",
  "user45[105] with email user45@user.com joins JSCore",
  "user007[20] with email user007@user.com joins JSCore",
  "user700[29] with email user700@user.com joins JSCore",
  "user900[88] with email user900@user.com joins JSCore",
];

// let input2 = [
//     'JavaBasics: 15', 'user1[26] with email user1@user.com joins JavaBasics', 'user2[36] with email user11@user.com joins JavaBasics',
//     'JavaBasics: 5', 'C#Advanced: 5', 'user1[26] with email user1@user.com joins C#Advanced',
//     'user2[36] with email user11@user.com joins C#Advanced', 'user3[6] with email user3@user.com joins C#Advanced',
//     'C#Advanced: 1', 'JSCore: 8', 'user23[62] with email user23@user.com joins JSCore'
// ];

manageCourses(input1);
//manageCourses(input2);
