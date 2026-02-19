const getSumBtn = document.createElement("button");
getSumBtn.innerText = "Get Total Price";
document.body.appendChild(getSumBtn);

getSumBtn.addEventListener("click", () => {
  const prices = document.querySelectorAll(".prices");
  let sum = 0;

  prices.forEach(price => {
    sum += Number(price.textContent);
  });

  const table = document.querySelector("table");
  const row = document.createElement("tr");
  const cell = document.createElement("td");

  cell.id = "ans";
  cell.colSpan = 2;
  cell.innerText = sum;

  row.appendChild(cell);
  table.appendChild(row);
});


