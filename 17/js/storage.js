let fruits = ["banana", "apple", "kiwi"];
console.log(`현재 fruits : ${fruits}`)

localStorage.setItem("fruits", JSON.stringify(fruits));

let localData;
if (localStorage.getItem("fruits") === null) {
  localData = [];
} else {
  localData = JSON.parse(localStorage.getItem("fruits"));
}
localData.push("mango");
localStorage.setItem("fruits", JSON.stringify(localData));
console.log(`추가 후 fruits : ${localData}`)

const index = localData.indexOf("apple");
localData.splice(index, 1)     // index 부터 1개 값만 삭제
localStorage.setItem("fruits", JSON.stringify(localData));
console.log(`삭제 후 fruits : ${localData}`)

localStorage.removeItem("fruits");