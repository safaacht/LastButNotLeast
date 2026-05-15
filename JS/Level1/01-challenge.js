const notes = [1, 10, 4, 5, 7]

// ch1: calculate the mean of the array
function mean(notes){
    let sum=0;
    let moyenne=0;
    let length=notes.length ;
    
    sum=notes.reduce((acc,n)=> acc+n ,0)
    
    moyenne= sum / length;

    return moyenne;
}
console.log(mean(notes));


// ch2: return true if the mean is major or equal to 10 else return false
// ch3: return the maximum number of the array
// ch4: return the minimum number of the array
// ch5: return the median of the array
// ch6: return the second largest number
// ch7: return array with numbers sorted in ascending order
// ch8: return array with numbers sorted in descending order
// ch9: return the index of all the numbers that are major or equal to 10 
// ch10: return the dot product of the array
// ch11: return array with product of each two following numbers
// ch12: return array with factorial of each number
