/* ================================================================
   APEX F1 — script.js
   Isi:
   1. GSAP Plugin Registration
   2. Helper: makeST()
   3. Hero entrance animation
   4. Social Proof scroll animation
   5. Feature 1 scroll animation
   6. Feature 2 scroll animation
   7. Testimonial 1 scroll animation
   8. Full-width Testimonial scroll animation
   9. Card Section scroll animation
   10. Footer scroll animation
   11. Parallax speed-lines di hero
   12. Mobile navbar toggle
   13. Navbar shadow on scroll
================================================================ */


/* ================================================================
   1. Daftarkan plugin ScrollTrigger ke GSAP
================================================================ */
gsap.registerPlugin(ScrollTrigger);


/* ================================================================
   2. HELPER — makeST(trigger, extraConfig)
   Membuat konfigurasi ScrollTrigger scrub standar.

   scrub: 1.5 → animasi punya "inersia" 1.5 detik di belakang posisi
   scroll, sehingga terasa smooth saat scroll naik maupun turun.
   Artinya: saat scroll ke bawah → elemen bergerak menuju posisi akhir,
   saat scroll ke atas → elemen mundur kembali ke posisi awal.
================================================================ */
function makeST(trigger, extraConfig = {}) {
  return {
    trigger,
    start: "top 88%",   /* mulai saat elemen masuk 88% dari atas viewport */
    end:   "top 30%",   /* selesai saat elemen berada di 30% dari atas viewport */
    scrub: 1.5,         /* ikuti posisi scroll — maju & mundur */
    ...extraConfig,
  };
}


/* ================================================================
   3. ② HERO — Entrance animation
   Tidak menggunakan scrub karena hero sudah visible saat halaman
   pertama kali dimuat. Animasi langsung berjalan sekali dengan easing.
================================================================ */
const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });

heroTl
  .from(".hero__season-badge",  { opacity: 0, y: -16, duration: 0.6 })
  .from(".hero__headline",      { opacity: 0, y: 50,  duration: 0.8 }, "-=0.3")
  .from(".hero__sub",           { opacity: 0, y: 30,  duration: 0.6 }, "-=0.4")
  .from(".hero__actions .btn",  { opacity: 0, y: 20,  duration: 0.5, stagger: 0.12 }, "-=0.3")
  .from(".dashboard-mockup",    { opacity: 0, x: 70,  duration: 0.9, ease: "power2.out" }, "-=0.7")
  .from(".hero-geo",            { opacity: 0, scale: 0.6, duration: 0.5, stagger: 0.15, ease: "back.out(2)" }, "-=0.4");


/* ================================================================
   4. ③ SOCIAL PROOF — Label/judul fade up, logo pills stagger
================================================================ */
gsap.from(".social-proof__label, .social-proof__title, .social-proof__sub", {
  scrollTrigger: makeST(".social-proof__title"),
  opacity: 0,
  y: 30,
  stagger: 0.15,
});

gsap.from(".logo-pill", {
  scrollTrigger: makeST(".social-proof__logos", { end: "top 15%" }),
  opacity: 0,
  y: 40,
  stagger: 0.1,
});


/* ================================================================
   5. ④ FEATURE 1 — Teks dari kiri, komposisi geometri dari kanan
================================================================ */
gsap.from(".features .feature__title, .features .label-tag, .features .red-rule", {
  scrollTrigger: makeST(".features .features__grid"),
  opacity: 0,
  x: -60,
  stagger: 0.12,
});

gsap.from(".features .feature__desc", {
  scrollTrigger: makeST(".features .feature__desc"),
  opacity: 0,
  x: -40,
});

gsap.from(".features .feature__bullets li", {
  scrollTrigger: makeST(".features .feature__bullets", { end: "top 20%" }),
  opacity: 0,
  x: -30,
  stagger: 0.12,
});

/* Lingkaran "ban" dari kanan */
gsap.from(".geo-f1__wheel, .geo-f1__wheel-inner", {
  scrollTrigger: makeST(".geo-f1"),
  opacity: 0,
  x: 80,
  scale: 0.7,
  stagger: 0.15,
});

/* Speed lines dari kiri */
gsap.from(".geo-f1__line", {
  scrollTrigger: makeST(".geo-f1"),
  opacity: 0,
  x: -60,
  stagger: 0.1,
});

/* Bendera kotak-kotak rotasi dari bawah */
gsap.from(".geo-f1__flag", {
  scrollTrigger: makeST(".geo-f1", { start: "top 75%" }),
  opacity: 0,
  y: 40,
  rotation: -10,
});

/* Dot merah pop in */
gsap.from(".geo-f1__dot", {
  scrollTrigger: makeST(".geo-f1"),
  opacity: 0,
  scale: 0,
  ease: "back.out(3)",
});


/* ================================================================
   6. ④b FEATURE 2 — Gambar besar dari kiri, teks dari kanan
================================================================ */
const feat2Section = document.querySelector(".features__grid--reversed");

