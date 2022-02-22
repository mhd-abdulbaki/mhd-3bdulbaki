// Skills
let progress = [
  {
    lang: "Javascript",
    progVal: "85%",
  },
  {
    lang: "HTML",
    progVal: "98%",
  },
  {
    lang: "TypeScript",
    progVal: "70%",
  },

  {
    lang: "CSS",
    progVal: "90%",
  },
  {
    lang: "ReactJS",
    progVal: "80%",
  },

  {
    lang: "SASS",
    progVal: "80%",
  },
  {
    lang: "NextJS",
    progVal: "70%",
  },
  {
    lang: "Bootstrap",
    progVal: "80%",
  },
  {
    lang: "Redux",
    progVal: "80%",
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
