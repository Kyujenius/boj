const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0]);
const pillars = input.slice(1).map(line => line.split(' ').map(Number));

function warehousePolygon(pillars) {
  if (pillars.length === 0) return 0;
  
  pillars.sort((a, b) => a[0] - b[0]);
  
  const maxHeight = Math.max(...pillars.map(p => p[1]));
  const maxHeightPillars = pillars.filter(p => p[1] === maxHeight);
  const leftMost = maxHeightPillars[0][0];
  const rightMost = maxHeightPillars[maxHeightPillars.length - 1][0];
  
  let area = 0;
  let currentHeight = 0;
  let currentPos = pillars[0][0];
  
  for (let [pos, height] of pillars) {
    if (pos > leftMost) break;
    if (height > currentHeight) {
      area += (pos - currentPos) * currentHeight;
      currentHeight = height;
      currentPos = pos;
    }
  }
  
  area += (rightMost - leftMost + 1) * maxHeight;
  
  currentHeight = 0;
  currentPos = pillars[pillars.length - 1][0];
  
  for (let i = pillars.length - 1; i >= 0; i--) {
    const [pos, height] = pillars[i];
    if (pos < rightMost) break;
    if (height > currentHeight) {
      area += (currentPos - pos) * currentHeight;
      currentHeight = height;
      currentPos = pos;
    }
  }
  
  return area;
}

console.log(warehousePolygon(pillars));
