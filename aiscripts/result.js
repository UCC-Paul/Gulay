const getResultBtn = document.getElementById("getresult");
const selectCity = document.getElementById("select-city");
const selectSoil = document.getElementById("select-soil");
const selectMonth = document.getElementById("select-month");
const resultH1 = document.getElementById("result");
const tomatoContainer = document.getElementById("tomatoContainer"); // Add this line
const ampalayaContainer = document.getElementById("ampalayaContainer"); // Add this line

const crops = {
  "None-Loam-April": "asdas",
  "MM-Loam-April": "Banana",
  "MM-Loam-May": "Ampalaya",
  "Home-Loam-September": "Kalabasa",
  "Baguio-Loam-September": "Strawberry",
  "Caloocan-Sandy-April": "Tomato, Ampalaya"
};

getResultBtn.addEventListener("click", () => {
  let selectedValues = {
    city: selectCity.value,
    soil: selectSoil.value,
    month: selectMonth.value
  };

  let crop = crops[selectedValues.city + "-" + selectedValues.soil + "-" + selectedValues.month];

  // Check if the crop is defined
  if (crop !== undefined) {
    resultH1.innerText = crop;

    // Show/hide elements based on the crop value
    if (crop.toLowerCase().includes("tomato")) {
      tomatoContainer.style.display = "block";
    } else {
      tomatoContainer.style.display = "none";
    }
    if (crop.toLowerCase().includes("ampalaya")) {
      ampalayaContainer.style.display = "block";
    } else {
      ampalayaContainer.style.display = "none";
    }


  } else {
    resultH1.innerText = "No data available yet :( sad";
    tomatoContainer.style.display = "none"; // Hide the container if no data is available
    ampalayaContainer.style.display = "none"; // Hide the container if no data is available
  }
});
