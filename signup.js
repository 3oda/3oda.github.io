let txt = document.getElementById('txt');
let mail = document.getElementById('mail');
let pass = document.getElementById('pass');
let pas = document.getElementById('pas');




txt.onkeyup = function () {
    localStorage.setItem("txt", txt.value);
}

mail.onkeyup = function () {
    localStorage.setItem("mail", mail.value);
}

pass.onkeyup = function () {
    localStorage.setItem("pass", pass.value);
}
pas.onkeyup = function () {
    localStorage.setItem("pas", pas.value);
}





var icon = document.getElementById("icon");
let bg = document.getElementById("foot");

if(localStorage.getItem("theme") == null){
    localStorage.setItem("theme","light");
}


let localData = localStorage.getItem("theme");

if(localData == "light"){
    icon.src ="media/sun.png";
    document.body.classList.remove("dark_theme");
    bg.style.backgroundImage  = "url('media/foot_img.jpg')";
}
else if(localData == "dark"){
    icon.src ="media/moon.png";
    document.body.classList.add("dark_theme");
    bg.style.backgroundImage  ="url('media/w_foot_img.jpg')";
}

icon.onclick = function(){
    document.body.classList.toggle("dark_theme");
    if(document.body.classList.contains("dark_theme")){
        icon.src = "media/moon.png";
        bg.style.backgroundImage  ="url('media/w_foot_img.jpg')";
        localStorage.setItem("theme","dark");
    }
    else{
        icon.src ="media/sun.png";
        bg.style.backgroundImage  ="url('media/foot_img.jpg')";
        localStorage.setItem("theme","light");
    }
}

// let txt=document.getElementById('txt');
// let mail=document.getElementById('mail');
// let pass=document.getElementById('pass');
// let pas=document.getElementById('pas');

// localStorage.setItem("txt",text);
// localStorage.setItem("mail",mail);
// localStorage.setItem("pass",pass);
// localStorage.setItem("pas",pas);

// window.onload=function(){
//     text.focus();

// }
// text.oncontextmenu=function(){
//     text.blur()
// }

// mySub.onclick=function(){
//     mySub.style.background='white'
// }

//console.log(localStorage.pas);

function fun()
{
let one= localStorage.pas;
   let two= localStorage.pass;
    let check = document.getElementById('alert');
    if(one==two)
    {
        return true;
    }
    else
    {
        check.style.display = 'block';
        return false;
        
    }

}

//    let one= localStorage.pas;
//    let two= localStorage.pass;
  
//     if(one==two)
//     {
//         return true;
//     }
//     else
//     {
//         return false;
//     }
// }
