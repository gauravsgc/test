/*1program for maximum no in an array */
// function max(arr)
// {
//     maxvalue=arr[0]
//     for(i=1;i<arr.length;i++){
//         if(arr[i]>maxvalue){
//         maxvalue=arr[i]
//         }
//     }

// return maxvalue;
// }



// console.log(max(array));

/*2program for palindrome no*/

// function palindrome(str){
//     var splitString = str.split(""); //string to array
 
   
//     var reverseArray = splitString.reverse();//reverse a array 
   
 
   
//     var joinArray = reverseArray.join("");//array join
//    if(joinArray===str){
//         return "palindrome";
//     }
//     else{
//         return "not a palindrome"
//     } 

// }


// s="usuk"
// console.log(palindrome(s));

/*even no in an array */

// function evenno(arr)
// {
//     evenarr=[];
//     for(i=1;i<arr.length;i++){
//         if(arr[i]%2==0){
//         evenarr.push(arr[i]);
//         }
//     }

// return evenarr;
// }


// array=[1,4,5,6,7,9];
// console.log(evenno(array));
/*prime no*/
// function prime(no){
//     flag=0;
// for(i=2;i<no/2;i++){
//     if(no%i==0){
//         flag=1;
//         break;
//     }
// }
// if(flag==1){
//     return "not a prime"
// }
// else{
//     return "prime"
// }
// }
// no=7;
// console.log(prime(no));
// let N = 4;
//     let M = 4 ;
// function findMax(mat)
// {

    // Initializing max element as INT_MIN
    // let maxElement = Number.MIN_VALUE;

    // checking each element of matrix
    // if it is greater than maxElement,
    // update maxElement
    // for (let i = 0; i < N; i++) {
    //     for (let j = 0; j < M; j++) {
    //         if (mat[i][j] > maxElement) {
    //             maxElement = mat[i][j];
    //         }
    //     }
    // }

    // finally return maxElement
    // return maxElement;
// }
// let mat = [[ 1, 2, 3, 4 ],
//                         [ 25, 6, 7, 8 ],
//                         [ 9, 10, 11, 12 ],
//                         [ 13, 14, 15, 16 ]];
 
//        console.log(findMax(mat)) ;

// function mergeSortedArrays(arr1, arr2) { 

//     return [...arr1,...arr2]; 
  
//   } 
//   let arr1=[ 1, 2, 3, 4 ];
//   let arr2=[ 25, 6, 7, 8 ];
//  console.log( mergeSortedArrays(arr1,arr2));

function bubbleSort(arr) {
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          const temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true;
        }
      }
    } while (swapped);
    return arr;
  }
  let arr1=[ 1, 12, 32,14 ];
  console.log(bubbleSort(arr1));