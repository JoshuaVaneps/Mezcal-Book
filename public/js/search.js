var searchForm = document.getElementById("search-form"); // Corrected ID name
var searchInput = document.getElementById('search-input');

searchForm.addEventListener('submit', function(event) { // Corrected parentheses
  event.preventDefault(); // Prevent form submission

  const searchInput = document.getElementById('search-input').value.toLowerCase();

  
  fetch('mezcals.json')
    .then(response => response.json())
    .then(data => {
      const foundMezcal = data.find(mezcal => mezcal.name.toLowerCase() === searchInput);
      if (foundMezcal) {
        document.getElementById('result').textContent = `Name: ${foundMezcal.name}, Agave: ${foundMezcal.agave}, ABV: ${foundMezcal.abv}, Origin: ${foundMezcal.origin}, Aroma: ${foundMezcal.aroma}, Pallet: ${foundMezcal.pallet}`;
      } else {
        document.getElementById('result').textContent = 'Mezcal not found';
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
});

