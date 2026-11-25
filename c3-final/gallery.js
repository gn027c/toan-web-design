/**
 * Accessible Interactive Photo Gallery Script
 * Author: Phan Quoc Toan (212308718)
 * Course 3: Interactivity with JavaScript - Final Project
 */

function upDate(previewPic) {
    console.log("[Accessibility Event] upDate triggered for preview:", previewPic.alt);
    console.log("[Accessibility Event] Image URL:", previewPic.src);

    var displayDiv = document.getElementById("image");
    displayDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    displayDiv.textContent = previewPic.alt;
}

function unDo() {
    console.log("[Accessibility Event] unDo triggered - reverting display area");

    var displayDiv = document.getElementById("image");
    displayDiv.style.backgroundImage = "url('')";
    displayDiv.textContent = "Hover over or tab to an image below to display here.";
}

function initializeGallery() {
    console.log("[Page Load] initializeGallery executing - configuring accessibility tabindex attributes...");

    var images = document.querySelectorAll(".preview");
    console.log("[Page Load] Total preview images detected:", images.length);

    for (var i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
        console.log("[Page Load] Added tabindex='0' to item " + (i + 1) + ":", images[i].alt);
    }

    console.log("[Page Load] Accessibility initialization complete. All images are fully keyboard navigable via Tab key.");
}
