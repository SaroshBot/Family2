//https://teachablemachine.withgoogle.com/models/OWIiBsq_J/
Webcam.set({
    width: 350,
    height: 300,
    image_format:'png',
    png_quality: 90
})
camera = document.getElementById('camera');

Webcam.attach('camera')

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById('result').innerHTML='<img src="'+data_uri+'" id="capture_image"> '
    })
}

console.log("ml5.version",ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/OWIiBsq_J/model.json', modelLoaded)

function modelLoaded()
{
    console.log("Model is Loaded!")
}
function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="capture_image" src="'+data_uri+'">'
    })
}

function check()
{
    img= document.getElementById("capture_image");
    classifier.classify(img,gotResults)
}

function gotResults(error, results)
{
    if(error){
        console.error(error)
    }
    else{
        console.log(results)
        document.getElementById('result_member_name').innerHTML= results[0].label;
        document.getElementById('result_object_accuracy').innerHTML= (results[0].confidence*100).toFixed(2)+'%';
    } 
}



