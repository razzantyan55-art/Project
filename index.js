document.getElementById("btn").addEventListener("click", () => {
    setTimeout (() => {
        document.getElementById("email").value = "";
        document.getElementById("msg").value = "";
        document.getElementById("submit").value = "";
    },5);
})
