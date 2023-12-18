document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector(".nav-items").classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((item) => {
    item.addEventListener("click", () => {
        document.querySelector(".nav-items").classList.toggle("active");
    });
});























// // بحث
// <i class="fa-thin fa-magnifying-glass"></i>
// //
// <i class="fa-light fa-cart-shopping"></i>
// // left
// <i class="fa-solid fa-arrow-left"></i>
// //right
// <i class="fa-solid fa-arrow-right"></i>

// <i class="fas fa-mobile  kk"></i>


