const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
let document = document.querySelectorAll(".price");
let sum = 0;
document.forEach((price) => {
  sum += parseFloat(price.textContent);
});
console.log(sum); 
  
};

getSumBtn.addEventListener("click", getSum);

