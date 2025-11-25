// const { all } = require("../../routes/main")


document.getElementById("container").addEventListener("click", async function(e) {
    await fetch("/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ postID: event.target.id }),
            
          });
          window.location.reload()
    
});



