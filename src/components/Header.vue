<template>
    <header class="header">
        <a href="#" class="logo">Nkosiphendule.</a>

        <div class="bx bx-menu" id="menu-icon"></div>
        <nav class="navbar">
            <a href="#home" class="active">Home</a>
            <a href="#about">About</a>
            <a href="#education">Education</a>
            <a href="#skills">Skills</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>

            <span class="active-nav"></span>
        </nav>
    </header>
    <section class="home" id="home">
        <div class="home-content">
            <div class="text-animate">
                <h3>Full Stack Software Developer</h3>  
            </div>
            <p>Welcome to Nkosiphendule Mdingi’s portfolio.
            </p>

            <div class="btn-box">
               <a href="#contact" class="btn"><i class='bx bxs-message-dots'></i></a>
              <a href="https://plum-veda-57.tiiny.site/" class="btn" target="_blank"><i class='bx bxs-file-pdf'></i></a>
            </div>


        </div>
        
        <div class="home-sci">
            <a href="https://www.linkedin.com/in/nkosiphendule-mdingi-957220232"><i class='bx bxl-linkedin' ></i></a>
            <a href="https://github.com/NkosiphenduleM221"><i class='bx bxl-github' ></i></a>
        </div>
    
      </section>
    
  </template>
  
  <script>
export default {
    name: "NavBar",
    mounted() {
        let menuIcon = document.querySelector('#menu-icon');
        let navBar = document.querySelector('.navbar');

        menuIcon.addEventListener('click', () => {
            menuIcon.classList.toggle('bx-x');
            navBar.classList.toggle('active');
        });

        let sections = document.querySelectorAll('section');
        let navLinks = document.querySelectorAll('header nav a');

        window.onscroll = () => {
            let top = window.scrollY;

            sections.forEach(sec => {
                let offset = sec.offsetTop - 100;
                let height = sec.offsetHeight;
                let id = sec.getAttribute('id');

                if (top >= offset && top < offset + height) {
                    navLinks.forEach(links => {
                        links.classList.remove('active');
                    });
                    document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
                    sec.classList.add('show-animate');
                } else {
                    sec.classList.remove('show-animate');
                }
            });

            let header = document.querySelector('header');
            header.classList.toggle('sticky', top > 100);

            menuIcon.classList.remove('bx-x');
            navBar.classList.remove('active');
        };
    }
}
</script>

  <style>
@import url('https://fonts.goodleapis.com/css2?family=Popins:wght300;400;500;600;600;700;800;900&display=swap');
@import url('https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css');
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    border: none;
    outline: none;
    scroll-behavior: smooth;
    font-family: 'Popin',sans-serif;
}
:root{
    --bg-color: #01214ae7; 
    --second-bg-color: #0b171f;
    --text-color: #ededed;
    --main-color: #00abf0;
    --contact-color: #0047ab;
}
html{
    font-size: 62.5%;
    overflow-x: hidden;
}
body{
    background: #01214ae7;
    color: #ededed;
}
.header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 32px 9%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 100;
    transition: .3s;
    background-color: var(--bg-color);

}

.sticky {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: var(--bg-color);
    
}

.logo{
    position: relative;
    font-size: 32px;
    color: var(--text-color);
    font-weight: 600;
}
.navbar {
    position: relative;
}
.navbar a{
   font-size: 24px;
   color: var(--text-color);
   font-weight: 500;
   margin-left: 56px;
   transition: .3s;
}
.navbar a:hover,
.navbar a.active{
    color: var(--main-color);
}
#menu-icon{
    position: relative;
    font-size: 48px;
    color: var(--text-color);
    cursor: pointer;
    display: none;
}
.home {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: var(--bg-color);
    color: var(--text-color);
    animation: changeBackgroundColor 5s infinite alternate; 
}
@keyframes changeBackgroundColor {
            0% { background-color: var(--bg-color); }
            75% {background-color: var(--second-bg-color,var(--bg-color));}
            50% { background-color: var(--bg-color); } 
            75% { background-color: var(--second-bg-color,var(--bg-color)); }
            100%{ background-color: var(--bg-color);}
        }




.home-content {
    text-align: center; 
    position: relative;
    width: 800px;
    margin: 0 auto;
    margin-top: 32px; 
}

.text-animate h3 {
    font-size: 48px;
    font-weight: 700;
    color: transparent;
    -webkit-text-stroke: .7px var(--main-color);
    background-image: linear-gradient(var(--main-color),var(--main-color));
    background-repeat: no-repeat;
    -webkit-background-clip: text;
    background-position: -33rem 0;
    animation: homeBgText 6s linear infinite;
    animation-delay: 2s;
}

.text-animate h3::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    border-right: 2px solid var(--main-color);
    z-index: -1;
    animation: homeCursorText 6s linear infinite;
    animation-delay: 2s;
}

@keyframes homeBgText {
    to {
        background-position: 33rem 0;
    }
}

