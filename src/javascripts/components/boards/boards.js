const boardMaker = (boards) => {
  const domString = `
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${boards.boardName}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Will be a List of Pins</h6>
  </div>
  </div>
  `;

  return domString;
};

export default { boardMaker };
