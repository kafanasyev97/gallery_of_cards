const slides = document.querySelectorAll(".slide");
console.log(slides);
const a = document.getElementsByClassName("active");
console.log(a);

for (const slide of slides) {
  slide.addEventListener("click", () => {
    const a = document.getElementsByClassName("active");
    if (a) a[0].classList.remove("active");

    slide.classList.add("active");
  });
}
