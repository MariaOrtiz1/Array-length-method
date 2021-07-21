// we're going to take in an array and make a modification to it
export const map = (array, modification) => {
  // Making sure that what we have will for sure be an empty array, and we can easily put whatever array in there
  const newArray = [];
  //this is a loop. If the number is less than the length of the entitre array, count it
  for (let numbers = 0; numbers < array.length; numbers++) {
  //renaming the now mapped numbers 
    const mapNumbers = array[numbers];
    //Making the modification to the map numbers, and then renaming them
    newArray[numbers] = modification(mapNumbers);
  }
  return newArray;
};

