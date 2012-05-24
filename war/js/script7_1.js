/**
 *
 */
var ary = [
  [92, 88, 64, 86],
  [78, 92, 96, 81],
  [68, 56, 84, 70]
];

for (var i = 0; i < 3; i++){
  document.write("<p>");

  for (var j = 0; j < 4; j++){
    document.write("[" + i + "][" + j + "] = " + ary[i][j] + "<br />");
  }

  document.write("</p>");
}