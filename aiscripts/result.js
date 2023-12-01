const getResultBtn = document.getElementById("getresult");
const selectCity = document.getElementById("select-city");
const selectSoil = document.getElementById("select-soil");
const selectMonth = document.getElementById("select-month");
const resultH1 = document.getElementById("result");
const tomatoContainer = document.getElementById("tomatoContainer"); // Add this line
const ampalayaContainer = document.getElementById("ampalayaContainer"); // Add this line
const sitaoContainer = document.getElementById("sitaoContainer"); // Add this line
const cucumberContainer = document.getElementById("cucumberContainer"); // Add this line
const chayoteContainer = document.getElementById("chayoteContainer"); // Add this line
const basilContainer = document.getElementById("basilContainer"); // Add this line
const cabbageContainer = document.getElementById("cabbageContainer"); // Add this line
const bellpepperContainer = document.getElementById("bellpepperContainer"); // Add this line
const eggplantContainer = document.getElementById("eggplantContainer"); // Add this line
const carrotContainer = document.getElementById("carrotContainer"); // Add this line
const potatoContainer = document.getElementById("potatoContainer"); // Add this line

const crops = {
  "Home-Loam-January": "Ampalaya, Tomato",
  "Home-Loam-February": "Eggplant, Sitao, Bell Pepper",
  "Home-Loam-March": "Eggplant, Sitao, Bell Pepper",
  "Home-Loam-May": "Potato, Cabbage, Ampalaya, Eggplant, Chayote, Sitao",
  "Home-Loam-June": "Cucumber, Ampalaya, Eggplant, Chayote, Sitao",
  "Home-Loam-July": "Cucumber, Ampalaya, Eggplant", 
  "Home-Loam-September": "Cucumber, Eggplant  ",
  "Home-Loam-October": "Potato, Cabbage, Cucumber, Ampalaya, Tomato, Chayote, Carrot",
  "Home-Loam-November": "Potato, Cabbage, Cucumber, Ampalaya, Tomato, Chayote, Carrot, Sitao",
  "Home-Loam-December": "Potato, Cabbage, Cucumber, Ampalaya, Tomato, Chayote, Carrot, Sitao",
  "Caloocan-Loam-December": "Potato, Cabbage, Cucumber, Ampalaya, Tomato, Chayote, Carrot, Sitao",
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
    if (crop.toLowerCase().includes("sitao")) {
      sitaoContainer.style.display = "block";
    } else {
      sitaoContainer.style.display = "none";
    }
    if (crop.toLowerCase().includes("cucumber")) {
      cucumberContainer.style.display = "block";
    } else {
      cucumberContainer.style.display = "none";
    }
    if (crop.toLowerCase().includes("chayote")) {
      chayoteContainer.style.display = "block";
    } else {
      chayoteContainer.style.display = "none";
    }
    if (crop.toLowerCase().includes("cabbage")) {
      cabbageContainer.style.display = "block";
    } else {
      cabbageContainer.style.display = "none";
    }
    if (crop.toLowerCase().includes("bellpepper")) {
      bellpepperContainer.style.display = "block";
    } else {
      bellpepperContainer.style.display = "none";
    }
    if (crop.toLowerCase().includes("eggplant")) {
      eggplantContainer.style.display = "block";
    } else {
      eggplantContainer.style.display = "none";
    }
    if (crop.toLowerCase().includes("carrot")) {
      carrotContainer.style.display = "block";
    } else {
      carrotContainer.style.display = "none";
    }
    if (crop.toLowerCase().includes("potato")) {
      potatoContainer.style.display = "block";
    } else {
      potatoContainer.style.display = "none";
    }
    if (crop.toLowerCase().includes("basil")) {
      basilContainer.style.display = "block";
    } else {
      basilContainer.style.display = "none";
    }


  } else {
    resultH1.innerText = "No data available yet :( sad";
    tomatoContainer.style.display = "none"; // Hide the container if no data is available
    ampalayaContainer.style.display = "none"; // Hide the container if no data is available
    sitaoContainer.style.display = "none"; // Hide the container if no data is available
    cucumberContainer.style.display = "none"; // Hide the container if no data is available
    chayoteContainer.style.display = "none"; // Hide the container if no data is available
    cabbageContainer.style.display = "none"; // Hide the container if no data is available
    bellpepperContainer.style.display = "none"; // Hide the container if no data is available
    carrotContainer.style.display = "none"; // Hide the container if no data is available
    potatoContainer.style.display = "none"; // Hide the container if no data is available
    basilContainer.style.display = "none"; // Hide the container if no data is available
    eggplantContainer.style.display = "none"; // Hide the container if no data is available
  }
});
