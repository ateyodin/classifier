// Load File Event
// Load File Event
function loadFile(event){
  uploaded.src = URL.createObjectURL(event.target.files[0]);
}

// Function that gives the results
async function classifier(){
  console.log("Classify in progress...");
  const result = await net.classify(uploaded);
  console.log("Classification completed");
  document.getElementById('answer').innerText = `
    Prediction: \n${result[0].className}\n
    Probability: \n${result[0].probability}\n
  `
}

async function app(){
  // load the model
  console.log('Loading mobilenet...');
  net = await mobilenet.load();
  console.log('Sucessfully loaded model');
  // make a prediction through the model on the uploaded img upon click
  document.getElementById('classify').addEventListener("click", classifier);
}

app();
