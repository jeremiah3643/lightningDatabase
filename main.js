
function populateDB() {
    const nutterBar = snackMaker("Nutter Bar", "Cookie stick filled with peanut butter", "Peanut Butter", "Cookie wafer and peanut butter", "Chocolate")
    const swissRolls = snackMaker("Swiss Rolls", "Chocolate cake rolled around a layer of creme filling and drenched with fudge coating.", "Creme", "Chocolate Cake", "Fudge")
    const oatmealCremePies = snackMaker("Oatmeal Creme Pies", "Oatmeal cookies filled with creme", "Creme", "Oatmeal Cookie", "None")
    const littleDebbieInventory = [swissRolls, oatmealCremePies, nutterBar]
    const stringifiedSnacks = JSON.stringify(littleDebbieInventory)
    localStorage.setItem("littleDebbieInventory", stringifiedSnacks)
}