// ナビ開閉（スマホ用）
function toggleNav() {
  const nav = document.querySelector(".nav");
  nav.classList.toggle("show");
}

// クリックしたら閉じる（スマホ）
document.addEventListener("click", (e) => {
  const nav = document.querySelector(".nav");
  const toggle = document.querySelector(".nav-toggle");

  if (!nav || !toggle) return;

  if (
    nav.classList.contains("show") &&
    !nav.contains(e.target) &&
    e.target !== toggle
  ) {
    nav.classList.remove("show");
  }
});

// スムーススクロール
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    const target = document.querySelector(targetId);

    if (!target) return;

    e.preventDefault();
    const headerOffset = 64;
    const rect = target.getBoundingClientRect();
    const offsetTop = rect.top + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });

    // スマホの時はメニューを閉じる
    const nav = document.querySelector(".nav");
    if (nav.classList.contains("show")) {
      nav.classList.remove("show");
    }
  });
});
