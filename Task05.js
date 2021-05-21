function getAreaOfTriangle(s1,s2,s3){
let semiperimeter = 0.5*(s1 + s2 + s3);
let area = Math.sqrt(semiperimeter *(semiperimeter - s1)*(semiperimeter -s2)*(semiperimeter - s3));
return area;
}
console.log(getAreaOfTriangle(3,4,5));
