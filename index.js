let home = document.getElementById("home-score")
let guest = document.getElementById("guest-score")

let countH=0
let countG=0


function addOneH(){
    countH = countH +1
    home.textContent=countH
}

function addTwoH(){
    countH = countH +2
    home.textContent=countH
}

function addThreeH(){
    countH = countH +3
    home.textContent=countH
}

function addOneG(){
    countG = countG +1
     guest.textContent=countG
}

function addTwoG(){
    countG = countG +2
     guest.textContent=countG      
}

function addThreeG(){
    countG = countG +3
    guest.textContent=countG
}
