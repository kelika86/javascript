// Write a function that returns the number of positive values in the array
function positive(arr){
    count=0;
    for (var i=0; i<arr.length; i++){
        if (arr[i]>=0){
            count+=1
            
        }
    }
    return count;
}
positive([-1,2,3,5,5]);