// const { all } = require("../../routes/main")


document.getElementById("container").addEventListener("click", async function(e) {
    console.log(e.target),
    await fetch("/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ postID: e.target.id }),
           
          });
          window.location.reload()
    
});



