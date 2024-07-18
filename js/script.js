document.addEventListener("DOMContentLoaded", function() {
    const imageGallery = document.querySelector(".image-gallery");
    const images = ["boat1.jpg", "boat2.jpg", "boat3.jpg", "boat4.jpg"]; // Add all your image filenames here

    images.forEach(image => {
        const imgElement = document.createElement("img");
        imgElement.src = `../images/${image}`;
        imgElement.alt = `Royal Boat Marine Image`;
        imageGallery.appendChild(imgElement);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // JavaScript code for interactivity if needed
});
