function add(x,y)  {
  return (x+y)
}
function subtract(x,y)  {
  return (x-y)
}
function multiply(x,y)  {
  return (x*y)
}
function divide(x,y)  {
  return (x/y)
}
function inc(n)  {
  return (n+=1)
}
function dec(n)  {
  return (n-=1)
}
function makeInt(x, base) {
  var parsed = parseInt(x, base);
  if (isNaN(parsed)) { return 0 }
  return parsed * 100;
}
function preserveDecimal(n)  {
  return parseFloat(n)
}