exports.buildMakeNest = ({ sanitize }) => {
    return function makeNest({ wins, nominations, text } = {}) {
        if (!wins && !nominations) {
            throw new Error("Write only nominated Movies")
        }
        let sanitizedText = sanitize(text).trim()
        if (sanitizedText.length < 1) {
            throw new Error("Text is empty due to usable text")
        }
        return Object.freeze({
            getWins: () => wins,
            getNominations: () => nominations,
            getText: () => text,
        })
    }
}