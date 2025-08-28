function getElement(id) {
  const elements = document.getElementById(id);
  return elements;
}

const callBtns = document.getElementsByClassName("call-btn");
const copyBtns = document.getElementsByClassName("copy-btn");
const cardHearts = document.getElementsByClassName("card-heart");
const starNum = getElement("star-num");
const navHeart = getElement("nav-heart");
const clearBtn = getElement("clear-btn");

for (let callBtn of callBtns) {
  callBtn.addEventListener("click", function () {
    const card = callBtn.parentNode.parentNode;
    const hotlineText = card.querySelector("p").innerText;
    const hotlineNum = card.querySelector("h1").innerText;

    // add history
    const historyContainer = getElement("history-container");
    const now = new Date();
    const time = now.toLocaleTimeString();

    const div = document.createElement("div");
    div.className = "flex justify-between items-center p-5";
    div.innerHTML = `
                    <div>
                        <h2 class="text-xl font-bold">${hotlineText}</h2>
                        <p class="text-lg">${hotlineNum}</p>
                    </div>
                    <div>
                        <p class="text-lg">${time}</p>
                    </div>
    `;

    let star = parseInt(starNum.innerText);

    if (star < 20) {
      alert(
        "You don't have sufficient coin. You need at least 20 coins to call."
      );
      return;
    }

    let newStar = star - 20;
    starNum.innerText = newStar;

    alert("Calling " + hotlineText + " " + hotlineNum);
    historyContainer.appendChild(div);
  });
}

for (const cardHeart of cardHearts) {
  cardHeart.addEventListener("click", function () {
    let navHeartNum = parseInt(navHeart.innerText);
    let newNavHeart = navHeartNum + 1;
    navHeart.innerText = newNavHeart;
  });
}
// for (let copyBtn of copyBtns) {
//   const card = copyBtn.parentNode.parentNode;
//   const hotlineNum = card.querySelector("h1").innerText;
// }

clearBtn.addEventListener("click", function () {
  document.getElementById("history-container").innerHTML = " ";
});
