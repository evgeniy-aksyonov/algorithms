// https://github.com/zeke/euclidean-distance
// Euclidean distance formula dab=(xa−xb)^2+(ya−yb)^2+(za−zb)^2 for 3-dimensional space

let point1 = {x:1, y:1, z:1};
let point2 = {x:2, y:2, z:2};

function euclideanDistance(p1, p2){
  xdiff = Math.pow((p1.x - p2.x), 2);
  ydiff = Math.pow((p1.y - p2.y), 2);
  zdiff = Math.pow((p1.z - p2.z), 2);

  return Math.sqrt(xdiff + ydiff + zdiff)
}

console.log(euclideanDistance(point1 ,point2));