var dog = 0;
var cat =0;
var lion =0;
var cow =0;

function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/YMVEPktBk/',modelready);
}

function modelready(){
    classifier.classify(gotResults);
}
var dog=0
var cat=0
var lion=0
var cow=0
function gotResult(error, results){
if(error){
    console.error(error);
}
else{
    console.log(results);
     random_number_r = Math.floor(Math.random()*255) + 1;
     random_number_g = Math.floor(Math.random()*255) + 1;
     random_number_b = Math.floor(Math.random()*255) + 1;

     document.getElementById("detected").innerHTML = "Detected Dog - "+dog+" Detected cat -"+cat+" Detected lion - "+lion+" Detected cow"+cow+
     document.getElementById("detected").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

     document.getElementById("animal_noises").innerHTML = "Detected voice is of - " +results[0].label;
     document.getElementById("animal_noises").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
}
}