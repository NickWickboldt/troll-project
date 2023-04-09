const backText = document.querySelector(".back-text");
const backArrow = document.querySelector(".back-arrow");

backArrow.addEventListener("mouseover",()=>{
  backText.style.color = "aliceblue";
});
backArrow.addEventListener("mouseleave", ()=>{
  backText.style.color = "black";
});
backArrow.addEventListener("click",()=>{
  window.location.href = "./index.html";
});