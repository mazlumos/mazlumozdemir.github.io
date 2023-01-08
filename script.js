var menu = document.querySelector(".menu-icon");
var navbar = document.querySelector(".navbar");

menu.onclick = () => {
    navbar.classList.toggle("open-menu");
    menu.classList.toggle("move");
};
window.onscroll=()=>{
    navbar.classList.remove("open-menu");
    menu.classList.remove("move");    
};
//gözden geçir swiper

var swiper = new Swiper(".reviews-content", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
//email js
function dogrulama() {
    var isim = document.querySelector('.name');
    var email = document.querySelector('.email');
    var mesaj = document.querySelector('.message');
    var gonderbtn = document.querySelector('.send-btn');

    gonderbtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (isim.value == "" || email.value == "" || mesaj.value == "") {
            bosdegerhatasi();
        }
        else {
            mailgonder(isim.value, email.value, mesaj.value);
            basarili();
        }
    });
}
dogrulama();
function mailgonder(isim, email, mesaj) {
    emailjs.send("service_c86ltba", "template_yasugjh", {
        to_name: email,
        from_name: isim,
        message: mesaj,
    });
}
function bosdegerhatasi() {
    swal({
        title: "hata..!",
        text: "Alanlar boş olamaz!",
        icon: "error",
    });
}
function basarili() {
    swal({
        title: "Mail başarı ile gönderildi",
        text: "Mesaj iletildi",
        icon: "success",
    });
}
//kaydırma sırasında başlık arkaplanı 
var baslik=document.querySelector('header');
window.addEventListener('scroll',()=>{
    baslik.classList.toggle('header-active',window.scrollY>0);
});
//yukarı kaydır
var yukarikaydir=document.querySelector(".scroll-top");
window.addEventListener('scroll',()=>{
    yukarikaydir.classList.toggle('scroll-active',window.scrollY>=400);
});
