let p = document.getElementById("p")
let container1 = document.querySelector(".container")
let container2 = document.querySelector(".container2")
let findSelector = () => {
    let seleted = document.querySelector(".inp[name='rating']:checked")
    if (seleted != null) {
        p.innerHTML = `You selected ${seleted.value} out of 5`
        return 1
    } else {
        window.alert("Por favor Escolha uma nota!")
        return 0
    }
}
function submit() {
    if (findSelector() == 0) {
        return
    } else {
        findSelector()
        container1.style.display = "none"
        container2.style.display = "flex"
    }
}