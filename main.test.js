const main = require('./main');

test("helloWorld", function () {
    var displayTitle = "Hello, world !"
    expect(displayTitle).toEqual("Hello, world !")
})