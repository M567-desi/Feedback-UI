const ratingEls = document.querySelectorAll('.rating');
const containerEl = document.getElementById("container")
const btn = document.getElementById("btn");
let selectedRating = "";

ratingEls.forEach((ratingEl)=>{
    ratingEl.addEventListener("click", (event)=>{
        removeActive();
        selectedRating = event.target.innerText || event.target.parentNode.innerText;
        event.target.classList.add("active")
        event.target.parentNode.classList.add("active")
    })
})

btn.addEventListener("click",()=>{
    if(selectedRating !== ''){
        containerEl.innerHTML = `<strong> Thank YOu! </strong> 
        <br>
        <br>

        <strong> Feedback: ${selectedRating}</
        strong>

        <br>
        <br>

        <p> w'll use your feedback to improve our customer support. </p>`
    }
})

function removeActive(){
    ratingEls.forEach((ratingEl)=>{
        ratingEl.classList.remove("active")
    })
}



//reload function to reload page after feedback submited

btn.addEventListener("click",()=>{
    if(selectedRating !== ''){
        containerEl.innerHTML = `<strong> Thank You! </strong> 
        <br>
        <br>

        <strong> Feedback: ${selectedRating}</strong>

        <br>
        <br>

        <p> We'll use your feedback to improve our customer support. </p>`

        setTimeout(() => {
          location.reload(); // reload the page
        }, 3000); // Wait for 3 seconds before reloading
    }
})

