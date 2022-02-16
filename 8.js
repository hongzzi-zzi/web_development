var i = 0;
var myIDtxt = "@h0ngzzi_"

function printID() {
    var myID = document.getElementById("myID");
    myID.innerText += myIDtxt[i++];
    if (i > myIDtxt.length) {
        i = 0;
        myID.innerText = "";
    }
    var colorcode = "#" + Math.round(Math.random() * 0xffffff).toString(16);
    myID.style.color = colorcode;
    console.log(myID);
}
