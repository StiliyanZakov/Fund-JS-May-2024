function pyramidResources(base, increment) {
  let stoneRequired = 0;
  let marbleRequired = 0;
  let lapisLazuliRequired = 0;
  let goldRequired = 0;
  let steps = 0;

  while (base > 2) {
    steps++;
    let outerLayerArea = base * base;
    let innerLayerArea = (base - 2) * (base - 2);
    let outerLayer = outerLayerArea - innerLayerArea;

    if (steps % 5 === 0) {
      lapisLazuliRequired += outerLayer * increment;
    } else {
      marbleRequired += outerLayer * increment;
    }

    stoneRequired += innerLayerArea * increment;
    base -= 2;
  }

  steps++;
  goldRequired += base * base * increment;

  console.log(`Stone required: ${Math.ceil(stoneRequired)}`);
  console.log(`Marble required: ${Math.ceil(marbleRequired)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuliRequired)}`);
  console.log(`Gold required: ${Math.ceil(goldRequired)}`);
  console.log(`Final pyramid height: ${Math.floor(steps * increment)}`);
}
pyramidResources(11, 1);
//pyramidResources(11, 0.75);
//pyramidResources(12, 1);
//pyramidResources(23, 0.5);
