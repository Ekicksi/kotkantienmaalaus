//PARALLAX EFEKTI

window.addEventListener('scroll', function(){
    let offset = window.pageYOffset;

    let parallaxEtusivu = document.getElementById('etusivu-container');
    parallaxEtusivu.style.backgroundPositionY = offset * -0.7 + "px";

    let palvelut = document.getElementById('palvelut-container');
    //palvelut.style.opacity = offset * 0.0015;
    palvelut.style.backgroundPositionY = (-1000 + offset) * -0.3 + "px";

    let parallaxColortest = document.getElementById('color-testing-container');
    parallaxColortest.style.backgroundPositionY = (-2000 + offset) * -0.3 + "px";
    //parallaxColortest.style.opacity = (-500 + offset) * 0.0015;

    let parallaxGallery = document.getElementById('gallery-container');
    parallaxGallery.style.backgroundPositionY = (-3000 + offset) * -0.3 + "px";
    
    
});

//PALVELUT INFO TOGGLE

$(document).ready(function(){
    $(".card-text").hide();

    $("#rakennusten-maalaus").click(function(){
        $("#rakennusten-maalaus-info").slideToggle("fast");
        var arrow1 = $("#arrow-icon1").attr("src");
        if (arrow1 == "Icons/arrow-down-sign-to-navigate.png")
        {
            $("#arrow-icon1").attr("src", "Icons/arrow-up-sign-to-navigate.png");
        }

        else
        {
            $("#arrow-icon1").attr("src", "Icons/arrow-down-sign-to-navigate.png");
        }
    });

    $("#tapetointi").click(function(){
        $("#tapetointi-info").slideToggle("fast");

        var arrow2 = $("#arrow-icon2").attr("src");
        if (arrow2 == "Icons/arrow-down-sign-to-navigate.png")
        {
            $("#arrow-icon2").attr("src", "Icons/arrow-up-sign-to-navigate.png");
        }

        else
        {
            $("#arrow-icon2").attr("src", "Icons/arrow-down-sign-to-navigate.png");
        }
    });
});


//NAVBAARI SCROLLAUS
var headerOffset = 70; //Navbaarin korkeus

/*Funktiossa haetaan halutun sektion kohta sivulla muuttujaan ja lisätään
automaatti scrollaukseen offset navbaarin korkeuden verran jottei navbar peitä sektion otsikkoja (poislukien etusivu)*/

function toEtusivu() {
    let etusivu = document.getElementById('etusivu-container');
    etusivu.scrollIntoView();
}
function toPalvelut() { 
    let palvelut = document.getElementById("palvelut-container");
    let palvelutPosition = palvelut.getBoundingClientRect().top;
    let offsetPosition = palvelutPosition + window.pageYOffset - headerOffset;
    
    window.scrollTo({
        top: offsetPosition, behavior: "smooth"
    });
};

function toColorTesting() {
    let colortesting = document.getElementById("color-testing-container");
    let colortestingPosition = colortesting.getBoundingClientRect().top;
    let offsetPosition = colortestingPosition + window.pageYOffset - headerOffset;
    
    window.scrollTo({
        top: offsetPosition, behavior: "smooth"
    });
}

function toGallery() {
    let gallery = document.getElementById("gallery-container");
    let galleryPosition = gallery.getBoundingClientRect().top;
    let offsetPosition = galleryPosition + window.pageYOffset - headerOffset;
    
    window.scrollTo({
        top: offsetPosition, behavior: "smooth"
    });
}

function toYhteystiedot() {
    let yhteystiedot = document.getElementById("yhteystiedot-container");
    let yhteystiedotPosition = yhteystiedot.getBoundingClientRect().top;
    let offsetPosition = yhteystiedotPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
        top: offsetPosition, behavior: "smooth"
    });
}


//VÄRITESTAUS

