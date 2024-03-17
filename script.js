function stringChop(str, size) {
  // your code here
	    if (!str) return [];

	 let subStr = ''
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        subStr += str[i];
        if (subStr.length === size) {
            arr.push(subStr);
            subStr = '';
        }
    }
    if (subStr.length > 0) {
        arr.push(subStr);
    }
    return arr;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
