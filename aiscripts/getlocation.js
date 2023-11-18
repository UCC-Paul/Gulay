let locationButton = document.getElementById("get-location");
let locationDiv = document.getElementById("location-details");
let locationSelect = document.getElementById("select-city");
let clearLocationButton = document.getElementById("clear-location");

locationButton.addEventListener("click", () => {

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showLocation, checkError);
  } else {
    locationDiv.innerText = "The browser does not support geolocation";
  }
});

clearLocationButton.addEventListener("click", () => {
  locationDiv.innerText = "";
  locationSelect.innerHTML = `
    <option selected="selected" disabled hidden>Select City or Plant at Home</option>
    <option value="Backyard">Plant at Home</option>
    <option value="Baguio">Baguio City</option>
    <option value="MM">Metro Manila</option>
    <option value="Mindanao">Mindanao</option>
    <option value="Visayas">Visayas</option>
    <option value="Cebu">Cebu City</option>
    <option value="Cotabato">Cotabato City</option>
    <option value="Caloocan">Caloocan City</option>
    `;
});

const checkError = (error) => {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      locationDiv.innerText = "Please allow access to location";
      break;
    case error.POSITION_UNAVAILABLE:

      locationDiv.innerText = "Location Information unavailable";
      break;
    case error.TIMEOUT:
      locationDiv.innerText = "The request to get user location timed out";
  }
};

const showLocation = async (position) => {

  let response = await fetch(
    `https://nominatim.openstreetmap.org/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`
  );

  let data = await response.json();
  let city = data.address.city;
  let region = data.address.region;

  if (city && region) {
    locationDiv.innerText = `Located at ${city}, ${region}`;

    locationSelect.innerHTML = `
          <option value="${city}">${city}</option>
      
      `;
  } else {
    locationDiv.innerText = "Location data incomplete";
  }
};