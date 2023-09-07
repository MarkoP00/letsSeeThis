//Header scroll animation

window.addEventListener('scroll', ()=>{
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
})

const navigation = document.querySelector('nav');

const classToggle = document.querySelector('.toggle');
classToggle.addEventListener('click', function(){
    this.classList.toggle('active')
    navigation.classList.toggle('active');
})

//Section Gallery code for changing images

const mainImage = document.querySelector('#slider');
const littleImagesAll = document.querySelectorAll('.littleImg');

littleImagesAll.forEach((image)=>{
    image.addEventListener('click', ()=>{
        const littleImgSource = image.getAttribute('src');
        mainImage.setAttribute('src',littleImgSource)
    })
})

//Scrolling into sections

const navLinks = document.querySelectorAll('.kk');

navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('data-target');
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

//scroll 
let processBar = document.getElementById('progressBar');
let totalHeight = document.body.scrollHeight - window.innerHeight; /*: Ova linija računa ukupnu visinu sadržaja stranice tako što oduzima visinu vidljivog prozora (window.innerHeight) od ukupne visine tela dokumenta (document.body.scrollHeight). Ovo se koristi da bi se odredilo koliko daleko korisnik može da pomera stranicu. */
window.onscroll = function(){ //funkcija se poziva svaki put kada se scroll pokrene
    let progressHeight = (window.pageYOffset / totalHeight) * 100;/* Ovde se računa visina napretka (progressHeight) kao postotak pomaka stranice u odnosu na ukupnu visinu sadržaja. window.pageYOffset je trenutna pozicija klizanja (scroll) po vertikali, a totalHeight je ukupna visina sadržaja. Pomnožavanjem ovog odnosa sa 100 dobijamo postotak napretka */
    processBar.style.height = progressHeight + "%";/* Ovde se postavlja visina (height) elementa "progressBar" na izračunatu vrednost visine napretka u procentima. Ovo uzrokuje animaciju rasta trake napretka dok korisnik klizi stranicom. */

}