function colorChange(x) {
    let wantedColor = x;
    
    switch (wantedColor)
    {
        case 0:
            document.getElementById('Color_Fill_1').setAttribute('fill', 'white');
            break;
        case 1:
            document.getElementById('Color_Fill_1').setAttribute('fill', '#DD4132');
            break;

        case 2:
            document.getElementById('Color_Fill_1').setAttribute('fill', '#9E1030');
            break;

        case 3:
            document.getElementById('Color_Fill_1').setAttribute('fill', '#FE840E');
            break;  

        case 4:
            document.getElementById('Color_Fill_1').setAttribute('fill', '#FF6F61');
            break;  

        case 5:
            document.getElementById('Color_Fill_1').setAttribute('fill', '#C62168');
            break;  

        case 6:
            document.getElementById('Color_Fill_1').setAttribute('fill', '#8D9440');
            break;  

        case 7:
            document.getElementById('Color_Fill_1').setAttribute('fill', '#FFD662');
            break;

        case 8:
            document.getElementById('Color_Fill_1').setAttribute('fill', '#00539C');
            break;

        case 9:
            document.getElementById('Color_Fill_1').setAttribute('fill', '#755139');
            break;

        case 10:
            document.getElementById('Color_Fill_1').setAttribute('fill', '#D69C2F');
            break;  
            
        case 11:
            document.getElementById('Color_Fill_1').setAttribute('fill', '#616247');
            break;

        case 12:
            document.getElementById('Color_Fill_1').setAttribute('fill', '#E8B5CE');
            break;

        case 13:
            document.getElementById('Color_Fill_1').setAttribute('fill', '#D2C29D');
            break;

        case 14:
            document.getElementById('Color_Fill_1').setAttribute('fill', '#343148');
            break;

        case 15:
            document.getElementById('Color_Fill_1').setAttribute('fill', '#F0EAD6');
            break;

        case 16:
            document.getElementById('Color_Fill_1').setAttribute('fill', '#615550');
            break;

        case 17:
            document.getElementById('Color_Fill_2').setAttribute('fill', '#DD4132');
            break;

        case 18:
            document.getElementById('Color_Fill_2').setAttribute('fill', '#9E1030');
            break;

        case 19:
            document.getElementById('Color_Fill_2').setAttribute('fill', '#FE840E');
            break;  

        case 20:
            document.getElementById('Color_Fill_2').setAttribute('fill', '#FF6F61');
            break;  

        case 21:
            document.getElementById('Color_Fill_2').setAttribute('fill', '#C62168');
            break;  

        case 22:
            document.getElementById('Color_Fill_2').setAttribute('fill', '#8D9440');
            break;  

        case 23:
            document.getElementById('Color_Fill_2').setAttribute('fill', '#FFD662');
            break;

        case 24:
            document.getElementById('Color_Fill_2').setAttribute('fill', '#00539C');
            break;

        case 25:
            document.getElementById('Color_Fill_2').setAttribute('fill', '#755139');
            break;

        case 26:
            document.getElementById('Color_Fill_2').setAttribute('fill', '#D69C2F');
            break;  
            
        case 27:
            document.getElementById('Color_Fill_2').setAttribute('fill', '#616247');
            break;

        case 28:
            document.getElementById('Color_Fill_2').setAttribute('fill', '#E8B5CE');
            break;

        case 29:
            document.getElementById('Color_Fill_2').setAttribute('fill', '#D2C29D');
            break;

        case 30:
            document.getElementById('Color_Fill_2').setAttribute('fill', '#343148');
            break;

        case 31:
            document.getElementById('Color_Fill_2').setAttribute('fill', '#F0EAD6');
            break;

        case 32:
            document.getElementById('Color_Fill_2').setAttribute('fill', '#615550');
            break;

        case 33:
            document.getElementById('Color_Fill_2').setAttribute('fill', 'white');
    }
}

//GALLERIA MODAL

document.addEventListener("click",function(testi){
    if(testi.target.classList.contains("gallery-img")){
        const src = testi.target.getAttribute("src");
        document.querySelector(".modal-img").src = src;
        var myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
        myModal.show();
    }
});

//FORM SUBMIT

function formSubmit() {
    alert('Yhteydenottopyyntösi on lähetetty!')
    
}

