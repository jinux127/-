// 짝수 반환 함수
const getOnlyEvenNumber = (arr) => { 
    return arr.reduce((acc,cur)=>{
        if(cur % 2 === 0) acc.push(cur);
        return acc;
    },[]);
};

// console.log(getOnlyEvenNumber([1,2,3,4,5,6,7]));

// 직각삼각형
const isRightTriangle = (x,y,z) =>{
    let arr = [x,y,z];
    arr.sort((a,b)=>{return a-b});

    if(Math.pow(arr[2],2) === (Math.pow(arr[1],2) + Math.pow(arr[0],2))) return true;
    else return false;
}

console.log(isRightTriangle(5,3,4));