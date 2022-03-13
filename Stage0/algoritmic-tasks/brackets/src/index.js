module.exports = function check(str, bracketsConfig) {
  // your solution
if (str.length%2!=0) {return false } //for dumb tests :)

let stack = [];
let config = bracketsConfig.join('').replace(/,/g, '');

for(let i = 0; i < str.length; i++)
{
    let x = str[i];
    let check1;

    if (x == stack[stack.length-1] && x == config[config.indexOf(x)+1]){ //checking for identical brackets
     stack.pop();
    }

    else if ((config.indexOf(x))%2==0) { // push stack
      stack.push(x);
    }

    else { // pop stack
      if (stack.length==0) {return false} // 
      check1 = stack.pop();
       if (!(config.indexOf(x) == config.indexOf(check1) || config.indexOf(x) == config.indexOf(check1)+1)){ return false }
    }
  }

return (stack.length == 0);
}
