let cards = document.querySelector(".cards-container");
projects.forEach(({ image, title, description, source, visit }) => {
  cards.innerHTML += `
    <div class="card">
        <img class="image" src=${image} alt="cover">
        <h6 class="card-title">${title}</h6>
        <p class="card-intro">${description}</p>
        <div class="info">
          <a class = 'btn' rel="noreferrer" href=${source} target="_blank"><i class="fab fa-github"></i> Github</a>
          <a class = 'btn' rel="noreferrer" href=${visit} target="_blank" ><i class="fas fa-eye"></i> Visit</a>
        </div>
    </div>`;
});
