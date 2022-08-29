// null: '없다' 를 의미하는 데이터 
// 의도적으로 '없음'을 명시할 때 사용한다.
let number;
number =0; // 이 변수는 숫자0
number=null; //이 변수에는 아무것도 없다

// undefined: '아직 데이터가 정의되지 않았음'을 의미
let number;
console.log(number); // undefined

number =3;
console.log(number); //3

// boolean숫자, 문자열과 같은 데이터타입. true&false 두 가지만 존재
let value;
value=true;
value=false; //소문자여야 한다.
console.log(typeof value); //boolean
