//using max difference algorithm 

function maxProfit(array)
{
    //declaring maxDiff as such you must buy before you sell
    let maxDiff = array[1] - array[0];
	let minPrice = array[0];

    //checking if array is empty
    if (array.length < 2){
        return `unavailable as more than two days of prices are required.`;
    }

	for (let i = 0; i < array.length; i++) {   
        //tracking minimum price  
        minPrice = Math.min(minPrice, array[i]);
        //tracking max difference       
        maxDiff = Math.max(maxDiff, array[i] - minPrice);        
	}

	return maxDiff;
}

console.log("Maximum profit is " + maxProfit([7,6,4,3,1]));     //0
console.log("Maximum profit is " + maxProfit([7,1,5,3,6,4]));   //5
console.log("Maximum profit is " + maxProfit([1]));

							
