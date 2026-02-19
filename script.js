const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // select all price cells
  const prices = document.querySelectorAll(".prices");
  let sum = 0;

  prices.forEach(price => {
    sum += Number(price.textContent);
  });

  // check if answer cell already exists
  let ans = document.getElementById("ans");

  if (!ans) {
    const table = document.querySelector("table");
    const row = document.createElement("tr");
    ans = document.createElement("td");

    ans.id = "ans";
    ans.colSpan = 2;

    row.appendChild(ans);
    table.appendChild(row);
  }

  ans.textContent = sum;
};

getSumBtn.addEventListener("click", getSum);


