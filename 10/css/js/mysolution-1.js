const origin = document.querySelector("#origin");
const result = document.querySelector("#result");

let arr = new Array(2, 4, 6, 8, 10);

function show(el, arr) {
  let str = "<table><tr>";
  arr.forEach(el => {
    str += "<td>" + el + "</td>";  
  });
  str += "</tr></table>";

  el.innerHTML = str;
}

show(origin, arr);

let sum = 0;
arr.forEach( el => {
  sum += el;
});
arr.push(sum)
show(result, arr);