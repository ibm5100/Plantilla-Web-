window.addEventListener('load', init);

function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera
    document.documentElement.scrollTop = 0; // For IE and Firefox
}
function init() {


    var documentEl = $(document)
    function initMap() {
        var uluru = { lat: -25.363, lng: 131.044 };
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 4,
            center: uluru
        });
        var marker = new google.maps.Marker({
            position: uluru,
            map: map
        });
    }
    window.onscroll = function () {
        scrollFunction()
    }
    navbar = document.getElementById('navbar')
    navbarAltura = navbar.scrollHeight

    function scrollFunction() {
        var currScrollPos = documentEl.scrollTop();
        if (currScrollPos > 30) {
            document.getElementById("topBtn").style.display = "block";
            var incremento = 20;
            navbar.style.background = "#212121";
            if (currScrollPos < 200) {
                var xOpacity = currScrollPos * 0.003
                navbar.style.opacity = xOpacity + 0.3

            }
        } else {
            navbar.style.opacity = 1;
            navbar.style.background = "none";
            document.getElementById("topBtn").style.display = "none";
        }


    }
    document.getElementById("facebook").addEventListener("mouseover", function () {
        document.getElementById("facebook").src = "Imagenes/facebookazul.svg"
    }, false);

    document.getElementById("twitter").addEventListener("mouseover", function () {
        document.getElementById("twitter").src = "Imagenes/twitterceleste.svg"
    }, false)

    document.getElementById("instagram").addEventListener("mouseover", function () {
        document.getElementById("instagram").src = "Imagenes/instagramcolor.svg"
    }, false)

    document.getElementById("google-plus").addEventListener("mouseover", function () {
        document.getElementById("google-plus").src = "Imagenes/google-plusrojo.svg"
    }, false)


    //VOLVER AL BLANCO
    document.getElementById("facebook").addEventListener("mouseout", function () {
        document.getElementById("facebook").src = "Imagenes/facebookblanco.svg"
    }, false);

    document.getElementById("twitter").addEventListener("mouseout", function () {
        document.getElementById("twitter").src = "Imagenes/twitterbanco.svg"
    }, false)

    document.getElementById("instagram").addEventListener("mouseout", function () {
        document.getElementById("instagram").src = "Imagenes/instagramblanco.svg"
    }, false)

    document.getElementById("google-plus").addEventListener("mouseout", function () {
        console.log(document.getElementById("google-plus").getBoundingClientRect())
        document.getElementById("google-plus").src = "Imagenes/google-plus.svg"
    }, false)


    document.getElementById("flecha").addEventListener("click", function () {
        var topInformacion = document.getElementById("Servicios").getBoundingClientRect().top;
        window.scroll({
            top: topInformacion - 100,
            left: 0,
            behavior: 'smooth'
        });

    }, false)


    /* FAQ */
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
                img = this.getElementsByTagName("img")
                $(img).attr("src", "Imagenes/plus.svg");

            } else {
                panel.style.display = "block";
                img = this.getElementsByTagName("img")
                $(img).attr("src", "Imagenes/remove.svg");

            }
        });
    }

    //GALERIA

    var slideIndex = 0;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }


    document.getElementById("botonPie1").addEventListener("click", function () {
        currentSlide(1);
    })
    document.getElementById("botonPie2").addEventListener("click", function () {
        currentSlide(2);
    })
    document.getElementById("botonPie3").addEventListener("click", function () {
        currentSlide(3);
    })


    function showSlides(n) {

        var i;
        var slides = document.getElementsByClassName("ImagenesSlide");
        var dots = document.getElementsByClassName("BotonPieFoto");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";

        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");

        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";

    }

}

