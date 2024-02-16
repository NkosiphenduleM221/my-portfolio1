<template>
  <div class="about" id="about">
        
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
  </div>  
    
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
    width: 40rem;
    height: 40rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    top: 5rem;
    align-items: center;
    overflow: hidden; /* Ensure image doesn't overflow */
}

.about-img img {
    position: absolute;
    width: 100%; /* Start with full width */
    height: auto;
    border-radius: 40%;
    transition: transform 0.5s ease; /* Smooth transition for zoom animation */
}

/* Keyframe animation for zooming in */
@keyframes zoomIn {
    from {
        transform: scale(1); /* Start with normal size */
    }
    to {
        transform: scale(1.2); /* Zoom in to 120% of original size */
    }
}

/* Keyframe animation for zooming out */
@keyframes zoomOut {
    from {
        transform: scale(1.2); /* Start with zoomed-in size */
    }
    to {
        transform: scale(1); /* Zoom out to normal size */
    }
}

/* Apply zoom-in animation on hover */
.about-img:hover img {
    animation: zoomIn 0.5s forwards; /* Run zoomIn animation on hover */
}

/* Apply zoom-out animation when not hovering */
.about-img:not(:hover) img {
    animation: zoomOut 0.5s forwards; /* Run zoomOut animation when not hovering */
}

.about-content{
    
    width: 50rem;
}
.about-content h3{
    margin-top: 3rem;
    font-size: 3.5rem;
    color: var(--main-color);
}
.about-content p{
    font-size: 1.7rem;
    color: var(--text-color);
    margin: 2rem 0 3rem;
}
  </style>