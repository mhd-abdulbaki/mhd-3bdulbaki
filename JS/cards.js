repos = [
  {
    img: "./Images/projects/hulu.png",
    title: "Hulu Homepage",
    des: "Hulu homepage using HTML, CSS techniques such as CSS flex, grid and media query, and JavaScript.",
    url: "https://mhd-abdulbaki.github.io/Hulu/",
    githubLink: "https://github.com/mhd-abdulbaki/Hulu/",
  },
  {
    img: "./Images/projects/social.png",
    title: "Social Network",
    des: "Design Social Network using Sass and CSS techniques such as CSS flex, grid and media query.",
    url: "https://mhd-abdulbaki.github.io/Social-Network-Theme/dashboard.html",
    githubLink: "https://github.com/mhd-abdulbaki/Social-Network-Theme",
  },
  {
    img: "./Images/projects/hostting.png",
    title: "Hosting website",
    des: "custom website for hosting using HTML and CSS techniques such as CSS flex, grid and media query.",
    url: "https://mhd-abdulbaki.github.io/Hosting-website/",
    githubLink: "https://github.com/mhd-abdulbaki/Hosting-website",
  },
  {
    img: "./Images/projects/slider.png",
    title: "Full screen image slider",
    des: "Full screen image slider using HTML, CSS and ES6 JavaScript.",
    url: "https://mhd-abdulbaki.github.io/Image-slider/",
    githubLink: "https://github.com/mhd-abdulbaki/Image-slider",
  },
  {
    img: "./Images/projects/3d-card.png",
    title: "3D Card Animation",
    des: "Awesome 3D Card Animation using vanilla Javascript",
    url: "https://mhd-abdulbaki.github.io/Awesome-3D-Card-/",
    githubLink: "https://github.com/mhd-abdulbaki/Awesome-3D-Card-",
  },
  {
    img: "./Images/projects/todo.png",
    title: "Todo List",
    des: "Todo List with javascript techniques including local storage",
    url: "https://mhd-abdulbaki.github.io/Todo/",
    githubLink: "https://github.com/mhd-abdulbaki/Todo",
  },
];

let cards = document.querySelector(".cards-container");
let card;
repos.forEach((repo) => {
  cards.innerHTML += `
    <div class="card">
        <img class="image" src=${repo.img} alt="cover">
        <h6 class="card-title">${repo.title}</h6>
        <p class="card-intro">${repo.des}</p>
        <div class="info">
            <a href=${repo.githubLink} target="_blank"> <i class="fab fa-github"></i></a>
            <a href=${repo.url} target="_blank" ><i class="fas fa-eye"></i></a>
        </div>
    </div>`;
});
