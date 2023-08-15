var searchQuery = document.getElementById("search-form");
const searchResultsContainer = document.getElementById("search-results");

function searchForm(event) {
  event.preventDefault();
  const userSearch = document
    .getElementById("search-input")
    .value.toLowerCase();

  // Construct the URL with query parameters
  const url = `/views?search=${encodeURIComponent(userSearch)}`;

  console.log(searchQuery);
  // Redirect to the search route
  window.location.href = url;
}

searchQuery.addEventListener("submit", searchForm);
