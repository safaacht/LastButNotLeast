const notes = [1, 10, 14, 5, 7,2]

// ch1: calculate the mean of the array
function mean(notes){
    let sum=0;
    let moyenne=0;
    let length=notes.length ;
    let status =false;
    let max=notes[0];
    let min=notes[0];
    
    sum=notes.reduce((acc,n)=> acc+n ,0)
    
    moyenne= sum / length;
    
    // ch2: return true if the mean is major or equal to 10 else return false

    if(moyenne>= 10){
         status=true;
    }
    // console.log(status);
    // return moyenne;


    // ch3: return the maximum number of the array
    notes.forEach(note => {
        if(note>max){
            max=note
        } 
    });
    // console.log(max);
    
    

    // ch4: return the minimum number of the array
    notes.forEach(note => {
        if(note<min){
            min=note
        } 
    });
    // console.log(min);
    
    // ch5: return the median of the array +  ch7: return array with numbers sorted in ascending order


    let temp=0

    for(let i=0 ; i<notes.length-1; i++){
        for(let j=i+1 ; j< notes.length ; j++){
            if(notes[i]> notes[j]){
                temp=notes[i]
                notes[i]=notes[j]
                notes[j] = temp
            }
        }
    } 
    console.log(notes);

    let median=0;
    
    if(notes.length % 2 === 1){
        median= notes[(notes.length-1)/2];
        console.log(median); 
    }else{
        let med1 = notes[(notes.length/2) -1];
        let med2 = notes[notes.length/2];
        median = (med1 + med2) /2;
    }
    console.log(median);

    // ch6: return the second largest number + ch8: return array with numbers sorted in descending order
    
    for(let i=0 ; i<notes.length-1; i++){
        for(let j=i+1 ; j< notes.length ; j++){
            if(notes[i]< notes[j]){
                temp=notes[i]
                notes[i]=notes[j]
                notes[j] = temp
            }
        }
    }  
    let sLargeNum= notes[1]
    console.log("second large num :", sLargeNum);

// ch9: return the index of all the numbers that are major or equal to 10 
    notes.forEach((note,index)=>{
        if(note>= 10){
            console.log({
                index,note
            });
            
        }
    })
    
}
console.log(mean(notes));



// ch10: return the dot product of the array
// ch11: return array with product of each two following numbers
// ch12: return array with factorial of each number
