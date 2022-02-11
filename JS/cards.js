repos = [
  {
    img: "./Images/book-store.webp",
    title: "Book Store",
    des: "Book Store using ReactJS and Redux Toolkit.",
    url: "https://trusting-hamilton-049eb1.netlify.app/",
    githubLink: "https://github.com/mhd-abdulbaki/Book-Store",
  },
  {
    img: "./Images/todo.webp",
    title: "Todo List",
    des: "Awesome Todo List with javascript techniques including local storage.",
    url: "https://mhd-abdulbaki.github.io/Todo/",
    githubLink: "https://github.com/mhd-abdulbaki/Todo",
  },
  {
    img: "./Images/phone.webp",
    title: "Product Landing-page",
    des: "Product landing page using HTML, CSS techniques such as CSS flex, grid and media query.",
    url: "https://mhd-abdulbaki.github.io/Product-landing-page/",
    githubLink: "https://github.com/mhd-abdulbaki/Hulu/",
  },
  {
    img: "./Images/hulu.WebP",
    title: "Hulu Homepage",
    des: "Hulu homepage using HTML, CSS techniques such as CSS flex, grid and media query and JavaScript.",
    url: "https://mhd-abdulbaki.github.io/Hulu/",
    githubLink: "https://github.com/mhd-abdulbaki/Hulu/",
  },

  {
    img: "./Images/social.WebP",
    title: "Social Network",
    des: "Design Social Network using Sass and CSS techniques such as CSS flex, grid and media query.",
    url: "https://mhd-abdulbaki.github.io/Social-Network-Theme/dashboard.html",
    githubLink: "https://github.com/mhd-abdulbaki/Social-Network-Theme",
  },
  {
    img: "./Images/hosting.WebP",
    title: "Hosting website",
    des: "Hosting website using HTML and CSS techniques such as CSS flex, grid and media query, and JavaScript.",
    url: "https://mhd-abdulbaki.github.io/Hosting-website/",
    githubLink: "https://github.com/mhd-abdulbaki/Hosting-website",
  },
  {
    img: "./Images/software.WebP",
    title: "Software Service homepage",
    des: "Full responsive design, with awesome full screen image slider using HTML, CSS and Javascript.",
    url: "https://mhd-abdulbaki.github.io/software-service/",
    githubLink: "https://github.com/mhd-abdulbaki/software-service",
  },
  {
    img: "./Images/3d-card.WebP",
    title: "3D Card Animation",
    des: "Awesome 3D Card Animation using vanilla Javascript",
    url: "https://mhd-abdulbaki.github.io/Awesome-3D-Card-/",
    githubLink: "https://github.com/mhd-abdulbaki/Awesome-3D-Card-",
  },
  {
    img: "./Images/business.WebP",
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
          <a class = 'btn' rel="noreferrer" href=${repo.githubLink} target="_blank"><i class="fab fa-github"></i>  Github</a>
          <a class = 'btn' rel="noreferrer" href=${repo.url} target="_blank" ><i class="fas fa-eye"></i> visit</a>
        </div>
    </div>`;
});
