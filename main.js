let dialogMenuOpener = document.querySelector(".header__menu-icon");
let dialogMenu = document.querySelector(".header__dialog-menu");
let dialogMenuClosure = document.querySelector(".header__close-icon")

dialogMenuOpener.addEventListener("click", () => {
  dialogMenu.showModal();
})

dialogMenuClosure.addEventListener('click', () => {
  dialogMenu.close();
})

// - - - - - _feedback

const images = document.querySelectorAll('.feedback__img');
const quote = document.querySelector('.feedback__quote');
const author = document.querySelector('.feedback__author');
let checkedImg;

let feedbacks = {
  0: {
    quote: "Thanks a lot for the prompt service. Really appreciate. Excellence taste in Every Bite. Add a joy of best Taste. Foodie Moments.",
    author: "Adele A.McNeill"
  },
  1: {
    quote: "I really liked your burger. Add a joy of best Taste. Good job.",
    author: "Daniel McAdams"
  },
  2: {
    quote: "My favorite fast food restaurant. Also thanks a lot for the prompt service.",
    author: "Emilia Clarke"
  },
  3: {
    quote: "My son like your restaurant. Excellence taste in Every Bite. My appreciation.",
    author: "Anjelica Huston"
  },
  4: {
    quote: "Your Pizza Hot and Papa John's is awesome! Excellence taste in Every Bite.",
    author: "Robert Maillet"
  },
  length: 5
}

images.forEach((image, index) => image.addEventListener('click', (event) => {
  checkedImg = index;
  
  images.forEach((image, index) => {
    if (checkedImg === index) {
      image.classList.add('feedback__img_checked');
      quote.textContent = feedbacks[index].quote;
      author.textContent = feedbacks[index].author
    } else {
      image.classList.remove('feedback__img_checked')
    }
  })
}))



