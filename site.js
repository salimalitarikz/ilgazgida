fetch("nav.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("nav").innerHTML = data;
  });

// Lenis örneği oluştur
const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
