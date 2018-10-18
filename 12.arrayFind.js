// Write a function that takes in an array and a value. 
// Return true if the value is in the array, return false if the value is not in the array
function arrayFind(arr, value)
    for (var i=0; i<=arr.length; i++){
        if (arr[i]=value){
            return true;
        }
    return false

        
        
    }
arrayFind([1, 2, 3, 4, 5, 90], 80);


// Example call
// arrayFind([1,2,3,4,5,90], 80) --> Returns false---see if the value of 80 is in the array