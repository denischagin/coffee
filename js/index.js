const blogCardDiv = document.querySelectorAll(".blog-card")[0];
const paginationDiv = document.querySelector(".pagination");
let indexBlog = 0;
const blogCardsArray = [
  {
    header: "Daily Coffee News",
    imgSrc: "./img/blog-pour-coffee1.jpg",
    description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
    varius eget arcu quis cursus. Nunc id tortor imperdiet, vestibulum
    orci sed, gravida orci. Cras a enim ac elit eleifend euismod.`,
  },
  {
    header: "Dutch Coffee Chains",
    imgSrc: "./img/blog-pour-coffee2.jpg",
    description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
    varius eget arcu quis cursus. Nunc id tortor imperdiet, vestibulum
    orci sed, gravida orci. Cras a enim ac elit eleifend euismod.`,
  },
  {
    header: "Start Up In Minneapolis",
    imgSrc: "./img/blog-pour-coffee3.jpg",
    description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
    varius eget arcu quis cursus. Nunc id tortor imperdiet, vestibulum
    orci sed, gravida orci. Cras a enim ac elit eleifend euismod.`,
  },
];

const initPagination = () => {
  for (let i = 0; i < blogCardsArray.length; i++) {
    const block = document.createElement("div");
    if (i == 0) block.classList.add("active");
    block.classList.add("block");
    paginationDiv.insertAdjacentElement("beforeend", block);
  }
};

const flippingCards = async (index, e) => {
  if (
    blogCardDiv.classList.contains("animation1") ||
    blogCardDiv.classList.contains("animation2")
  )
    return;

  indexBlog = index;

  paginationDiv.children[(index + 1) % 3].classList.remove("active");
  paginationDiv.children[(index + 2) % 3].classList.remove("active");
  paginationDiv.children[index].classList.add("active");

  blogCardDiv.style.opacity = 0;

  blogCardDiv.addEventListener("transitionend", (e) => {
    if (!e.propertyName === "opacity") return;
    const currentCard = blogCardsArray[index];
    blogCardDiv.children[0].textContent = currentCard.header;
    blogCardDiv.children[1].src = currentCard.imgSrc;
    blogCardDiv.children[2].textContent = currentCard.description;
    blogCardDiv.style.opacity = 1;
  });
};

blogCardDiv.addEventListener("dblclick", (e) => {
  flippingCards((indexBlog + 1) % 3);
});

paginationDiv.addEventListener("click", (e) => {
  const index = Array.prototype.indexOf.call(
    e.target.parentNode.children,
    e.target
  );
  flippingCards(index);
});

initPagination();

// Свайпы

blogCardDiv.addEventListener(
  "touchstart",
  function (event) {
    touchstartX = event.changedTouches[0].screenX;
  },
  false
);

blogCardDiv.addEventListener(
  "touchend",
  function (e) {
    touchendX = e.changedTouches[0].screenX;
    handleGesture();
  },
  false
);

function handleGesture() {
  if (touchstartX - touchendX > 50) {
    // left swipe
    flippingCards((indexBlog + 1) % 3);
  }

  if (touchendX - touchstartX > 50) {
    // right swipe
    flippingCards((indexBlog + 2) % 3);
  }
}
// const move = () => {
    

// }

// window.addEventListener("resize", move, true);


