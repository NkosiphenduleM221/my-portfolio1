<template>
    <div class="education" id="education">
        <h2 class="heading">My <span>Journey</span></h2>

        <div class="education-row">
            <div class="education-column">
                <h3 class="title">Education</h3>

                <div class="education-box">
                    <div class="education-content">
                        
                        <div class="content">
                            <div class="year"><i class='bx bxs-calendar'></i>2015 - 2019</div>
                            <h3>National Senior Certificate - Entsikeni Senior Sec. School</h3>
                            

                        </div>
                    </div>
                    <div class="education-content"> 
                        <div class="content">
                            <div class="year"><i class='bx bxs-calendar'></i>2020 - 2022</div>
                            <h3>Bachelor of Science in Computer Science and Information Technology - University of Kwazulu-Natal</h3>
                            
                            
                        </div>
                    </div>
                    
                </div>
            </div>
            <div class="experience-column">
                <h3 class="title">Experience</h3>

                <div class="education-box">
                    <div class="education-content">
                        <div class="content">
                            <div class="year"><i class='bx bxs-calendar'></i>2023 - 2024</div>
                            <h3>FullStack Software Developer Intern - CapaCiTi</h3>
                            

                        </div>
                    </div>
                 
                    <div class="education-content">
                        <div class="content">
                            <div class="year"><i class='bx bxs-calendar'></i>2024 - </div>
                            <h3>Junior Software Developer - Younglings</h3>
                            

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
    
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

.education {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    padding-bottom: 5rem;
    background-color: var(--bg-color);
    color: var(--text-color);
}

.education .education-row {
    display: flex;
    flex-wrap: wrap;
    gap: 0;
}

.education-row .education-column,
.education-row .experience-column {
    flex: 50rem 50rem; 
    max-width: 50rem; 
}

.education-column .title,
.experience-column .title {
    font-size: 3rem;
    margin: 0 0 1.5rem 2rem;
}

.education-column .education-box {
    border-right: .2rem solid var(--main-color);
}

.experience-column .education-box {
    border-left: .2rem solid var(--main-color);
    right: .2rem;
    position: relative;
}
.education-column .education-content:nth-child(2){
    margin-top: 15rem;
}
.experience-column .education-content:nth-child(1){
    margin-top: 15rem;
}
.experience-column .education-content:nth-child(2){
    margin-top: 15rem;
} 

.education-box .education-content {
    position: relative;
    padding-left: 2rem;
}
.education-box .education-content::before{
    content: "";
    position: absolute;
    top: 0;
    left: -1.1rem;
    width: 2rem;
    height: 2rem;
    background: var(--main-color);
    border-radius: 50%;
}
.education-column .education-box .education-content::before{
    content: "";
    position: absolute;
    top: 0;
    left: 98%;
    width: 2rem;
    height: 2rem;
    background: var(--main-color);
    border-radius: 50%;
}
.education-content .content {
    position: relative;
    padding: 1.5rem;
    margin-bottom: 3rem;
    overflow: hidden;
}
.education-content .content::before{
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 0;
    height: 100%;
    background: var(--bg-color);
    z-index: -1;
}
.education-content .content:hover:before{
    width: 100%;
}
.education-content .content .year{
    font-size: 1.9rem;
    color: var(--main-color);
    padding-bottom: .5rem;
}
.education-content .content .year i{
    padding-right: .7rem;
}
.education-content .content h3{
    font-size: 2.5rem;
}
.heading {
    font-size: 3.6rem;
}
.heading span{
    color: var(--main-color);
}

</style>