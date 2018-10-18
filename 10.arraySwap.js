// Given the following array swap the 2nd and 3rd values

var arr = [10,20,30,5,15,25];//[10,20, 5, 30, 15, 25]
    temp=arr[1]; //temp is 20
    
    arr[1]=arr[2] //now 30=30--set arr[1] to be the value of arr[2]
    arr[2]=temp //set temp (20) to replace into arr[2]
    console.log(arr);

//replace the value of the right side to be the value of the left side

// Write code here to swap 2nd and 3rd values