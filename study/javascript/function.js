//함수 선언식 ( 이름이 있는 함수를 만든다.)
//또한, 함수 선언부보다 위에서 호출이 가능하다.
function sayHi(){  
    console.log("Hi~ h i~");
};
sayHi(); //함수호출
sayHi();// 재사용이 가능하다는 장점!!


//함수 표현식(함수를 먼저만들고 이름을 붙인다.)
//얘는 함수 선언부보다 위에서 호출이 불가능하다.
const sayBye = function(){  
    console.log("good bye~")
}


//지역 변수 :함수 내부에서 선언한 변수는 함수밖에서 쓸수 없다.
function test(){
    const birth =97;
    console.log(birth);
}
console.log(birth); //불가능!

