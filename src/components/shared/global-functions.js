// Global Function which remove spaces from string
const globalFunctions = {
    joinString: str => str.replace(/[^A-Z0-9]+/ig, "_").toLowerCase()
}

export default globalFunctions;
