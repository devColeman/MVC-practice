let likeBtn = document.getElementById('likes')
let parentElement = likeBtn.parentElement

console.log(likeBtn)
console.log(parentElement)

likeBtn.addEventListener("click", async function () {
    
    await fetch("/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username: "example" }),
      });

})

// check if the lets works then check if add the id to the parent element 
// next when need to work on the fetch 
