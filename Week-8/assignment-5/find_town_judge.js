

const findJudge = (N, trust) => {
    
    let likesCountList = {}             //tracking number of likes
    
    let beingLikedCountList = {}        //tracking number of people being liked
    
    //hash the key from 1 to N
    for(let i = 1; i <= N; i++){
        likesCountList[i] = 0                   
        beingLikedCountList[i] = 0
    }
    
    //loop through trust to hash value to hashes
    for(let element of trust){                  
        likesCountList[element[0]]++                //increment likes count for person liking other persons
        beingLikedCountList[element[1]]++           //increment liked count for person who is liked
    }
    
    let judge = 0                                           
    
    for(key in likesCountList){
        if(likesCountList[key] === 0) judge = key           //if key has 0 likes, it is the judge
    }
    
    if(beingLikedCountList[judge] === N - 1) return judge   //if judge has N-1 likes, return judge
    else return -1
};


console.log(findJudge(2, [[1,2]]))
console.log(findJudge(3, [[1,3],[2,3]]))
console.log(findJudge(3, [[1,3],[2,3],[3,1]]))