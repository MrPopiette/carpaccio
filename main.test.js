const main = require('./main');

test("helloWorld", function () {
    var displayTitle = "Hello, world !"
    expect(displayTitle).toEqual("Hello, world !")
})

test("displayDict", function () {
    var paysTVADict = []

    paysTVADict.push({
        pays: "Belgique",
        tva: 21
    });

    expect(paysTVADict).toEqual([{ pays: 'Belgique', tva: 21 }])
})