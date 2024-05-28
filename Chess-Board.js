function chessBoard(n) {
  let chessBoard = '<div class="chessboard">\n';

  for (let row = 0; row < n; row++) {
    chessBoard += "  <div>\n";
    for (let col = 0; col < n; col++) {
      if ((row + col) % 2 === 0) {
        chessBoard += '    <span class="black"></span>\n';
      } else {
        chessBoard += '    <span class="white"></span>\n';
      }
    }
    chessBoard += "  </div>\n";
  }

  chessBoard += "</div>";
  console.log(chessBoard);
}
chessBoard(6);
