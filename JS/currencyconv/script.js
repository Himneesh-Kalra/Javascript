
const BASE_URL="https://v6.exchangerate-api.com/v6/eb952497bf14bb37ee24060c/latest"

const dropdowns=document.querySelectorAll(".dropdown select")
const button=document.querySelector("button")
const fromCurr=document.querySelector(".from select")
const toCurr=document.querySelector(".to select")
const finalMsg=document.querySelector(".msg")

for(let select of dropdowns){
    for (currCode in countryList){
        let newOption=document.createElement("option");
        newOption.innerText=currCode;
        newOption.value=currCode;
        select.append(newOption);
        if(select.name==="from"&&currCode==="USD"){
            newOption.selected="selected";
        }
        if(select.name==="to"&&currCode==="INR"){
            newOption.selected="selected";
        }
    }
    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target);
    })
}

const updateFlag=(element)=>{
    let currCode=element.value
    let countryCode=countryList[currCode]
    let newSrc='https://flagsapi.com/'+countryCode+'/flat/64.png'
    let img=element.parentElement.querySelector("img")
    img.src=newSrc
}

button.addEventListener("click",async(evt)=>{
    evt.preventDefault();
    let amount=document.querySelector(".amount input")
    let amtValue=amount.value;
    if(amtValue===""||amtValue<1){
        amtValue=1;
    }
    console.log(fromCurr.value,toCurr.value)
    const URL= BASE_URL+'/'+fromCurr.value.toLowerCase()
    let response=await fetch(URL)
    let data=await response.json();
    let rate=data.conversion_rates[toCurr.value]
    const finalRate=calcRate(rate,amtValue)
    
    displayRate(amtValue,finalRate,fromCurr.value,toCurr.value)
})

function calcRate(amtValue,rate){
    return amtValue*rate
}

function displayRate(amtValue,finalRate,fromCurr,toCurr){
    finalMsg.innerText=amtValue+fromCurr+' = '+finalRate+toCurr
}