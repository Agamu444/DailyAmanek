document.getElementById("losujBtn").addEventListener("click", startImageLoop);

const images = [
    "https://cdn.discordapp.com/attachments/1286305822195843136/1342956151654060062/9k.png?ex=67bb84e1&is=67ba3361&hm=e0295c7cf46c3227985d28c28f3bd7ddb4f1c282f9a4ad980d221ba8ed7ab839&",
    "https://cdn.discordapp.com/attachments/1286305822195843136/1342956151008006276/IMG_20241122_194502.jpg?ex=67bb84e1&is=67ba3361&hm=9ecd99c037e9f42c8667264dc09f411e6c0e58e201222f68235fb3ccf541c029&",
    "https://cdn.discordapp.com/attachments/1286305822195843136/1342956152379670569/20240531_194730.jpg?ex=67bb84e1&is=67ba3361&hm=903bc8ab09163b073c278e91de5d98710970611192b32b2afc6182791deaa3ce&",
    "https://cdn.discordapp.com/attachments/1286305822195843136/1342956152811421769/476578075_1016244300351090_5372125992874365293_n.jpg?ex=67bb84e1&is=67ba3361&hm=cb0c9ad46c56863668768034b1ae341b2ec91070e9acbc779ea179c3ff911f4b&",
    "https://cdn.discordapp.com/attachments/1286305822195843136/1342956153285378171/IMG_4767.jpg?ex=67bb84e1&is=67ba3361&hm=cc2e5d5cd7ef620f6ceadce325a5527f9c56e6e2f256b092b0a384bcb62afcd4&"
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
