const ipRegex = require("ip-regex")
const sanitizeHTML = require("sanitize-html")
const { buildCreateMovie } = require("./movies")
const { buildMakeSource } = require("./source")
const { buildMakeNest } = require("./Awards")

const makeNest = buildMakeNest({ sanitize })
const makeSource = buildMakeSource({ isValidIP })

exports.createMovie = buildCreateMovie({ makeSource, makeNest })


function isValidIP(ip) {
    return ipRegex({ exact: true }).test(ip)
}

function sanitize(text) {
    return sanitizeHTML(text, {
        allowedIframeHostnames: ['codesandbox.io', 'repl.it']
    })
}