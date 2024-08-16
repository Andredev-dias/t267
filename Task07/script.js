function trocar(){
    const html = document.documentElement;
    const body = document.getElementById("bb")
    html.classList.toggle("light")
    body.classList.toggle("lightBody")
}

// function trocar(){
//     const html = document.documentElement;

//     if(html.classList.contains("light")){
//         html.classList.remove("light")
//     }else{
//         html.classList.add("light")
//     }
// }