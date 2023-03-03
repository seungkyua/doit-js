async function getQuote() {
  const res = await fetch("https://dummyjson.com/quotes");
  const data = await res.json();

  console.log(data);
  for (let d in data) {
    console.log(d);
  }

  const rand = Math.floor(Math.random() * data.quotes.length);
  const quote = data.quotes[rand];

  const q = document.querySelector(".quote");
  const a = document.querySelector(".author");
  q.innerHTML = `${quote.quote}`;
  a.innerHTML = `- ${quote.author}`;
}

getQuote();