export default function windowScroll() {
  console.log(document.documentElement.offsetHeight);
  window.scrollTo({
    top: document.documentElement.offsetHeight,
    behavior: 'smooth',
  });
}
