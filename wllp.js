const hasSublistItems = document.querySelectorAll('.has-sublist');

hasSublistItems.forEach(item => {
  item.addEventListener('click', () => {
    item.querySelector('.sublist').classList.toggle('show');
  });
});


