let taskAssigned = document.getElementById("task-assigned");
let totalCompleteJob = document.getElementById("total-complete-job");
let activityLog = document.getElementById("task-log");
let completeButtons = document.getElementsByClassName("complete-btn");
Array.from(completeButtons).forEach((button) => {
        button.addEventListener("click", function () {
        alert("Board Updated Successfully");
        let assignedCount = parseInt(taskAssigned.innerText);
        if (assignedCount > 0) {
        taskAssigned.innerText = assignedCount - 1;
            }
            

        let completeCount = parseInt(totalCompleteJob.innerText);
            totalCompleteJob.innerText = completeCount + 1;
            let currentTime = new Date().toLocaleTimeString();
            let newLog = document.createElement("p");
            
        newLog.innerText = `You have Complete The Task${currentTime}`;
        newLog.classList.add("text-gray-600", "text-sm", "mt-2");
        activityLog.appendChild(newLog);
        button.disabled = true;
        button.classList.add("bg-gray-400");
    });
      document.getElementById("newpage").addEventListener("click", function () {
      window.location.href = "newpage.html"; 
    });
     document.getElementById("clear-logs").addEventListener("click", function () {
      activityLog.querySelectorAll("p").forEach((log) => log.style.display = "none");
     });
  
    let themeToggle = document.getElementById("theme-toggle");
    let body = document.body;
    let colors = ["#F4F7FF", "#222831", "#FFD700", "#e9dbd9", "#05ffa1", "#ffc56c", "#fffb96", "01cdfe", "#4CAF50", "#FF5733"];
    
    let currentIndex = 0;
      themeToggle.onclick = function (event) {
      event.preventDefault();
      currentIndex = (currentIndex + 1) % colors.length;
      body.style.backgroundColor = colors[currentIndex];
    };
    
      function updateTime() {
      let now = new Date();
      let hours = now.getHours();
      let minutes = now.getMinutes();
      let seconds = now.getSeconds();
      let ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12 || 12;  
      minutes = minutes < 10 ? '0' + minutes : minutes;
          seconds = seconds < 10 ? '0' + seconds : seconds;
          
          let timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
      let dateString = now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
      document.getElementById("live-time").innerText = `${dateString} - ${timeString}`;
    }
      setInterval(updateTime, 1000);
      updateTime();

    
    
});


