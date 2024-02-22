<template>
  <section class="about" id="about">
        
        <div class="about-img">
            <img :src="imagePath" alt="Description of the image">
    
        </div>
        <div class="about-content">
            <h3>Nkosiphendule Mdingi</h3> 
            <p>Hello there! I'm a dedicated FullStack Developer Intern with a solid foundation—a Bachelor of Science Degree in Computer Science and Information Technology graduate. My journey into the world of tech has been marked by a passion for innovation and a drive to learn and grow.<br>
            <br>
            As an intern, I'm enthusiastically honing my skills in both front-end and back-end development, working to bridge the gap between captivating user experiences and robust technical implementations. My academic background has provided me with a deep understanding of the core principles, and my internship experience is allowing me to put theory into practice in real-world projects.<br>
            <br>
            Eager to contribute, collaborate, and make my mark, I'm excited about the opportunities that lie ahead in creating meaningful digital solutions. Join me as I embrace challenges, embrace growth, and pave my way in the dynamic realm of FullStack development.</p> 
        </div>
    </section>  
    
  </template>
  
  <script>
  export default {
  data() {
    return {
      imagePath: require('@/assets/About.png')
    }
  }
}

  </script>
  <style>
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
    font-size: 50.5%;
    overflow-x: hidden;
}
body{
    background: var(--bg-color);
    color: var(--text-color);
}
.about {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding-bottom: 6rem;
    background-color: var(--second-bg-color);
    color: var(--text-color);
}

  .about-img {
    position: relative;
    width: 20rem;
    height: 20rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    top: 2.5rem;
    align-items: center;
    overflow: hidden; 
}

.about-img img {
    position: absolute;
    width: 100%; 
    height: auto;
    border-radius: 40%;
    transition: transform 0.5s ease; 
}


@keyframes zoomIn {
    from {
        transform: scale(1); 
    }
    to {
        transform: scale(1.2); 
    }
}


@keyframes zoomOut {
    from {
        transform: scale(1.2); 
    }
    to {
        transform: scale(1); 
    }
}


.about-img:hover img {
    animation: zoomIn 0.5s forwards; 
}


.about-img:not(:hover) img {
    animation: zoomOut 0.5s forwards; 
}

.about-content{
    
    width: 40rem;
}
.about-content h3{
    margin-top: 2rem;
    font-size: 2.5rem;
    color: var(--main-color);
}

.about-content p {
    font-size: 1.3rem; 
    opacity: 0; 
    animation: animateParagraph 5s ease-out 5s forwards;
}

@keyframes animateName {
    0% {
        opacity: 0;
        transform: scale(0.5); 
    }
    100% {
        opacity: 1;
        transform: scale(1); 
    }
}

@keyframes animateParagraph {
    0% {
        opacity: 0;
        transform: translateY(-20px); 
    }
    100% {
        opacity: 1;
        transform: translateY(0); 
    }
}


  </style>