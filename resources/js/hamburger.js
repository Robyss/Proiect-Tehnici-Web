let hamburger = document.querySelector("#hamburger");
let open = false;


hamburger.addEventListener("click", function () {
    if(open) {
        hamburger.classList.remove("active");
        hamburger.classList.add("not-active");

    }else {
        hamburger.classList.add("active");
        hamburger.classList.remove("not-active");
    }
    open = !open;
});


