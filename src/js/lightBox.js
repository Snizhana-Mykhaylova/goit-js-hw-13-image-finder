import * as basicLightbox from 'basiclightbox';
let activIndex = 0;

function showOriginalSize(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const activImage = event.target.dataset;
  const instance = basicLightbox.create(`
    <img src="${activImage.source}" width="800" height="600">
`);

  instance.show();
  activIndex = activImage.idx;
}

function ArrowLeft(event) {
  if (event.key === 'ArrowLeft') {
    if (activIndex > 0 && activIndex <= gallery.length - 1) {
      activIndex = Number(activIndex) - 1;
      lightboxImageRef.src = gallery[activIndex].original;
    }
    return;
  }
}

function ArrowRight(event) {
  if (event.key === 'ArrowRight') {
    if (activIndex >= 0 && activIndex < gallery.length - 1) {
      activIndex = Number(activIndex) + 1;
      lightboxImageRef.src = gallery[activIndex].original;
    }
    return;
  }
}
export { showOriginalSize, ArrowLeft, ArrowRight };
