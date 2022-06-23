const h1 = document.getElementById("page-title")
const button = document.getElementById("mode-selector")
const footer = document.getElementsByTagName('footer')[0]
const body = document.getElementsByTagName('body')[0]
const darkModeClass = 'dark-mode'

button.addEventListener("click", botao)
function botao(){
    mudaclasses();
    mudanome();
}

function mudaclasses (){
    h1.classList.toggle(darkModeClass)
    body.classList.toggle(darkModeClass)
    button.classList.toggle(darkModeClass)
    footer.classList.toggle(darkModeClass)
}
function mudanome(){
const darkMode = 'Dark Mode'
const lightMode = 'Light Mode'

    if(body.classList.contains(darkModeClass)/* AQUI TA verificando se a classe darkModeClass ta adicionada*/){
        button.innerHTML = lightMode //se tiver o nome do botão va ser 'Light Mode
        h1.innerHTML = darkMode + ' ON' // e o nome do texto vai muda
        return
    }
    button.innerHTML = darkMode 
    h1.innerHTML = lightMode + ' ON'

}