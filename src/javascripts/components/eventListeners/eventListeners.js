const mouseOverBoard = () => {
  $('body').on('mouseenter', '.board-card', (e) => {
    e.target.closest('.card').classList.add('bg-secondary');
  });

  $('body').on('mouseleave', '.board-card', (e) => {
    e.target.closest('.card').classList.remove('bg-secondary');
  });
};

export default { mouseOverBoard };
