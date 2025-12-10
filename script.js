// Simple scroll reveal
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 120; // adjust pannalaam

    if (elementTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    }
  }
}
const profile = document.querySelector(".hero-image img");

profile.addEventListener("mousemove", (e) => {
  const rect = profile.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const rx = ((y - rect.height / 2) / rect.height) * 16;
  const ry = ((x - rect.width / 2) / rect.width) * -16;

  profile.style.transform = `
    translateY(-10px)
    rotateX(${rx}deg)
    rotateY(${ry}deg)
  `;

  profile.style.boxShadow = `
    ${-ry * 2}px ${rx * 2}px 40px rgba(56,189,248,.45),
    0 30px 70px rgba(15,23,42,.95)
  `;
});

profile.addEventListener("mouseleave", () => {
  profile.style.transform = "translateY(-10px) rotateX(0) rotateY(0)";
  profile.style.boxShadow = "0 25px 60px rgba(15,23,42,.9)";
});


// first load & scroll la call pannrom
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
const heroImgWrap = document.querySelector(".hero-image");

heroImgWrap.addEventListener("mousemove", (e) => {
  const rect = heroImgWrap.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;

  heroImgWrap.style.setProperty("--mx", `${x}%`);
  heroImgWrap.style.setProperty("--my", `${y}%`);
});
const nameText = "K Sanjay";
const nameEl = document.querySelector(".hero h1");

let i = 0;
nameEl.textContent = "";

function typeName() {
  if (i < nameText.length) {
    nameEl.textContent += nameText.charAt(i);
    i++;
    setTimeout(typeName, 120);
  }
}

window.addEventListener("load", typeName);
