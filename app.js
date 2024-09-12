const canvas = document.getElementById("canvas");
const kirb = canvas.getContext("2d");
const eye1 = canvas.getContext("2d");
const eye2 = canvas.getContext("2d");
const mouth = canvas.getContext("2d");
const hand1 = canvas.getContext("2d");
const hand2 = canvas.getContext("2d");
const boot1 = canvas.getContext("2d");
const boot2 = canvas.getContext("2d");

hand1.beginPath();
hand1.ellipse(50, 70, 25, 15, Math.PI / 1.5, 0, 2 * Math.PI);
hand1.fillStyle = "pink"
hand1.stroke();
hand1.fill()

hand2.beginPath();
hand2.ellipse(140, 40, 25, 15, Math.PI / 1.5, 0, 2 * Math.PI);
hand2.fillStyle = "pink"
hand2.stroke();
hand2.fill()

boot2.beginPath();
boot2.ellipse(125, 120, 17, 25, Math.PI / 2, 0, 2 * Math.PI);
boot2.fillStyle = "red"
boot2.stroke();
boot2.fill()

kirb.beginPath();
kirb.arc(100, 75, 50, 0, 2 * Math.PI);
kirb.fillStyle = "pink" 
kirb.fill()
kirb.stroke();

eye1.beginPath();
eye1.ellipse(90, 50, 10, 3, Math.PI / 1.95, 0, 2 * Math.PI);
eye1.fillStyle = "darkblue"
eye1.stroke();
eye1.fill()

eye2.beginPath();
eye2.ellipse(110, 50, 10, 3, Math.PI / 2.05, 0, 2 * Math.PI);
eye2.fillStyle = "darkblue"
eye2.stroke();
eye2.fill()

mouth.beginPath();
mouth.arc(100, 65, 12, 0, 1 * Math.PI);
mouth.fillStyle = "red" 
mouth.fill()


boot1.beginPath();
boot1.ellipse(60, 110, 17, 25, Math.PI / 1.25, 0, 2 * Math.PI);
boot1.fillStyle = "red"
boot1.stroke();
boot1.fill()