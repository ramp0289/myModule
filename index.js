class Color {
    constructor(name, code) {
      this.name = name;
      this.code = code;
    }
}
const allColors = [
    new Color('renearturo2', '#D7DBDD'),
];  

exports.getRandomColor = () => {
    return allColors[Math.floor(Math.random() * allColors.length)];
  }

exports.getOne = () => {
  return allColors[allColors.length];
}  
  
exports.allColors = allColors;