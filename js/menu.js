var menu = document.getElementById('menu')
content = document.getElementById('content')
menu__btn = document.getElementById('menu__btn')
open = document.getElementById('open')
close = document.getElementById('close')
mobile__open = document.getElementById('mobile__open')
mobile__close = document.getElementById('mobile__close');
open.onclick = function () {
    open.style.display="none", close.style.display="unset", menu.style.marginLeft="80%", menu__btn.style.margin=" 5vh 75%"
}
mobile__open.onclick = function () {
    menu.style.width="98%", menu.style.marginLeft="1.5%", menu.style.height="98.5%", menu.style.margin="1%", content.style.display="none"
}
close.onclick = function () {
    open.style.display="unset", close.style.display="none", menu.style.marginLeft="100%", menu__btn.style.margin=" 5vh 95%"
}