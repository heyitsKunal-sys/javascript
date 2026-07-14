app.use((req, res, next) => {

    console.log("First");

    next();

});

app.use((req, res, next) => {

    console.log("Second");

    next();

});

app.get("/", (req, res) => {

    console.log("Third");

    res.send("Done");

});