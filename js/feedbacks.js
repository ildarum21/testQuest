let paramSemf=document.querySelector('#param_SEMF');
let paramDik=document.querySelector('#param_Dik');
let paramJeng=document.querySelector('#param_Jeng');
let paramPet=document.querySelector('#param_Pet');


let close1=document.querySelector('.close1');
let close2=document.querySelector('.close2');
let close3=document.querySelector('.close3');
let close4=document.querySelector('.close4');


let person1=document.querySelector('.person1');
let person2=document.querySelector('.person2');
let person3=document.querySelector('.person3');
let person4=document.querySelector('.person4');

let feedback1=document.querySelector('.feedback1');
let feedback2=document.querySelector('.feedback2');
let feedback3=document.querySelector('.feedback3');
let feedback4=document.querySelector('.feedback4');


let semf=document.querySelector('#SEMF');
let Dik=document.querySelector('#Dik');
let Geng=document.querySelector('#Geng');
let Pet=document.querySelector('#Pet');



semf.onclick =function(){
    paramSemf.style.display='none';
    person1.style.display='none';
    feedback1.style.display='Block';
    

   
}
Dik.onclick =function(){
    paramDik.style.display='none';
    person2.style.display='none';
    feedback2.style.display='Block';
   
}
Geng.onclick =function(){
    paramJeng.style.display='none';
    person3.style.display='none';
    feedback3.style.display='Block';
   
}
Pet.onclick =function(){
    paramPet.style.display='none';
    person4.style.display='none';
    feedback4.style.display='Block';
    
}

close1.onclick=function(){
    paramSemf.style.display='block';
    person1.style.display='block';
    feedback1.style.display='none';
}
close2.onclick=function(){
    paramDik.style.display='block';
    person2.style.display='block';
    feedback2.style.display='none';
}
close3.onclick=function(){
    paramJeng.style.display='block';
    person3.style.display='block';
    feedback3.style.display='none';
}
close4.onclick=function(){
    paramPet.style.display='block';
    person4.style.display='block';
    feedback4.style.display='none';
}

