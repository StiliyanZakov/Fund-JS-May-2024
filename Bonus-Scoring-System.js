function bonusScoringSistem(arr) {
  const studentCount = Number(arr.shift());
  const totalLectureCount = Number(arr.shift());
  const additionalBonus = Number(arr.shift());
  
  let maxBonus = 0;
  let maxAttendanceCount = 0;

  for (let curStudent = 1; curStudent <= studentCount; curStudent++) {
    const curAttendanceCount = Number(arr.shift());
    const totalBonus =
      (curAttendanceCount / totalLectureCount) * (5 + additionalBonus);

    if (totalBonus > maxBonus) {
      maxBonus = totalBonus;
      maxAttendanceCount = curAttendanceCount;
    }
  }
  console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
  console.log(`The student has attended ${maxAttendanceCount} lectures.`);
}
bonusScoringSistem(["5", "25", "30", "12", "19", "24", "16", "20"]);
// bonusScoringSistem([
//   "10",
//   "30",
//   "14",
//   "8",
//   "23",
//   "27",
//   "28",
//   "15",
//   "17",
//   "25",
//   "26",
//   "5",
//   "18",
// ]);
