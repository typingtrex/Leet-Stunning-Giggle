/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    for(let i = 0; i < image.length; i++) {
    let currentArr = image[i];
    // let start = currentArr[0];
    // let end = currentArr[currentArr.length -1]
    let start = 0
    let end = currentArr.length -1

    // to reverse the order for each inner array
    while(start < end) {
      let left = currentArr[start];
      let right = currentArr[end];
       
      image[i][start] = right; //set the start index with original right value
      image[i][end] = left; //set the end index with original left value
      
      start++;
      end--;
    }

    // to inverse
    for(let k = 0; k < currentArr.length; k++) {
      if(currentArr[k] === 0) {
        currentArr[k] = 1;
      } else{
        currentArr[k] = 0;
      }
    }

        // console.log("this is new image: ", image)
  }
    
    return image
};