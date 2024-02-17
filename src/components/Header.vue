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
                <a href="#" class="btn"><i class='bx bx-folder-open'></i></a>
                <a href="#contact" class="btn"><i class='bx bxs-message-dots'></i></a>
                
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
    --second-bg-color: #112e42;
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
    padding: 2rem 9%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 100;
    transition: .3s;
    background-color: var(--bg-color);

}
/* styles.css */
.sticky {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: var(--bg-color);
    /*Add other styles for your sticky header here*/ 
}

.logo{
    position: relative;
    font-size: 2rem;
    color: var(--text-color);
    font-weight: 600;
}
.navbar {
    position: relative;
}
.navbar a{
   font-size: 1.5rem;
   color: var(--text-color);
   font-weight: 500;
   margin-left: 3.5rem;
   transition: .3s;
}
.navbar a:hover,
.navbar a.active{
    color: var(--main-color);
}
#menu-icon{
    position: relative;
    font-size: 3rem;
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
}




.home-content {
    text-align: center; /* Aligns the text content to the center */
    position: relative;
    width: 50rem;
    margin: 0 auto;
    margin-top: 2rem; /* Add margin to separate from the header */
}

.text-animate h3 {
    font-size: 3rem;
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
    font-size: 2.5rem;
    color: var(--text-color);
    margin-bottom: 2rem; /* Adjust margin as needed */
}

.btn-box {
    position: relative;
    display: flex;
    justify-content: center; /* Add space between buttons */
    margin-top: 2rem; /* Adjust margin as needed */
}

.btn-box a {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    font-size: 3rem; /* Increase font size */
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
    font-size: 4.5rem;
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
    bottom: 2rem;
    width: 12rem;
    display: flex;
    justify-content: space-between;
    margin-bottom: 250px;
}
.home-sci a{
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 3rem;
    background: transparent;
    border-radius: 50%;
    font-size: 2rem;
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
    font-size: 2.5rem;
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
        padding: 2rem 4%;
    }

    section {
        padding: 10rem 4% 2rem;
    }
    .home {
        padding: 0 4%;
    }
    .footer{
        padding: 2rem 4%;
    }
}
@media (max-width: 768px) {
    .header {
        padding: 2rem 4%;
    }

    #menu-icon {
        display: block;
    }

    .navbar {
        position: absolute;
        top: 100%;
        left: -100%;
        width: 100%;
        padding: 1rem 4%;
        background: var(--bg-color);
        box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .2);
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
        font-size: 2rem;
        margin: 3rem 0;
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
        margin-left: 70px;
        

    }
    .home .btn-box i {
        font-size: 100%;
    }
    .home-sci a {
        top: 100px;
    }
    .home-content .text-animate h3{
        font-size: 1.4rem;
    }
    .home-content .text-animate p{
        font-size: .5rem;
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
}

@media (max-width: 371px) {
    .home-content h1 {
        font-size: 5rem;
    }
}


</style>