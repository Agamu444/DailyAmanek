document.getElementById("losujBtn").addEventListener("click", startImageLoop);

const images = [
    "https://cdn.discordapp.com/attachments/1286305822195843136/1342956151654060062/9k.png?ex=67bb84e1&is=67ba3361&hm=e0295c7cf46c3227985d28c28f3bd7ddb4f1c282f9a4ad980d221ba8ed7ab839&",
    "https://cdn.discordapp.com/attachments/1286305822195843136/1342956151008006276/IMG_20241122_194502.jpg?ex=67bb84e1&is=67ba3361&hm=9ecd99c037e9f42c8667264dc09f411e6c0e58e201222f68235fb3ccf541c029&",
    "https://cdn.discordapp.com/attachments/1286305822195843136/1342956152379670569/20240531_194730.jpg?ex=67bb84e1&is=67ba3361&hm=903bc8ab09163b073c278e91de5d98710970611192b32b2afc6182791deaa3ce&",
    "https://cdn.discordapp.com/attachments/1286305822195843136/1342956152811421769/476578075_1016244300351090_5372125992874365293_n.jpg?ex=67bb84e1&is=67ba3361&hm=cb0c9ad46c56863668768034b1ae341b2ec91070e9acbc779ea179c3ff911f4b&",
    "https://cdn.discordapp.com/attachments/1286305822195843136/1342956153285378171/IMG_4767.jpg?ex=67bb84e1&is=67ba3361&hm=cc2e5d5cd7ef620f6ceadce325a5527f9c56e6e2f256b092b0a384bcb62afcd4&",
    "https://cdn.discordapp.com/attachments/1286305822195843136/1342956153835098215/IMG_4768.jpg?ex=67bb84e1&is=67ba3361&hm=c202972295e2f99863fb5336e6244aa52e614092fe0420a4a3d5d7ed6d2de873&",
    "https://cdn.discordapp.com/attachments/1286305822195843136/1342956154250072254/IMG_20240730_192145.jpg?ex=67bb84e2&is=67ba3362&hm=32ab383aa51609f3f9d75f0a8a41dd387955354c9f0ad1e46130b26bb10d2cc8&",
    "https://cdn.discordapp.com/attachments/1286305822195843136/1342956154963361924/IMG_20241110_111046.jpg?ex=67bb84e2&is=67ba3362&hm=392b847c0f321a2bcdeeacf7b6adaba85e068606ea794b7a7ba6c203646cb28e&",
    "https://cdn.discordapp.com/attachments/1286305822195843136/1342956161715933204/IMG20241109195732.jpg?ex=67bb84e3&is=67ba3363&hm=4ecb409c71670b1213379e54b35314220e156ca4df60bedd3a83b13d10f5cdec&",
    "https://cdn.discordapp.com/attachments/1286305822195843136/1342956162311655424/kasti.png?ex=67bb84e4&is=67ba3364&hm=61febc69bc784348ca13f3a09d4f9b2342995f53747ef4758b8728936f5d4172&",
    "https://cdn.discordapp.com/attachments/1286305822195843136/1342956162722824283/Messenger_creation_B977F958-532D-4D0C-8BA5-A9912D571D0D.png?ex=67bb84e4&is=67ba3364&hm=1e3e0cbf8c1c5007e43fa9cf90e70d403420ef1e12d640bcb296741b4a562223&",
    "https://cdn.discordapp.com/attachments/1286305822195843136/1342956163221688522/Messenger_creation_BFE10C1D-FD92-47C5-AB79-8CA05617214B.jpg?ex=67bb84e4&is=67ba3364&hm=c980d65d2d5532a3453dcd0a19a8ec026b88dbfca302535b9c41734f7cdf4916&",
    "https://cdn.discordapp.com/attachments/1286305822195843136/1342956163788050523/Messenger_creation_E0B0D47F-99FC-4110-B33F-BDB4282C17D6.jpg?ex=67bb84e4&is=67ba3364&hm=6f1100f7057dec6a67a3d7f1c9dc3adb0942d0860a4904ae55f75cb85556a0e3&",
    "https://cdn.discordapp.com/attachments/1286305822195843136/1342956164463202418/Picsart_24-11-18_19-01-06-977.jpg?ex=67bb84e4&is=67ba3364&hm=9a6bbb93b349992f224a8ed5666539657454448ea12b3758e5be13cafae4a274&",
    "https://cdn.discordapp.com/attachments/1286305822195843136/1342956165125902376/Snapchat-1272949012.jpg?ex=67bb84e4&is=67ba3364&hm=0997a85390b99ade8f19702a7e0595467bc0c474def2bb50acd6c2ca2817617e&",
    "https://cdn.discordapp.com/attachments/1286305822195843136/1342956165633671178/Zrzut_ekranu_2024-05-27_180948.png?ex=67bb84e4&is=67ba3364&hm=0b6fcb0f251eee228dc1e4df455ff6cd1d33239cbc789f45735f0042472f9b57&",
];

function startImageLoop() {
    const imageElement = document.getElementById("image");

    let counter = 0;

    // Generujemy losowy czas trwania (w milisekundach) między 2 a 10 sekund
    const randomDuration = Math.floor(Math.random() * 8000) + 2000; // Losowy czas między 2000 a 10000ms (2-10 sekund)

    const interval = setInterval(() => {
        imageElement.src = images[counter];
        counter = (counter + 1) % images.length; // Wraca do początku, gdy dojdzie do końca tablicy
    }, 100); // Zmiana obrazu co 100ms

    setTimeout(() => {
        clearInterval(interval); // Zatrzymuje interwał po losowym czasie
    }, randomDuration); // Czas trwania losowania jest teraz losowy
}
