module.exports = function reverse (n) {
    n<0 ? n = -n : n;
    
    let str = n.toString();
 let strM = str.split(''); //get massive of digits
let strL = str.length;
let revStrM = strM.slice();
    for (let i=0; i < strL; i++){
    revStrM[i]=strM[(strL-1)-i];
}

return revStrM.join('');
}
