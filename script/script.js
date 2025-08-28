function getElement(id) {
  const elements = document.getElementById(id);
  return elements;
}

const callBtns = document.getElementsByClassName("call-btn");
const copyBtns = document.getElementsByClassName("copy-btn");
const startNum = document.getElement("star-num");

for (let callBtn of callBtns) {
  callBtn.addEventListener("click", function () {
    const card = callBtn.parentNode.parentNode;
    const hotlineText = card.querySelector("p").innerText;
    const hotlineNum = card.querySelector("h1").innerText;

    alert("Calling " + hotlineText + " " + hotlineNum);

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
    historyContainer.appendChild(div);
  });
}
