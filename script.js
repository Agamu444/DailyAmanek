document.getElementById("losujBtn").addEventListener("click", startImageLoop);

const images = [
    "https://example.com/images/image1.png",
    "https://example.com/images/image2.png",
    "https://example.com/images/image3.png",
    "https://example.com/images/image4.png",
    "https://example.com/images/image5.png"
];

function startImageLoop() {
    const imageElement = document.getElementById("image");

    let counter = 0;

    const interval = setInterval(() => {
        imageElement.src = images[counter];
        counter = (counter + 1) % images.length;
    }, 100);

    setTimeout(() => {
        clearInterval(interval);
    }, 5000); // Po 5 sekundach zatrzymuje losowanie
}
