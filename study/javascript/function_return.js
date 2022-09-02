function none(){
    console.log("반환값 없음");
}
const result = none();
console.log(result); // undefined


function have(){
    console.log("반환값 없음");
    return 97;
}
const result2 = have();
console.log(result2); // 97

// return은 하나의 데이터만 반환하며, 함수를 종료시키는 기능을 한다.