gsap.from(feat2Section.querySelector(".feature__big-img"), {
  scrollTrigger: makeST(feat2Section),
  opacity: 0,
  x: -70,
});

gsap.from([
  feat2Section.querySelector(".label-tag"),
  feat2Section.querySelector(".red-rule"),
  feat2Section.querySelector(".feature__title"),
  feat2Section.querySelector(".feature__desc"),
  feat2Section.querySelector(".btn"),
], {
  scrollTrigger: makeST(feat2Section),
  opacity: 0,
  x: 60,
  stagger: 0.12,
});


/* ================================================================
   7. ⑤ TESTIMONIAL 1 — Teks dari kiri, visual dari kanan
================================================================ */
const t1Grid = document.querySelector(".testimonial-1__grid");

gsap.from([
  t1Grid.querySelector(".label-tag"),
  t1Grid.querySelector(".red-rule"),
  t1Grid.querySelector(".testimonial-1__title"),
  t1Grid.querySelector(".testimonial-1__desc"),
  t1Grid.querySelector(".testimonial-1__quote"),
  t1Grid.querySelector(".author-chip"),
], {
  scrollTrigger: makeST(t1Grid),
  opacity: 0,
  x: -50,
  stagger: 0.1,
});

gsap.from(".testimonial-1__visual", {
  scrollTrigger: makeST(".testimonial-1__visual"),
  opacity: 0,
  x: 60,
  scale: 0.95,
});


/* ================================================================
   8. ⑥ FULL-WIDTH TESTIMONIAL — Quote zoom in + nama fade up
================================================================ */
gsap.from(".testimonial-full__quote", {
  scrollTrigger: makeST(".testimonial-full__quote", { end: "top 20%" }),
  opacity: 0,
  scale: 0.88,
  y: 40,
});

gsap.from([
  ".testimonial-full__avatar",
  ".testimonial-full__name",
  ".testimonial-full__title-role",
], {
  scrollTrigger: makeST(".testimonial-full__avatar"),
  opacity: 0,
  y: 24,
  stagger: 0.12,
});


/* ================================================================
   9. ⑦ CARDS — Tiap kartu dengan arah masuk berbeda
      Card 1: dari kiri-bawah
      Card 2: lurus dari bawah
      Card 3: dari kanan-bawah
================================================================ */
const cards = document.querySelectorAll(".card");

gsap.from(cards[0], {
  scrollTrigger: makeST(".cards-grid", { end: "top 15%" }),
  opacity: 0,
  x: -50,
  y: 60,
});

gsap.from(cards[1], {
  scrollTrigger: makeST(".cards-grid", { start: "top 90%", end: "top 15%" }),
  opacity: 0,
  y: 80,
});

gsap.from(cards[2], {
  scrollTrigger: makeST(".cards-grid", { end: "top 15%" }),
  opacity: 0,
  x: 50,
  y: 60,
});

/* Header cards section */
gsap.from([".cards-section__title", ".cards-section .label-tag", ".cards-section__sub"], {
  scrollTrigger: makeST(".cards-section__header"),
  opacity: 0,
  y: 36,
  stagger: 0.14,
});


/* ================================================================
   10. ⑧ FOOTER — Brand & CTA dari kiri, nav dari kanan
================================================================ */
gsap.from([
  ".footer__brand",
  ".footer__blog-label",
  ".footer__blog-title",
  ".footer__blog-snippet",
  ".footer .btn",
], {
  scrollTrigger: makeST(".footer__grid", { start: "top 90%", end: "top 40%" }),
  opacity: 0,
  x: -40,
  stagger: 0.1,
});

gsap.from(".footer__nav-col", {
  scrollTrigger: makeST(".footer__nav", { start: "top 90%", end: "top 40%" }),
  opacity: 0,
  x: 40,
  stagger: 0.15,
});

gsap.from(".footer__bottom", {
  scrollTrigger: makeST(".footer__bottom", { start: "top 98%", end: "top 80%" }),
  opacity: 0,
  y: 16,
});


/* ================================================================
   11. PARALLAX — Speed-lines hero bergerak lebih lambat dari scroll
   Memberikan kesan kedalaman (depth) pada background hero.
================================================================ */
gsap.to(".hero::before", {
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true,
  },
  yPercent: -20,
});


/* ================================================================
   12. MOBILE NAVBAR TOGGLE — Hamburger buka/tutup menu
================================================================ */
const hamburger = document.getElementById("hamburger");
const navbar    = document.getElementById("navbar");

hamburger.addEventListener("click", () => navbar.classList.toggle("open"));

/* Tutup menu saat klik di luar area navbar */
document.addEventListener("click", (e) => {
  if (!navbar.contains(e.target)) navbar.classList.remove("open");
});


/* ================================================================
   13. NAVBAR SHADOW ON SCROLL
   Menambahkan bayangan di bawah navbar saat halaman discroll.
================================================================ */
window.addEventListener("scroll", () => {
  navbar.style.boxShadow = window.scrollY > 10
    ? "0 4px 24px rgba(0,0,0,0.5)"
    : "none";
}, { passive: true });