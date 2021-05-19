function areaOfTriangle(s1,s2,s3){
let semiPerimeter = 0.5*(s1 + s2 + s3);
let area = Math.sqrt(semiPerimeter *(semiPerimeter - s1)*(semiPerimeter -s2)*(semiPerimeter - s3));
return area;
}
console.log(areaOfTriangle(3,4,5));