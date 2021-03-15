var express = require("express");
var router = express.Router();
var Client = require("node-rest-client").Client;
var client = new Client();
/* GET users listing. */
router.get("/", function (req, res, next) {
    let queries = req.query;
    console.log("query: ", queries);
    let url =
        "https://data.epa.gov.tw/api/v1/aqx_p_432?api_key=efdc6239-d8be-4415-9515-fbbf072aadf4";
    const api = `${url}${/\?/.test(url) ? "&" : "?"}${new Date().getTime()}`;
    var options = {
        host: api,
        method: "GET",
    };

    client.get(url, function (data, response) {
        res.json({ ...data });
    });
});
module.exports = router;
