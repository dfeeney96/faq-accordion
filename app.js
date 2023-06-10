let arrows = document.querySelectorAll(".arrow-button");

arrows.forEach(arrow =>
    arrow.addEventListener("click", function (){
        let p = this.parentNode.querySelector("p");
        let h2 = this.parentNode.querySelector("h2");
        let img = this.parentNode.querySelector("img");

        if(p.classList.value !== "p-active"){
            p.classList.add("p-active");
          
            h2.classList.add("h2-active");

            img.setAttribute("id", "img-active");
            

        } else {
            p.classList.remove("p-active");
            h2.classList.remove("h2-active");
            img.removeAttribute("id", "img-active");

        }
        
    })
    )