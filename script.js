// 공통 스크립트: 모바일 내비게이션 토글 + 다크/라이트 모드 토글

function getEffectiveTheme() {
  try {
    const stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") return stored;
  } catch (e) {}
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("open");
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => nav.classList.remove("open"));
    });
  }

  const themeBtn = document.getElementById("theme-toggle");
  if (themeBtn) {
    let current = document.documentElement.getAttribute("data-theme") || getEffectiveTheme();
    themeBtn.textContent = current === "dark" ? "☀️" : "🌙";

    themeBtn.addEventListener("click", () => {
      current = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", current);
      themeBtn.textContent = current === "dark" ? "☀️" : "🌙";
      try {
        localStorage.setItem("theme", current);
      } catch (e) {}
    });
  }
});
