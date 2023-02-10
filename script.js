const  scrolltoSection = (ele) =>{
    ele.scrollIntoView({ behavior: 'smooth' });
}

const homeLink = document.getElementById('home-link');
const aboutUsLink = document.getElementById('about-us-link');
const imagesLink = document.getElementById('images-link');
const servicesLink = document.getElementById('services-link');

const homeSection = document.getElementById("home-section");
const aboutUsSection = document.getElementById("about-us-section");
const imagesSection = document.getElementById("images-section");
const servicesSection = document.getElementById("services-section");


// home
homeLink.addEventListener('click',()=>{
    scrolltoSection(homeSection);
});
homeLink.addEventListener('mouseover',function(){
    this.style.backgroundColor = "rgba(210, 210, 210, 0.7)" ;
});
homeLink.addEventListener('mouseout',function(){
    this.style.backgroundColor = "" ;
});

//services
servicesLink.addEventListener('click',()=>{
    scrolltoSection(servicesSection);
});
servicesLink.addEventListener('mouseover',function(){
    this.style.backgroundColor = "rgba(210, 210, 210, 0.7)" ;
});
servicesLink.addEventListener('mouseout',function(){
    this.style.backgroundColor = "" ;
});

// images 
imagesLink.addEventListener('click',()=>{
    scrolltoSection(imagesSection);
});
imagesLink.addEventListener('mouseover',function(){
    this.style.backgroundColor = "rgba(210, 210, 210, 0.7)" ;
});
imagesLink.addEventListener('mouseout',function(){
    this.style.backgroundColor = "" ;
});

// about us
aboutUsLink.addEventListener('click',()=>{
    scrolltoSection(aboutUsSection);
});
aboutUsLink.addEventListener('mouseover',function(){
    this.style.backgroundColor = "rgba(210, 210, 210, 0.7)" ;
});
aboutUsLink.addEventListener('mouseout',function(){
    this.style.backgroundColor = "" ;
});