var n=1000000;
var c=Math.random()*100;
var out=c;
console.log("xValue, yValue");
for(var i=0;i<n;i++){
  out+=i+","+c+"\n";
  c+=(Math.random()*2)-1;
}
console.log(out);
