predition_1 =""
predition_1 =""

Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});

camera = document.getElementById("camera");
Webcam.attach(camera);


function cap_button() {
    Webcam.snap(function(data_url) {
        document.getElementById("result").innerHTML = "<img id='caputure' src='" + data_url + "'>"
    })
}

console.log("ml5_version:", ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/hJQ-dBsji/model.json",model_loaded);

function model_loaded() {
    console.log('model_loaded');
}

function speak() {
    var synth = window.speechSynthesis;
    
    speak_data_1 = "first predition" + predition_1;
    speak_data_2 = "second predition" + predition_2;

    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}