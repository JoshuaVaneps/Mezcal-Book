async function newFormHandler(event) {
  event.preventDefault();

  const mezcalName = document.querySelector('#name').value;
  const mezcalStyle = document.querySelector('#style').value;
  const mezcalAgave = document.querySelector('#agave').value;
  const mezcalABV = document.querySelector('#abv').value;
  const mezcalOrigin = document.querySelector('#origin').value;
  const mezcalAroma = document.querySelector('#aroma').value;
  const mezcalPallet = document.querySelector('#pallet').value;

  const response = await fetch(`/api/addMezcal`, {
    method: 'POST',
    body: JSON.stringify({
      mezcalName,
      mezcalStyle,
      mezcalAgave,
      mezcalABV,
      mezcalOrigin,
      mezcalAroma,
      mezcalPallet,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to add Mezcal');
  }
}

document
  .querySelector('.add-mezcal-form')
  .addEventListener('submit', newFormHandler);

  // name: req.body.name,
  //     style: req.body.style,
  //     agave: req.body.agave,
  //     abv: req.body.abv,
  //     origin: req.body.origin,
  //     aroma: req.body.aroma,
  //     pallet: req.body.pallet,
  //     isManager: req.body.isManager,