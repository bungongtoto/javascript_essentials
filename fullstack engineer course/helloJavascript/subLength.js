/*Write a function subLength() that takes 2 parameters, a string and a single character. 
The function should search the string for the two occurrences of the character and
 return the length between them including the 2 characters. 
 If there are less than 2 or more than 2 occurrences of the character the function should return 0. */


// this function will return an array of indexes of occurrence.
const occurrenceIndex = (string, char) => {
    const indexArr = []
    for (let i = 0; i < string.length; i++) {
        if (string[i] === char) {
            indexArr.push(i)
        }
    }

    return indexArr
}

const subLength = (string, char) => {
    const indexArr = occurrenceIndex(string, char);
    if (indexArr.length === 2) {
        return string.slice(indexArr[0], indexArr[1]+1).length;
    } else {
        return 0;
    }
}

console.log(subLength('heljkals', 'l'));