let btn = document.getElementById('add');
let input = document.querySelector('input');
let pp = document.getElementById('text');
let remove = document.getElementById('re');
let intmain =document.getElementById('intmain')
let h2 = document.getElementById('h2l')

let show  = () => {

    if(input.value ==0)
alert('Fill vaild data')
else{
    let text = input.value;
    pp.value = text;
    intmain.style.display = 'block'
    intmain.style.display = 'flex'
    h2.style.display = 'none'
}

}
btn.addEventListener('click' , show);

let removee = () => {
    pp.value = ''
    intmain.style.display = 'none'
    h2.style.display = 'block'
}
remove.addEventListener('click' , removee)




let dark =function(){
    if(body.classList.toggle('dark')){
        darklight.classList='btn btn-light fas fa-cloud';
    }
    else{
        darklight.classList='btn btn-dark fas fa-moon';
    }
}
darklightq.addEventListener('click',dark);
