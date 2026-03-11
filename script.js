    var navbar = document.getElementById("navbargoster");

    window.addEventListener("scroll", function(){
        const mesafe = window.scrollY;
        if(mesafe>50){
            navbar.classList.add("navbarfixed");
        }else{
            navbar.classList.remove("navbarfixed");
        }
    });