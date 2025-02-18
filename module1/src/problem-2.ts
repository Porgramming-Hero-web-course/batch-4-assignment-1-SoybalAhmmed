const removeDuplicates  = (arrays: number[]): number[] => {
    return arrays.filter((array,
        index) => arrays.indexOf(array) === index);
}
    
     const arrays = [1, 2, 2, 3, 4, 4, 5];
     
      
     console.log(removeDuplicates(arrays));