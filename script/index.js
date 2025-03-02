// dynamic date 

function dynamicDate() {
    const dayElement = document.getElementById("current-day");
    const dateElement = document.getElementById("current-date");

    const today = new Date();
    // get day 
    const dayName = today.toLocaleDateString("en-US", { weekday: "short" });
    
    // get date 
    const formattedDate = today.toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" }).replace(",","");
    // Get time
    const hours = today.getHours();
    const minutes = today.getMinutes();
    const seconds = today.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";

    // Convert to 12-hour format
    const formattedHours = hours % 12 || 12;
    const formattedTime = `${formattedHours}:${minutes}:${seconds} ${ampm}`;
    

    // Insert values into HTML
    dayElement.textContent = dayName + " ,";
    dateElement.textContent = formattedDate;
    return formattedTime;
  }

  dynamicDate();

// show message 
 function showMessage(taskHeading){
    const message = document.createElement("div");
            message.classList.add(
              "bg-gray-100",
              "p-2",
              "rounded-lg",
              "mb-2"
            );
        const time=dynamicDate();
            message.innerText= `You have Complete The Task ${taskHeading} at ${time}`;
            messages.appendChild(message);
 }

 const increase=document.getElementById("increase-count");
  const decrease=document.getElementById("decrease-count");
  const buttons=document.querySelectorAll(".complete-btn");
  const messages=document.getElementById("show-message");
  const changeColorBtn = document.getElementById('change-color-btn'); 
  const totalTasks=buttons.length;
  let completedTasks=0;
//   loop to access all buttons 
for(let button of buttons){
    button.addEventListener("click",function(event){
       const currentIncreaseCount=parseInt(increase.textContent);
       const currentDecreaseCount=parseInt(decrease.textContent);
       if(currentDecreaseCount>0){
        alert("Board Update Successfully");
        const parent=event.target.parentNode.parentNode;
        const heading=parent.querySelector(".task-heading").innerText;
        // count 
        decrease.textContent=currentDecreaseCount-1;
        increase.textContent=currentIncreaseCount+1;

        // button disable 
        button.disabled = true;
        button.classList.add("bg-gray-400", "cursor-not-allowed");

        // show message on activity 
        showMessage(heading);
        // all task completed
        completedTasks++;
        if (completedTasks === totalTasks) {
            alert("Congratulations! All tasks are completed.");
        }
            
       }
       
    })
}

// clear history 
const clearHistory=document.getElementById("clear-history");
    clearHistory.addEventListener("click",function(){
        messages.innerHTML="";
    })


const blog= document.getElementById("blog");

blog.addEventListener("click",function(){
    window.location.href="./blog.html";
})

// randomly color change 


function getRandomColor() { 
 const letters = '0123456789ABCDEF';
  let color = '#'; 
  for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]; 
     } 
 return color; 
 } 

changeColorBtn.addEventListener('click', function() { 
document.body.style.backgroundColor = getRandomColor(); });