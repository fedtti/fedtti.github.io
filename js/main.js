/**
 * Replace WebP with JPEG if unsupported by users’ browser
 */
Modernizr.on('webp', support => {
  if (support === false) {
    const IMAGE = document.getElementsByClassName('site__sidebar__picture')[0];
    let source = IMAGE.getAttribute('src');
    source = source.replace(/webp/, 'jpg');
    IMAGE.setAttribute('src', source);
    let sourceSet = IMAGE.getAttribute('srcset');
    sourceSet = sourceSet.replace(/webp/g, 'jpg');
    IMAGE.setAttribute('srcset', sourceSet);
  }
});
