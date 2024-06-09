function loadingBar(num) {
  function setUpLoadingBar(percentLoaded) {
    const percentSymbolCount = percentLoaded / 10;
    const dotSymbolCount = 10 - percentSymbolCount;

    const percent = "%".repeat(percentSymbolCount);
    const dots = ".".repeat(dotSymbolCount);

    const bar = `[${percent}${dots}]`;
    return bar;
  }

  const resultBar = setUpLoadingBar(num);

  if (num === 100) {
    console.log("100% Complete!");
    console.log(resultBar);
  } else {
    console.log(`${num}% ${resultBar}`);
    console.log("Still loading...");
  }
}
loadingBar(30);
loadingBar(50);
loadingBar(100);
