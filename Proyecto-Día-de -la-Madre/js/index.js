window.onscroll = function (){
    const header = document.querySelector("header.principal")
    if(window.scrollY > 0){
        header.classList.remove("top")
    }
    else{
        header.classList.add("top")
    }
}

{
    const logIncontainer = document.querySelector("#logIncontainer")
    
    document.querySelector("#logInBtn").onclick = function(){
        logIncontainer.classList.add("show")
    }
    
    document.querySelector("#logIncontainer .closeBtn").onclick = function(){
        logIncontainer.classList.remove("show")
    }
}
