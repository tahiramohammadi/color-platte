
const btnColor=document.getElementById('btn_color');
const url="https://www.thecolorapi.com/scheme?"

btnColor.addEventListener('click', ()=>{
    GenereteColor()

})
function GenereteColor(){
    const inputColor = document.getElementById('input-color').value.slice(1);
    const selectColor=document.getElementById('mode').value;
    const endpoint=`${url}mode=${selectColor}&hex=${inputColor}`
   fetch(endpoint).then(res=>res.json()).then(data=>renderColor(data.colors))
}

function renderColor(colors){
    let html=''
   colors.forEach((color) => {
       const colorCode=color.hex.value;
         html +=`<div class="color" data="${colorCode}">
          <div class="color-container" 
          style="background-color:${colorCode}"
          data="${colorCode}"
          ></div>
          <p class="color-hex" data="${colorCode}">${colorCode}</p>
         </div>`
         document.querySelector("main").innerHTML= html
       
   });
}