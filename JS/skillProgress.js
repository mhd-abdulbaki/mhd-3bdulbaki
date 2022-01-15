// Skills
let progress = [
  {
    lang: "Javascript",
    progVal: "80%",
  },
  {
    lang: "HTML",
    progVal: "98%",
  },
  {
    lang: "ReactJS",
    progVal: "65%",
  },
  {
    lang: "CSS",
    progVal: "85%",
  },
  {
    lang: "NextJS",
    progVal: "60%",
  },
  {
    lang: "SASS",
    progVal: "80%",
  },
  {
    lang: "Redux",
    progVal: "75%",
  },
  {
    lang: "Git",
    progVal: "90%",
  },
];
let skills = document.getElementById("skills");
progress.forEach((prog) => {
  skills.innerHTML += `
    <div class="skill">
        <div class="progress">
            
            <div class="progress-value" style="width: 0%" data-width="${prog.progVal}">
                <span>${prog.lang} ${prog.progVal}</span>
            </div>
        </div>
    </div>
    `;
});

let ourSkills = document.getElementById("skills");
let progresses = document.querySelectorAll(".progress .progress-value");

window.addEventListener("scroll", function () {
  if (window.scrollY >= ourSkills.offsetTop - 400) {
    progresses.forEach((prog) => {
      prog.style.width = prog.dataset.width;
    });
  }
});
