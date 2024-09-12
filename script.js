const setSoldiers = (soldiers) => localStorage.setItem("soldiers", JSON.stringify(soldiers))
const getSoldiers = () => JSON.parse(localStorage.getItem("soldiers")) || []
const inputsEl = document.querySelectorAll(".addit>input, select")
const bAdditEl = document.querySelector(".bAddit")
const [nameEl, rankEl, positionEl, platoonEl, timeEl, statusEl] = inputsEl
const divTableEl = document.querySelector(".divTable")
console.log(getSoldiers());



function clerInputsEl() {
    for (const inp of inputsEl) {
        inp.textContent = ""
    }

}
function addSoldierToLocal(newSoldier) {
    let soldiers = getSoldiers()
    soldiers.push(newSoldier)
    setSoldiers(soldiers)
}


bAdditEl.addEventListener("click", e => {
    const newSoldier = {
        fullName: nameEl.value,
        rank: rankEl.value,
        position: positionEl.value,
        platoon: platoonEl.value,
        status: statusEl.value,
        missionTime: timeEl.value
    }
    addSoldierToLocal(newSoldier)
    pupledTable()
    clerInputsEl()
})



function pupledTable() {
    soldiers = getSoldiers()
    if (!soldiers.length) { return }
    const table = document.createElement("table")
    let heders = ["full name", "RANK", "POSITION", "PLATOON", "STATUS", "ACTHINS"]
    const trHeders = document.createElement("tr")
    for (const hed of heders) {
        const th = document.createElement("th")
        th.textContent = hed
        trHeders.appendChild(th)
    }
    table.appendChild(trHeders)
    for (const sold of soldiers) {
        const trSold = document.createElement("tr")
        for (const key in sold) {
            const tdSold = document.createElement("td")
            tdSold.textContent = sold[key]
            trSold.appendChild(tdSold)
        }
        table.appendChild(trSold)
    }
    divTableEl.appendChild(table)



}
//const trsolder = document.createElement(tr)












//console.log(inputs);
