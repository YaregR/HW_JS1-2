
let btn = document.querySelector('.btn');
let wnd = document.querySelector('.window');


btn.addEventListener ('click', function (event) {
    wnd.classList.toggle ('window');
    wnd.classList.toggle ('window-hidden');
});

btn.addEventListener ('click', function (event) {
    btn.classList.toggle ('btn');
    btn.classList.toggle ('btn-push');
});