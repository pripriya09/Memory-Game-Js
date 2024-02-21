const start = document.querySelector("#screen1 button")
const screen1 = document.querySelector("#screen1")
const screen2 = document.querySelector("#screen2")
const images=[
    "ada sharam.jpg",
     "aishwarya rai.jpg",
      "anne hathaway.jpg",
      "Chris Evans.jpg",
      "daniel radciffe.webp",
      "dwayne johnson.jpg",
      "questionMark.jpg",]

const uniqueValue=[]
start.addEventListener("click", () => {
    screen1.style.display = "none"
    screen2.style.display = "flex"
})
const  flipcarImg =document.querySelector("flip-card-front img");
const backImg =document.querySelector("")

flipcarImg.foreach((image)=>{
image.addEventListener("click",() =>{
image.parentElement.parentElement.style.transfrom = "rotate(deg180)"
});})

for(let i=0;i<images.length;i++){
//   console.log(rendomImg())
const img = document.createElement("img")
img.src ="assets/"+ images.rendomImg()
}
function rendomImg(){
    const randomValue = math.floor(math.random()*images.length)
     if(uniqueValue.includes(randomValue)){
        return rendomImg()
     }
     else{
        uniqueValue.push(randomValue)
        return uniqueValue
         
     }
    
}





