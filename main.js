var displayTitle = "Hello, world !"

const helloWorld = x => console.log(x)
const displayDict = paysTVADict => console.log(paysTVADict)

var paysTVADict = []

paysTVADict.push({
    pays: "Belgique",
    tva: 21
});

paysTVADict.push({
    pays: "Bulgarie",
    tva: 20
});

paysTVADict.push({
    pays: "Danemark",
    tva: 25
});

paysTVADict.push({
    pays: "Allemagne",
    tva: 19
});

paysTVADict.push({
    pays: "Estonie",
    tva: 20
});

paysTVADict.push({
    pays: "Espagne",
    tva: 21
});

paysTVADict.push({
    pays: "France",
    tva: 20
});

paysTVADict.push({
    pays: "France",
    tva: 20
});

paysTVADict.push({
    pays: "République Tchèque",
    tva: 21
});

paysTVADict.push({
    pays: "Grèce",
    tva: 23
});



helloWorld(displayTitle)
displayDict(paysTVADict)
