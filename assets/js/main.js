function pintar(color,elemento) {
    elemento.style.backgroundColor = color;
    }



let colorSeleccionado='';
document.addEventListener('keydown',(e)=>{
    if(e.key==='a'){
        colorSeleccionado='green';
        
    }else if(e.key==='s'){
        colorSeleccionado='red';
        
    }else if(e.key==='d'){
        colorSeleccionado='yellow';
        
    }
});

const div1=document.getElementById('div1');
div1.addEventListener('click',()=>{
   pintar(colorSeleccionado,div1);
});
const div2=document.getElementById('div2');
div2.addEventListener('click',()=>{
   pintar(colorSeleccionado,div2);
});
const div3=document.getElementById('div3');
div3.addEventListener('click',()=>{
   pintar(colorSeleccionado,div3);
});