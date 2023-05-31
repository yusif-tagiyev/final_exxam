const iconsDiv = document.getElementById("iconsDiv");
console.log(iconsDiv);
const animationMenu = document.querySelector(".animationMenu");
console.log(animationMenu);
const closeBtn = document.getElementById("closeBtn");
console.log(closeBtn);

const titleInput = document.getElementById("titleInput");
const reviewsInput = document.getElementById("reviewsInput");
const linkInput = document.getElementById("linkInput");

const addInfoBtn = document.getElementById("addInfoBtn");
const deleteBtn = document.getElementById("deleteBtn");

iconsDiv.addEventListener("click", function () {
  animationMenu.classList.add("hidenNav");
  animationMenu.classList.remove("hiddenNavRemove");
});

closeBtn.addEventListener("click", function () {
  animationMenu.classList.add("hiddenNavRemove");
  animationMenu.classList.remove("hidenNav");
});

function ADDpost() {
  fetch("http://localhost:3000/myIpa  ", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      title: titleInput.value,
      reviews: reviewsInput.value,
      img_link: linkInput.value,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}

addInfoBtn.addEventListener("click", function () {
  ADDpost();
});

function deleteInfo() {
  fetch("http://localhost:3000/myIpa" + id, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}

deleteBtn.addEventListener("click", function () {
  deleteInfo();
});

// gtjkdflwodlkfjbhcvk

// vaxt catmadiye(())
function dinamicCard() {
  fetch("http://localhost:3000/myIpa")
    .then((res) => res.json())
    .then((data) => {
      const createlemetIpa = document.getElementById("createlemetIpa");

      for (let i = 0; i < 3; i++) {
        // div

        const dinamicDiv = document.createElement("div");
        dinamicDiv.classList.add("restaurantInfo");

        // 2 ci div
        const resturantDiv = document.createElement("div");
        resturantDiv.classList.add("restaurantCard");

        const imagesDiv = document.createElement("img");
        imagesDiv.src = data[i].img_link;

        dinamicDiv.appendChild(resturantDiv);

        createlemetIpa.appendChild(dinamicDiv);
      }
    });
}
