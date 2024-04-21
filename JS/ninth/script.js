const URL="https://cat-fact.herokuapp.com/facts"

const factPara=document.querySelector("#fact")
const button=document.querySelector("#getf")

const getFacts=async()=>{
    let response=await fetch(URL)
    //console.log(response)//JSON format
    let data=await response.json()
    console.log(data[0].text)
    factPara.innerText=data[0].text
}
button.addEventListener("click",()=>{
    getFacts()
})