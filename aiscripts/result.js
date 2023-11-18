const getResultBtn = document.getElementById("getresult");
const selectCity = document.getElementById("select-city");
const selectSoil = document.getElementById("select-soil");
const selectMonth = document.getElementById("select-month");
const resultH1 = document.getElementById("result");
    
    const crops = {
        "None-Loam-April": "asdas",
        "MM-Loam-April": "Banana",
        "MM-Loam-May": "Potato",
        "Baguio-Loam-September": "Strawberry",
        "Caloocan-Sandy-April": "Tomatoes"
  
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
} else {
resultH1.innerText = "No data available yet :( sad";
}
    });