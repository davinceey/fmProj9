const buttons = document.querySelectorAll(".btn");
const response = document.querySelectorAll(".answer");

for(let button of buttons){
    for(let res of response){
        button.addEventListener("click", () => {
            res.classList.toggle("displayed-answer");
        });
      }
}
