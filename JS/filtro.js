const btns = document.querySelectorAll(".btn");
const produtos = document.querySelectorAll(".produto")

for (i = 0; i < btns.length; i++) {
    
    btns[i].addEventListener("click", (e) => {
        e.preventDefault();

        const filter = e.target.dataset.filter;
        //console.log(filter)
        produtos.forEach((produto) => {
            if(filter == "todos"){
            produto.style.display = "flex"
            }
            else {
                if(produto.classList.contains(filter)){
                produto.style.display = "flex"
                }
                else{
                    produto.style.display = "none"
                }
            }
        })
    })
    
}