document.getElementById("losujBtn").addEventListener("click", startGifLoop);

const gifs = [
    "https://media.giphy.com/media/1yK1mMi3ikV2w/giphy.gif",
    "https://media.giphy.com/media/l4Kib5p0R9t04LJYs/giphy.gif",
    "https://media.giphy.com/media/3o6Zt7gCRnWv4rLPAI/giphy.gif",
    "https://media.giphy.com/media/26uf6lBxaRiA4jlE0/giphy.gif",
    "https://media.giphy.com/media/26gs0I0ayp8aVlw7W/giphy.gif"
];

function startGifLoop() {
    const gifElement = document.getElementById("gif");

    let counter = 0;

    const interval = setInterval(() => {
        gifElement.src = gifs[counter];
        counter = (counter + 1) % gifs.length;
    }, 100);

    setTimeout(() => {
        clearInterval(interval);
    }, 5000); // Po 5 sekundach zatrzymuje losowanie
}
