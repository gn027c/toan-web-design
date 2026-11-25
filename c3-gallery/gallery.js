/**
 * Vam Co River Ecology - Specimen Gallery Script
 * Author: Phan Quoc Toan (212308718)
 * Course 3: Interactivity with JavaScript (University of Michigan)
 */

function upDate(previewPic) {
    console.log("[Gallery Event] upDate triggered for previewPic:", previewPic.alt);
    console.log("[Gallery Event] Source URL:", previewPic.src);

    var displayDiv = document.getElementById("image");
    displayDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    displayDiv.textContent = previewPic.alt;
}

function unDo() {
    console.log("[Gallery Event] unDo triggered - reverting showcase to original default state");

    var displayDiv = document.getElementById("image");
    displayDiv.style.backgroundImage = "url('')";
    displayDiv.textContent = "Hover over an image below to display here.";
}
