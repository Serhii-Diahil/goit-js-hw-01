function getElementWidth(content, padding, border) {
  let withElement = Number.parseFloat(getElementWidth);
  return parseFloat(content) + parseFloat(padding) * 2 + parseFloat(border) * 2;
}

console.log(getElementWidth("50", "8", "4")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
