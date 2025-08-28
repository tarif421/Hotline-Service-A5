function getElement(id) {
  const elements = document.getElementById(id);
  return elements;
}

const callBtns = document.getElementsByClassName("call-btn");
const copyBtns = document.getElementsByClassName("copy-btn");

for (let callBtn of callBtns) {
  callBtn.addEventListener("click", function () {
    const card = callBtn.parentNode.parentNode;
    const hotlineText = card.querySelector("p").innerText;
    const hotlineNum = card.querySelector("h1").innerText;
    console.log(hotlineText);
    alert(hotlineText + " " + hotlineNum);
  });
}
