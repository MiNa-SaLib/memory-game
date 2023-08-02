console.log("hi");
let photes = ["😊", "😊", "❤", "❤", "😍", "😍", "😢", "😢", "😃", "😃", "😎", "😎", "🤡", "🤡", "😡", "😡"];
let random_photo = photes.sort(() => (Math.random() > .5) ? 2 : -1);
for (let i = 0; i < photes.length; i++) {
    let el = document.createElement("div");
    el.className = "item";
    el.innerHTML = random_photo[i];

    el.addEventListener("click", function () {
        this.classList.add("open")
        setTimeout(() => {
            if (document.querySelectorAll(".open").length > 1) {
                if (document.querySelectorAll(".open")[0].innerHTML == document.querySelectorAll(".open")[1].innerHTML) {
                    document.querySelectorAll(".open")[0].classList.add("match");
                    document.querySelectorAll(".open")[1].classList.add("match");
                    document.querySelectorAll(".open")[1].classList.remove("open");
                    document.querySelectorAll(".open")[0].classList.remove("open");
                }
                if (document.querySelectorAll(".match").length == photes.length) {
                    alert("You Win")
                }
                else {
                    document.querySelectorAll(".open")[1].classList.remove("open");
                    document.querySelectorAll(".open")[0].classList.remove("open");
                }
            }

        }, 500);
    })




    document.querySelector(".game").appendChild(el);

}

let btn = document.querySelector("button");
btn.addEventListener("click", function () {
    window.location.reload();
})