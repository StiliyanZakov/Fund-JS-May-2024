function buildWall(arr) {
    let sectionHeights = arr.map(Number);
  
    let concrete = [];
    let totalPesos = 0;
    let isFinished = false;
  
    while (!isFinished) {
      let curConcrete = 0;
      isFinished = true; // Assume finished unless we find a section less than 30
  
      for (let index = 0; index < sectionHeights.length; index++) {
        if (sectionHeights[index] < 30) {
          sectionHeights[index]++;
          curConcrete += 195;
          isFinished = false; // If we had to increase any section, it's not finished
        }
      }
  
      if (curConcrete > 0) {
        concrete.push(curConcrete);
        totalPesos += curConcrete * 1900;
      }
    }
  
    console.log(concrete.join(", "));
    console.log(`${totalPesos} pesos`);
  }
  
  buildWall([21, 25, 28]);
//  buildWall([17]);
//   buildWall([17, 22, 17, 19, 17]);