var intialPrice = document.querySelector("#intial-price")
var numberOfStocks = document.querySelector("#stocks-qty")
var currentPrice = document.querySelector("#current-price")
var checkBtn = document.querySelector(".check-btn")
var outputMessage = document.querySelector(".output-box")

outputMessage.style.display = "none"


function calcProfitAndLoss(intialPrice,quantity,currentPrice) {
    if (intialPrice > currentPrice) {
        //console.log("You are in loss")
        var loss = (intialPrice - currentPrice) * quantity
        var lossPercentage = ((loss / intialPrice) * 100).toFixed(2)
        outputMessage.style.display = "block"
        outputMessage.style.background = "#ef4444"
        outputMessage.innerText = `Hey, the loss is ${loss} and the percent is ${lossPercentage}%`
    }else if(intialPrice < currentPrice){
        //console.log("You are in Profit")
        var profit = (currentPrice - intialPrice) * quantity
        var profitPercentage = ((profit / intialPrice) * 100).toFixed(2)
        outputMessage.style.display = "block"
        outputMessage.style.background = "#22c55e"
        outputMessage.innerText = `Hey, the profit is ${profit} and the percent is ${profitPercentage}%` 
    } else {
        outputMessage.style.display = "block"
        outputMessage.style.background = "#fef08a"
        outputMessage.innerText = `No pain no gain and no gain no pain`
    }
}

function clickHandler() {
    var ip = Number(intialPrice.value)
    var qty = Number(numberOfStocks.value)
    var curr = Number(currentPrice.value)

    calcProfitAndLoss(ip, qty, curr)
}

checkBtn.addEventListener("click", clickHandler)