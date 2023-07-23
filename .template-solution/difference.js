export const difference = (array = [], filterValues = []) => {
    const filteredArray = array.filter((arrayValue) => {
        if (filterValues.includes(arrayValue)) {
           return false;
        }

        return true;});

 let finalarr = [...new Set(filteredArray)]
    


    return finalarr
    
};

console.log(difference([1,3,3],[1]))



