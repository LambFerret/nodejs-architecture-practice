exports.buildMakeSource = ({ isValidIP }) => {
    return function makeSource({ ip, browser, referrer } = {}) {
        console.log(`ip is ${ip}`);
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