

module.exports = function toReadable (number) {
   
let dgg = ['zero','one','two','three','four','five','six','seven','eight','nine'];
let dg = ['','one','two','three','four','five','six','seven','eight','nine']; 
let tn =['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']; 
let tw = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety']; 


let strNumber = number.toString(); //to string
let len = strNumber.length;  //get length
let masNumber = strNumber.split('');//get massive of digits
let hrnsum = ''; //start word

    
    if (len>2) {
        hrnsum = dg[masNumber[0]] + ' hundred ';
        if (masNumber[1]>=2){
            hrnsum += tw[masNumber[1]]+' ';
            hrnsum += dg[masNumber[2]]; 
            return hrnsum.trim();
           }
           if (masNumber[1]==1){
            hrnsum += tn[masNumber[2]];
            return hrnsum; 
            
             }
             hrnsum += dg[masNumber[2]];
             return hrnsum.trim(); 
    }
    if (len>1) {
       if (masNumber[0]>=2){
        hrnsum += tw[masNumber[0]]+' ';
        hrnsum += dg[masNumber[1]]; 
        return hrnsum.trim();
       }
       if (masNumber[0]==1){
        hrnsum += tn[masNumber[1]];
        return hrnsum; 
        
         }
    
      }
        
    hrnsum += dgg[masNumber[0]];
    
    return hrnsum;



}
/*
// American Numbering System
let th = ['','thousand','million', 'billion','trillion'];
// uncomment this line for English Number System
// var th = ['','thousand','million', 'milliard','billion'];

let dg = ['zero','one','two','three','four','five','six','seven','eight','nine']; 
let tn =['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']; 
let tw = ['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety']; 
function toWords(s){s = s.toString(); s = s.replace(/[\, ]/g,''); 
if (s != parseFloat(s)) return 'not a number'; 
var x = s.indexOf('.'); 
if (x == -1) x = s.length; 
if (x > 15) return 'too big'; 
var n = s.split(''); 
var str = ''; 
var sk = 0; 
for (var i=0; i < x; i++) 
{if ((x-i)%3==2) {if (n[i] == '1') {str += tn[Number(n[i+1])] + ' '; i++; sk=1;}
else if (n[i]!=0) {str += tw[n[i]-2] + ' ';sk=1;}} 
else if (n[i]!=0) {str += dg[n[i]] +' '; if ((x-i)%3==0) str += 'hundred ';sk=1;} 
if ((x-i)%3==1) {if (sk) str += th[(x-i-1)/3] + ' ';sk=0;}} 
if (x != s.length) {var y = s.length; str +='point '; for (var i=x+1; istr.replace(/\s+/g,' ');} */