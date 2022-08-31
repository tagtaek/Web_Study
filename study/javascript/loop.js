            /* while */

let num = 1;
while(num <= 9){
    console.log(num);
    num += 1;
}

//window.confirm() : alert와 같은 경고창인데, "취소" 버튼이 추가됨
//또한, [확인]은 true, [취소] 는 false를 반환함.
while(confirm("warning!!")){
    console.log("확인버튼을 눌렀습니다.");
}
console.log("취소버튼을 눌렀습니다.")


            /* for */

for(let i=1;i<=8; i+= 1){
    if(i%2 == 0){
        console.log(i)
    }
}