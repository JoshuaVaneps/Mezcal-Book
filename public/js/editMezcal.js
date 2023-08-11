async function editFormHandler(event) {
  event.preventDefault();

  const mezcalBrand = document.querySelector("#brand").value;
  const mezcalName = document.querySelector("#name").value;
  const mezcalStyle = document.querySelector("#style").value;
  const mezcalAgave = document.querySelector("#agave").value;
  const mezcalAbv = document.querySelector("#abv").value;
  const mezcalOrigin = document.querySelector("#origin").value;
  const mezcalAroma = document.querySelector("#aroma").value;
  const mezcalPallet = document.querySelector("#pallet").value;
  const isManager = document.querySelector("#isManager").value;

  // window.location gives us access to the URL. We then use the .split() method to access the number at the end of the URL and set that equal to id.
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  const response = await fetch(`/api/mezcal/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      brand: mezcalBrand,
      name: mezcalName,
      style: mezcalStyle,
      agave: mezcalAgave,
      abv: parseInt(mezcalAbv),
      origin: mezcalOrigin,
      aroma: mezcalAroma,
      pallet: mezcalPallet,
      isManager,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace(`/edit-mezcal/${id}`);
  } else {
    alert("Failed to edit mezcal");
  }
}

async function deleteFormHandler(event) {
  event.preventDefault();

  const isManager = document.querySelector("#isManager").value;

  // window.location gives us access to the URL. We then use the .split() method to access the number at the end of the URL and set that equal to id.
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  const response = await fetch(`/api/mezcal/${id}`, {
    method: "DELETE",
    body: JSON.stringify({
      isManager,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    alert("Mezcal deleted successfully");
    document.location.replace(`/`);
  } else {
    alert("Failed to delete mezcal");
  }
}

document
  .querySelector(".edit-mezcal-form")
  .addEventListener("submit", editFormHandler);

document
  .querySelector("#delete-mezcal-btn")
  .addEventListener("click", deleteFormHandler);
