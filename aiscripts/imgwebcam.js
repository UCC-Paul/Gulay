const URL2 = 'https://teachablemachine.withgoogle.com/models/KX18a0a44/';

let modelwebcam, webcam, webcamLabel, maxPredictionsWebcam;

// Load the image model and setup the webcam
async function init() {
    const modelURL2 = URL2 + "model.json";
    const metadataURL2 = URL2 + "metadata.json";

    // load the model and metadata
    modelwebcam = await tmImage.load(modelURL2, metadataURL2);
    maxPredictionsWebcam = modelwebcam.getTotalClasses(); // Corrected variable name

    // Convenience function to setup a webcam
    const flip = true; // whether to flip the webcam
    webcam = new tmImage.Webcam(200, 200, flip); // width, height, flip
    await webcam.setup(); // request access to the webcam
    await webcam.play();
    window.requestAnimationFrame(loop);

    // append elements to the DOM
    document.getElementById("webcam-container").appendChild(webcam.canvas);
    webcamLabel = document.getElementById("webcam-prediction-label");
    for (let i = 0; i < maxPredictionsWebcam; i++) { // Corrected variable name
        webcamLabel.appendChild(document.createElement("div"));
    }
}

async function loop() {
    webcam.update(); // update the webcam frame
    await webcampredict();
    window.requestAnimationFrame(loop);
}

// run the webcam image through the image model
async function webcampredict() {
    // predict can take in an image, video, or canvas html element
    const webcamprediction = await modelwebcam.predict(webcam.canvas); // Corrected variable name
    for (let i = 0; i < maxPredictionsWebcam; i++) { // Corrected variable name
        const classPrediction =
            webcamprediction[i].className + ": " + webcamprediction[i].probability.toFixed(2);
        webcamLabel.childNodes[i].innerHTML = classPrediction;
    }
}