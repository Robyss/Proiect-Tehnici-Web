const express = require("express");
const app = express();

const port = 8080;

const errorJSON = require("./utils/errors.json");
// const {error_403, error_404} = errorJSON;    // Nu inteleg de ce nu merge
const error_403 = errorJSON.error403;
const error_404 = errorJSON.error404;



console.log(error_403)

app.set("view engine", "ejs");
console.log("Cale fisier: " + __dirname);
app.use("/resources", express.static("resources"));


// Main Page
app.get(["/", "/index.html", "/index", "/home"], function (req, res) {
    return res.render("pages/index.ejs", {
        ip: req.ip
    });
});

// Explore Page
app.get("/explore", function(req, res) {
    res.render('pages/explore.ejs', {
        cale_img: "resources/images/closed-avalanche-danger.jpg",
        ip: req.ip
    });
});

// Eroare 403
app.get("/*.ejs", function (req, res) {
    return res.render("pages/error.ejs", error_403);
});

// Eroare 404
app.get("/:page", (req, res) => {
    const fs = require("fs");
    const { page } = req.params;

    if (fs.existsSync(`./views/pages/${page}.ejs`)) {
        return res.render(`pages/${page}`);
    }
    return res.status(404).render("pages/error.ejs", error_404);
});


app.listen(port);
console.log("Serverul a pornit!");