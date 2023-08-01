async function editFormHandler(event) {
  event.preventDefault();

  const mezcalName = document.querySelector("#name").value;
  const mezcalStyle = document.querySelector("#style").value;
  const mezcalAgave = document.querySelector("#agave").value;
  const mezcalAbv = document.querySelector("#abv").value;
  const mezcalOrigin = document.querySelector("#origin").value;
  const mezcalAroma = document.querySelector("#aroma").value;
  const mezcalPallet = document.querySelector("#pallet").value;

  // window.location gives us access to the URL. We then use the .split() method to access the number at the end of the URL and set that equal to id.
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  const response = await fetch(`/api/dish/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      mezcalName,
      mezcalStyle,
      mezcalAgave,
      mezcalAbv,
      mezcalOrigin,
      mezcalAroma,
      mezcalPallet,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  // What happens if the response is ok?
  // If the response is ok, that means that the dish was updated successfully.
  if (response.ok) {
    document.location.replace(`/api/mezcal/${id}`);
  } else {
    alert("Failed to edit dish");
  }
}

document
  .querySelector(".edit-dish-form")
  .addEventListener("submit", editFormHandler);
