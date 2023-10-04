/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    // -------------- practice interview ---------
    const hashmap = {};
    const returnHypotenuse = (array) => {
        const a = array[0];
        const b = array[1];
        const hypotenuse = ((a*a) + (b*b)) 
        return hypotenuse;
    }

  for (let i = 0; i < points.length; i++){
    const point = points[i];
    const hypotenuse = returnHypotenuse(point);

    if (hashmap[hypotenuse]) {
      hashmap[hypotenuse].push(point);
    } else {
       hashmap[hypotenuse] = [point];
    }
  }
    console.log("hashmap: ", hashmap)
  const sortedDistances = Object.keys(hashmap).sort((a, b) => a - b) // returns an array of sorted keys 
  const smallestDistances = [];

  let index = 0; // 2
  while (k > 0 && smallestDistances.length <= points.length){
    const distance = sortedDistances[index]; // 
    console.log("distance: ", distance)
    const arrayOfPoints = hashmap[distance]; //  [[0,2], [2,0]]
    console.log("points: ", arrayOfPoints) 
    for (let i = 0; i < arrayOfPoints.length; i++){
      smallestDistances.push(arrayOfPoints[i])
      k--; // 1
    }
    index++
    console.log(k, index)
  }

  return smallestDistances // [[0,1], [0,2], [2,0]]

    // if (points.length === k){
    //     return points;
    // }

    // const distances = {};
    // const returnDistanceSquared = (coordinates) => {
    //     // a^2 + b^2 = c^2
    //     const x = coordinates[0];
    //     const y = coordinates[1];
    //     console.log(x, y, x*x, y*y)
    //     return x*x + y*y
    // }

    // for (let i = 0; i < points.length; i++){
    //     const coordinate = points[i];
    //     const distanceSquared = returnDistanceSquared(coordinate);
    //     // populate map
    //     if (distances[distanceSquared]) {
    //         distances[distanceSquared].push(coordinate);
    //     } else {
    //         distances[distanceSquared] = [coordinate];
    //     }
    // }

    // const smallestToLargestDistances = Object.keys(distances)
    // smallestToLargestDistances.sort((a, b) => a - b)
    // console.log(smallestToLargestDistances)

    // const arrayOfPoints = [];
    // while (k > 0){
    //     for (let i = 0; i < smallestToLargestDistances.length; i++){
    //         const currentDistance = smallestToLargestDistances[i];
    //         const arrayOfCurrentDistance = distances[currentDistance];
           
    //         for (let j = 0; j < arrayOfCurrentDistance.length; j++) {
    //             arrayOfPoints.push(arrayOfCurrentDistance[j])
    //             k--;
    //         }
    //     }
    // }
    // console.log("array: ", arrayOfPoints)
    // return arrayOfPoints
};