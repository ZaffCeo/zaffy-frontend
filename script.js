// script.js

async function sendQuery() {
  const userInput = document.getElementById("userInput").value;

  const res = await fetch("https://ai-backend-p6ub.onrender.com/api/query", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: userInput }),
  });

  const data = await res.json();

  // Show response in the output box
  document.getElementById("response").innerText = data.response;
}
