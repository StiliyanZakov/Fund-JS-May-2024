function findKateWayOut(input) {
  let n = input[0];
  let rows = input.slice(1);

  let kRowIndex, kIndex;
  let lastRightRowIndex = rows[0].length - 1;
  let lastBelowRowIndex = n - 1;
  let lastAboveRowIndex = 0;
  let lastLeftRowIndex = 0;
  let steps = 0;
  let isOut = false;

  for (let i = 0; i < rows.length; i++) {
    if (rows[i].includes("k")) {
      kRowIndex = i;
      kIndex = rows[i].indexOf("k");
      break;
    }
  }

  if (kIndex - 1 < 0) {
    isOut = true;
    steps++;
  }

  if (kIndex + 1 == lastRightRowIndex + 1) {
    isOut = true;
    steps++;
  }

  if (!isOut) {
    for (let i = 0; i < 50; i++) {
      if (isOut) break;
      if (rows[kRowIndex][kIndex - 1] == " ") {
        while (rows[kRowIndex][kIndex - 1] == " ") {
          let rowArr = rows[kRowIndex].split("");
          rowArr[kIndex - 1] = "#";
          rows[kRowIndex] = rowArr.join("");
          kIndex--;
          steps++;
          if (kIndex == 0) {
            steps++;
            isOut = true;
            break;
          }
        }
      }

      if (rows[kRowIndex][kIndex + 1] == " ") {
        while (rows[kRowIndex][kIndex + 1] == " ") {
          let rowArr = rows[kRowIndex].split("");
          rowArr[kIndex + 1] = "#";
          rows[kRowIndex] = rowArr.join("");
          kIndex++;
          steps++;
          if (kIndex == lastRightRowIndex) {
            steps++;
            isOut = true;
            break;
          }
        }
      }

      if (rows[kRowIndex - 1] && rows[kRowIndex - 1][kIndex] == " ") {
        while (rows[kRowIndex - 1] && rows[kRowIndex - 1][kIndex] == " ") {
          let rowArr = rows[kRowIndex - 1].split("");
          rowArr[kIndex] = "#";
          rows[kRowIndex - 1] = rowArr.join("");
          kRowIndex--;
          steps++;
          if (kRowIndex == 0) {
            steps++;
            isOut = true;
            break;
          }
        }
      }

      if (rows[kRowIndex + 1] && rows[kRowIndex + 1][kIndex] == " ") {
        while (rows[kRowIndex + 1] && rows[kRowIndex + 1][kIndex] == " ") {
          let rowArr = rows[kRowIndex + 1].split("");
          rowArr[kIndex] = "#";
          rows[kRowIndex + 1] = rowArr.join("");
          kRowIndex++;
          steps++;
          if (kRowIndex == lastBelowRowIndex) {
            steps++;
            isOut = true;
            break;
          }
        }
      }
    }
  }

  if (isOut) {
    console.log(`Kate got out in ${steps} moves`);
  } else {
    console.log(`Kate cannot get out`);
  }
}

// Test case
findKateWayOut([4, "######", "##  k#", "## ###", "## ###"]); // Output: Kate got out in 5 moves

findKateWayOut([5, "######", "##  k#", "## ###", "######", "## ###"]); // Output: Kate cannot get out
