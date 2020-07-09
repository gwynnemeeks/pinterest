const boardMaker = (boards) => {
  const domString = `
  <div class="card" style="width: 18rem;">
  <div class="card-body board-card" id="${boards.id}">
    <h5 class="card-title">${boards.boardName}</h5>
  </div>
  </div>
  `;

  return domString;
};

export default { boardMaker };
