const URL = 'https://teachablemachine.withgoogle.com/models/KX18a0a44/';

    let modelupload, labelContainer, maxPredictions;

    async function initupload() {
        const modelURL = URL + 'model.json';
        const metadataURL = URL + 'metadata.json';

        // load the model and metadata
        modelupload = await tmImage.load(modelURL, metadataURL);
        maxPredictions = modelupload.getTotalClasses();

        labelContainer = document.getElementById('recognition-label');
        for (let i = 0; i < maxPredictions; i++) {
            // and class labels
            labelContainer.appendChild(document.createElement('div'));
        }
    }

    async function predict() {
        var image = document.getElementById('imagePreview');
        const prediction = await modelupload.predict(image, false);
    
        let maxProbability = -1;
        let maxIndex = -1;
    
        // Find the prediction with the highest probability
        for (let i = 0; i < maxPredictions; i++) {
            if (prediction[i].probability > maxProbability) {
                maxProbability = prediction[i].probability;
                maxIndex = i;
            }
        }
    
        if (maxIndex !== -1) {
            const classPrediction = prediction[maxIndex].className;

            const selectSoil = document.getElementById('select-soil');
            for (let i = 0; i < selectSoil.options.length; i++) {
                if (selectSoil.options[i].text === classPrediction) {
                    selectSoil.selectedIndex = i;
                    break;
                }
            }

        const classProb = prediction[maxIndex].probability.toFixed(2);
        labelContainer.innerHTML = `AI Detected that your soil is: ${classPrediction}`;
        }
    }

    function clearImageAndSelect() {
    // Clear the uploaded image
    document.getElementById('imagePreview').src = '';
    labelContainer.innerHTML = '';

    // Clear the selection in 'Select Soil Type' dropdown
    document.getElementById('select-soil').selectedIndex = -1;
  }

  // Event listener for the combined 'Clear Image and Select' button
  document.getElementById('clear-image-and-select').addEventListener('click', clearImageAndSelect);
    
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#imagePreview').attr('src', e.target.result);
                // $('#imagePreview').css('background-image', 'url(' + e.target.result + ')');
                $('#imagePreview').hide();
                $('#imagePreview').fadeIn(650);
            };
            reader.readAsDataURL(input.files[0]);
            initupload().then(() => {

             predict();
            });
        }
    }

$('#imageUpload').change(function () {
    readURL(this);
});