@keyframes homeCursorText {
    50% {
        border-color: transparent;
    }
}


.home-content p {
    text-align: center;
    font-size: 56px;
    color: var(--text-color);
    margin-bottom: 32px; 
}

.btn-box {
    position: relative;
    display: flex;
    justify-content: center;
    margin-top: 32px; 
}

.btn-box a {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    font-size: 48px; 
    color: var(--main-color);
    z-index: 1;
    overflow: hidden;
    transition: .5s;
    margin: 0 30px;
}

.btn-box a:hover {
    color: var(--bg-color);
}

.btn-box a::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: var(--main-color);
    z-index: -1;
    transition: 0.5s;
}

.btn-box a:hover:before {
    width: 100%;
}

.btn-box a i {
    font-size: 72px;
    color: var(--main-color);
    transition: .5s;
}

.btn-box a:hover i {
    color: var(--second-bg-color);
}

.btn-box a:hover:before {
    width: 100%;
}

.home-sci{
    position: absolute;
    bottom: 8px;
    width: 192px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 250px;
}
.home-sci a{
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    background: transparent;
    border-radius: 50%;
    font-size: 32px;
    color: var(--main-color);
    z-index: 1;
    overflow: hidden;
    transition: .5s;
}
.home-sci a:hover {
    color: var(--bg-color);
}
.home-sci a::before {
    content: '';
    position: absolute;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: var(--main-color);
    z-index: -1;
    transition: 0.5s;
}
.home-sci a:hover:before{
    width: 100%;
}
.home-sci a i {
    font-size: 40px;
    color: var(--main-color);
    transition: .5s;
}
.home-sci a:hover i {
    color: var(--bg-color);
}
.home-sci a:hover:before{
    width: 100%;
}
@media (max-width: 1200px) {
    html {
         font-size: 55%;
    }
}
@media (max-width: 991px) {
    .header{
        padding: 32px 4%;
    }

    section {
        padding: 160px 4% 32px;
    }
    .home {
        padding: 0 4%;
    }
    .footer{
        padding: 32px 4%;
    }
    #education {
    height: fit-content;
    }
    .skill-column1{
        max-width: 991px;
    }
    .skills .skill-column1 .box-container {
        display: grid;
    }
    .portfolio .box-container {
        width: fit-content;
    }
}
@media (max-width: 768px) {
    .header {
        padding: 32px 4%;
    }

    #menu-icon {
        display: block;
        font-size: 38px;
        color: #ededed;
    }

    .navbar {
        position: absolute;
        top: 100%;
        left: -100%;
        width: 100%;
        padding: 16px 4%;
        background: var(--bg-color);
        box-shadow: 0 8px 16px rgba(0, 0, 0, .2);
        z-index: 1;
        transition: left 0.25s ease, opacity 0.25s ease;
        opacity: 0;
    }

    .navbar.active {
        left: 0;
        opacity: 1;
    }

    .navbar a {
        display: block;
        font-size: 32px;
        margin: 48px 0;
        transform: translateX(-20rem);
        transition: .25s ease;
        transition-delay: 0;
    }

    .navbar.active a {
        transform: translateX(0);
        transition-delay: .25s;
    }
    .home-content{
        max-width: fit-content;
    }
    
    .logo {
        font-size: 100%;
    }
    .home .btn-box{
        width: 200px;
        margin-left: 250px;
        

    }
    .home .btn-box i {
        font-size: 100%;
    }
    .home-sci a {
        top: 100px;
    }
    .home-content .text-animate h3{
        font-size: 30.4px;
    }
    .home-content .text-animate p{
        font-size: 8px;
    }
    

}

@media (max-width: 520px) {
    html {
        font-size: 50%;
    }

    .home-sci {
        width: 160px;
    }

    .home-sci a {
        width: 38px;
        height: 38px;
    }
    
    .home .btn-box {
        width: 200px;
        margin-left: 150px;
    }

    #about {
        width: fit-content;
    }

    .about-content {
        width: auto;
    }

    #education .title {
        font-size: 100%;
    }

    #education h2 {
        font-size: 100%;
    }

    #education h3 {
        font-size: 100%;
    }

    .education-column .education-box {
        border-left: .2rem solid var(--main-color);
        border-right: none; /* Remove the right border */
    }
}


@media (max-width: 371px) {
    .home-content h1 {
        font-size: 80px;
    }
    .about-content h3 {
        font-size: 100%;
    }
    .about-content p {
        font-size: 100%;
    }
    .portfolio .box-container{
        right: 48px;
    }
    .portfolio .box-container .box{
        width: fit-content;

    }
    .home .btn-box{
        width: 200px;
        margin-left: 70px;
        

    }
    .home .text-animate{
        font-size: 100%;
    }
    .home p{
        font-size: 150%;
    }
    .popup {
        right: 0;
    }
}


</style>