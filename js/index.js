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
    const card = blogCardsArray[i];
    const block = document.createElement("div");
    if (i == 0) block.classList.add("active");
    block.classList.add("block");
    paginationDiv.insertAdjacentElement("beforeend", block);
  }
};

const dampingAnimation = () => {
  return new Promise((resolve, reject) => {
    blogCardDiv.classList.add("animation1");
    setTimeout(() => {
      blogCardDiv.classList.remove("animation1");
      resolve();
    }, 900);
  });
};

const revertDampingAnimation = () => {
  return new Promise((resolve, reject) => {
    blogCardDiv.classList.add("animation2");
    setTimeout(() => {
      blogCardDiv.classList.remove("animation2");
      resolve();
    }, 1000);
  });
};

const flippingCards = async (indexBlog) => {
  if (
    blogCardDiv.classList.contains("animation1") ||
    blogCardDiv.classList.contains("animation2")
  )
    return;

  paginationDiv.children[(indexBlog + 1) % 3].classList.remove("active");
  paginationDiv.children[(indexBlog + 2) % 3].classList.remove("active");

  const currentCard = blogCardsArray[indexBlog];
  paginationDiv.children[indexBlog].classList.add("active");

  await dampingAnimation();

  blogCardDiv.children[0].textContent = currentCard.header;
  blogCardDiv.children[1].src = currentCard.imgSrc;
  blogCardDiv.children[2].textContent = currentCard.description;

  await revertDampingAnimation();
};

blogCardDiv.addEventListener("click", (e) => {
  indexBlog = ++indexBlog % 3;
  flippingCards(indexBlog);
});

paginationDiv.addEventListener("click", (e) => {
  const index = Array.prototype.indexOf.call(e.target.parentNode.children, e.target);
  indexBlog = index
  flippingCards(indexBlog);
});

initPagination();

// window.addEventListener("resize", move, true);
