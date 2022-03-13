
// You should implement your task here.

module.exports = function towelSort (matrix) {
  
  if (matrix==null){return []}

  let sortMatrix = [];
   for (let m of matrix){
   if (matrix.indexOf(m)%2==0){
   for (let i = 0; i < m.length; i++){
    sortMatrix.push(m[i]);
   }
  }
  else{
   for (let i = m.length-1 ; i >= 0; i--){
    sortMatrix.push(m[i]);
   }
  }
}
  return sortMatrix;
}
