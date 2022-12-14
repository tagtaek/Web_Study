/*     window.document
브라우저 객체 window의 document속성은 창이 포함한 문서를 참조한다.
즉, window.document는 현재 브라우저에 렌더링되고 있는 문서를 의미하며,
이 속성을 이용하면 해당문서에 접근할 수있다.
window.document는 페이지 콘텐츠, 즉 dom에 대한 진입점 역할을 하는 프로그래밍 인터페이스이다. 페이지의 정보를 얻거나 웹 요소를 생성 및 조작할 수있다.
 */

//querySelector: 선택자를 인자로 전달받아, 전달받은 선택자와 일치하는 문서 내
//첫번째요소를 반환한다.
console.log(document.querySelector("h1")) //<h1>
consile.log(document.querySelector("p")) // <p>
console.log(document.querySelector("#text")) // < p id="text">
console.log(document.querySelector(".paragraph")) // <p class="paragraph">
// 그 콘텐츠 내용이 아닌, 요소 자체가 출력되는 것을 알 수 있음.
//틀리면 null(없다)가 출력된다.

//getElementById: id를 인자로 전달받아...
console.log(document.getElementById("text"))
console.log(document.getElementById("p")) //null

//textContent
const h1 = document.querySelector("h1")
const p = document.getElementById("text")

console.log(h1.textContent) // 큰 제목입니다.
//이렇게 dom속성을 가진 상수 h1의 textcontent에 접근해야 그 요소의 콘텐츠인 텍스트가 출력된다!
h1.textContent = "이걸 바꿧습니다!"

p.textContent = "먼저 바꿧습니다!"
console.log(p.textContent)
