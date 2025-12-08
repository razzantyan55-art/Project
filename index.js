document.getElementById("submit").addEventListener("click", () => {
    setTimeout (() => {
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        document.getElementById("name").value = "";
    },5);
})
