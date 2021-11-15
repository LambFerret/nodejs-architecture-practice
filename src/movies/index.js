const { buildCreateMovie } = require("./movies")
const { buildMakeSource } = require("./source")
const bcrypt = require("bcrypt")
const ipRegex = require("ip-regex")
const sanitizeHTML = require("sanitize-html")

const makeSource = buildMakeSource({ isValidIP })
const CreateMovie = buildCreateMovie({ md5, makeSource })

exports = CreateMovie

function isValidIP (ip) {
    return ipRegex({ exact: true }).test(ip)
}

async function  md5 (text) {
    return await bcrypt.hash(text)
}

function sanitize  (text)  {
    return sanitizeHTML(text, {
        allowedIframeHostnames: ['codesandbox.io', 'repl.it']
    })
}