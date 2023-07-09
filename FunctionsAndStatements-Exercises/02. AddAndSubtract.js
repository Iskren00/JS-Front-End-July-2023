function addAndSubstract(x, y, z) {
    let total = 0;

    function substract(sum, z) {
        return sum - z;
    }

    function sum(x, y) {
        return x + y;
    } 

   total = sum(x,y);
   total = substract(total, z)
    
   console.log(total);
}

addAndSubstract(1, 17, 30)