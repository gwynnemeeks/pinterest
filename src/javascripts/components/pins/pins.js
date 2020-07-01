const pinMaker = (pins) => {
  const domString = `
  <div class="card" style="width: 18rem;">
  <img src="${pins.imageUrl}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${pins.pinName}</h5>
    </div>
    </div>
  `;

  return domString;
};

export default { pinMaker };
