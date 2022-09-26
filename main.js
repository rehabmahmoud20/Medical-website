const sideBtn = document.querySelector(".side-btn");
const navList = document.querySelector(".list ul");
const list = document.querySelector(".list");

const leftIcon = document.querySelector(".icon-left");
const rightIcon = document.querySelector(".icon-right");
const testimonial = document.querySelectorAll(".testimonial");
let counter = 0;

// nav bar
sideBtn.addEventListener("click", () => {
  sideBtn.children[0].classList.toggle("toggle");
  list.classList.toggle("show-list");
});

// testimonial slider
testimonial.forEach((ele, i) => {
  ele.style.left = `${i * 100}%`;
});

rightIcon.addEventListener("click", () => {
  counter++;
  //handlling the arrow
  console.log(rightIcon.className);
  if (rightIcon.className === "icon-right opacity") {
    rightIcon.classList.remove("opacity");
    leftIcon.classList.add("opacity");
  }

  testimonial.forEach((ele, i) => {
    if (counter < testimonial.length) {
      ele.style.transform = `translateX(-${counter * 100}%)`;
    } else {
      counter = 0;
      ele.style.transform = `translateX(-${counter * 100}%)`;
      console.log(counter);
    }
  });
});
leftIcon.addEventListener("click", () => {
  counter--;

  if (leftIcon.className === "icon-left opacity") {
    rightIcon.classList.add("opacity");
    leftIcon.classList.remove("opacity");
  }

  testimonial.forEach((ele, i) => {
    if (counter >= 0) {
      ele.style.transform = `translateX(-${counter * 100}%)`;
    } else {
      counter = testimonial.length - 1;
      ele.style.transform = `translateX(-${counter * 100}%)`;
    }
  });
});
