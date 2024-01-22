function reverseString(str) {
    const strArray = str.split("");
    const revArray = strArray.reverse();
    const revString = revArray.join("");
    return revString;
  }
  
  function reverseString2(str) {
    return str.split("").reverse().join("");
  }
  
  function reverseString3(str) {
    let revString = "";
    for (let i = str.length - 1; i >= 0; i--) {
      revString += str[i];
    }
    return revString;
  }
  
  function reverseString4(str) {
    if (str === "") return "";
    else return reverseString4(str.substr(1)) + str.charAt(0);
  }
  
  function reverseString5(str) {
    return (str === "") ? "" : reverseString5(str.substr(1)) + str.charAt(0);
  }
  
//   console.log(reverseString("!dlroW olleH"))
//   console.log(reverseString2("!dlroW olleH"))
//   console.log(reverseString3("!dlroW olleH"))
//   console.log(reverseString4("!dlroW olleH"))
//   console.log(reverseString5("!dlroW olleH"))

//part1
const array = [1,2,3,4]
let sum =  0
// for(let i=0; i<array.length; i++){
//     sum += array[i]

// }


for(let i=0; i<array.length; i++){
    sum += array[i] / array.length

}
console.log(sum)

const strArray=["rat", "cat", "baseball"]
let final =0
for(let i=0; i<strArray.length; i++){
    
    if(strArray[i].length > final ){
        final = strArray[i].length
    }
}
console.log(final)

function count(n){
    if (n<1){
        return []
    }else{
        const tally = count(n-1);
        tally.push(n)
        return tally
    }

}

console.log(count(13))

//Part 2