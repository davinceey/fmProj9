const faq = document.querySelector(".faq")

faq.addEventListener("click", (event)=>{
    if(event.target.parentElement.parentElement.hasAttribute("data-toggle") && event.target.className === "arrow"){
        const faqQuestion = event.target.parentElement.parentElement;
        const answer = faqQuestion.querySelector(".collapsed--answer");
        const question = faqQuestion.querySelector("p");
        if(faqQuestion.classList.contains("active")){
            closeAnswer();
        } else{
            if(faq.querySelector(".faq-questions.active")){
                closeAnswer();
            } 
        question.style.color = "hsl(238, 29%, 16%)";
        question.style.fontWeight = 700;
        faqQuestion.classList.add("active");
        answer.style.maxHeight = answer.scrollHeight + "px"; 
    }
}
})

function closeAnswer(){
    faq.querySelector(".faq-questions.active .collapsed--answer").removeAttribute("style");
    faq.querySelector(".faq-questions.active p").removeAttribute("style");
    faq.querySelector(".faq-questions.active").classList.remove("active");
}
