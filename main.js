function startclassification() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/bv2ymaxco/model.json', modelready);

}

function modelready() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        Random_Number_r = Math.floor(Math.random() * 255) + 1;
        Random_Number_g = Math.floor(Math.random() * 255) + 1;
        Random_Number_b = Math.floor(Math.random() * 255) + 1
        document.getElementById("result_label").innerHTML = 'I can hear :' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Percantage :' + (results[0].confidence * 100).toFixed(2) + "%";
        document.getElementById("result_label").style.color = "rgb(" + Random_Number_r + "," + Random_Number_g + "," + Random_Number_b + ")";
        document.getElementById("result_confidence").style.color = "rgb(" + Random_Number_r + "," + Random_Number_g + "," + Random_Number_b + ")";

        img = document.getElementById('aliens-01');
        img1 = document.getElementById('aliens-02');
        img2 = document.getElementById('aliens-03');
        img3 = document.getElementById('aliens-04');

        if (results[0].label == "Clapping") {
            img.src = '1.gif';
            img1.src = '22.png';
            img2.src = '33.png';
            img3.src = '44.jpg';
        } else if (results[0].label == "Snapping") {
            img.src = '11.webp';
            img1.src = '2.gif';
            img2.src = '33.png';
            img3.src = '44.jpg';
        } else if (results[0].label == "Hogwarts theme song") {
            img.src = '11.webp';
            img1.src = '22.png';
            img2.src = '3.gif';
            img3.src = '44.jpg';
        } else {
            img.src = '11.webp';
            img1.src = '22.png';
            img2.src = '33.png';
            img3.src = '4.gif';
        }
    }

}