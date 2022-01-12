repos = [
  {
    img: "./Images/hulu.png",
    title: "Hulu Homepage",
    des: "Hulu homepage using HTML, CSS techniques such as CSS flex, grid and media query and JavaScript.",
    url: "https://mhd-abdulbaki.github.io/Hulu/",
    githubLink: "https://github.com/mhd-abdulbaki/Hulu/",
  },
  {
    img: "./Images/social.png",
    title: "Social Network",
    des: "Design Social Network using Sass and CSS techniques such as CSS flex, grid and media query.",
    url: "https://mhd-abdulbaki.github.io/Social-Network-Theme/dashboard.html",
    githubLink: "https://github.com/mhd-abdulbaki/Social-Network-Theme",
  },
  {
    img: "./Images/hosting.png",
    title: "Hosting website",
    des: "Hosting website using HTML and CSS techniques such as CSS flex, grid and media query, and JavaScript.",
    url: "https://mhd-abdulbaki.github.io/Hosting-website/",
    githubLink: "https://github.com/mhd-abdulbaki/Hosting-website",
  },
  {
    img: "./Images/slider.png",
    title: "Full screen image slider",
    des: "Full screen image slider using HTML, CSS and ES6 JavaScript.",
    url: "https://mhd-abdulbaki.github.io/Image-slider/",
    githubLink: "https://github.com/mhd-abdulbaki/Image-slider",
  },
  {
    img: "./Images/3d-card.png",
    title: "3D Card Animation",
    des: "Awesome 3D Card Animation using vanilla Javascript",
    url: "https://mhd-abdulbaki.github.io/Awesome-3D-Card-/",
    githubLink: "https://github.com/mhd-abdulbaki/Awesome-3D-Card-",
  },
  {
    img: "./Images/business.png",
    title: "Business website",
    des: "Full responsive design, using HTML, CSS techniques such as CSS flex, grid and media query and Javascript.",
    url: "https://mhd-abdulbaki.github.io/Business-website/",
    githubLink: "https://github.com/mhd-abdulbaki/Business-website",
  },
];

let cards = document.querySelector(".cards-container");
repos.forEach((repo) => {
  cards.innerHTML += `
    <div class="card">
        <img class="image" src=${repo.img} alt="cover">
        <h6 class="card-title">${repo.title}</h6>
        <p class="card-intro">${repo.des}</p>
        <div class="info">
          <a class = 'btn' href=${repo.githubLink} target="_blank"><i class="fab fa-github"></i>  Github</a>
          <a class = 'btn' href=${repo.url} target="_blank" ><i class="fas fa-eye"></i> visit</a>
        </div>
    </div>`;
});
