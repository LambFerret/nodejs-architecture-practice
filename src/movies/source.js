exports.buildMakeSource = ({ isValidIP }) => {
    return function buildMakeSource({ ip, browser, referrer } = {}) {
        if (!ip) {
            throw new Error("Movie source must contain an IP.")
        }
        if (!isValidIP(ip)) {
            throw new RangeError("Movie source's IP must vaild")
        }
        return Object.freeze({
            getIP: ()=> ip,
            getBrowser: ()=> browser,
            getReferrer: ()=> referrer,
        })
    }
}