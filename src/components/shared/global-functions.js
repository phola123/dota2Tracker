// Global Function which remove spaces from string
const globalFunctions = {
    joinString: str => {
        const newString = str.replace(/[^A-Z0-9]+/ig, "_").toLowerCase();
        return newString;
    }
}

export default globalFunctions;
