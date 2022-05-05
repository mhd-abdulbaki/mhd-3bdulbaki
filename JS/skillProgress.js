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
    lang: "React",
    progVal: "80%",
  },

  {
    lang: "SASS",
    progVal: "80%",
  },
  {
    lang: "NextJS",
    progVal: "60%",
  },
  {
    lang: "Bootstrap",
    progVal: "80%",
  },
  {
    lang: "Redux",
    progVal: "70%",
  },
  {
    lang: "Git",
    progVal: "70%",
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
