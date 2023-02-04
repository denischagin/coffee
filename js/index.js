const blogCardDiv = document.querySelectorAll(".blog-card")[0];
let indexBlog = 1;

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

const flippingCards = async () => {
  indexBlog++;
  const currentCard = blogCardsArray[indexBlog % 3];

  if (
    blogCardDiv.classList.contains("animation1") ||
    blogCardDiv.classList.contains("animation2")
  )
    return;

  await dampingAnimation();

  blogCardDiv.children[0].textContent = currentCard.header;
  blogCardDiv.children[1].src = currentCard.imgSrc;
  blogCardDiv.children[2].textContent = currentCard.description;

  await revertDampingAnimation();
};

blogCardDiv.addEventListener("click", (e) => {
  flippingCards();
});

// window.addEventListener("resize", move, true);
