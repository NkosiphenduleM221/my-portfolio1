<template>
    <section class="education" id="education">
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
    </section>
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
    padding: 40px;
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
    flex: 640px 640px; 
    max-width: 640px; 
}

.education-column .title,
.experience-column .title {
    font-size: 32px;
    margin: 0 0 24px 32px;
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
    margin-top: 160px;
}
.experience-column .education-content:nth-child(1){
    margin-top: 160px;
}
.experience-column .education-content:nth-child(2){
    margin-top: 160px;
} 

.education-box .education-content {
    position: relative;
    padding-left: 32px;
}
.education-box .education-content::before{
    content: "";
    position: absolute;
    top: 0;
    left: -17.6px;
    width: 32px;
    height: 32px;
    background: var(--main-color);
    border-radius: 50%;
}
.education-column .education-box .education-content::before{
    content: "";
    position: absolute;
    top: 0;
    left: 98%;
    width: 32px;
    height: 32px;
    background: var(--main-color);
    border-radius: 50%;
}
.education-content .content {
    position: relative;
    padding: 24px;
    margin-bottom: 48px;
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
    font-size: 20.8px;
    color: var(--main-color);
    padding-bottom: 8px;
}
.education-content .content .year i{
    padding-right: 11.2px;
}
.education-content .content h3{
    font-size: 32px;
}
.heading {
    font-size: 51.2px;
}
.heading span{
    color: var(--main-color);
}
@media (max-width: 768px) {
    .education-column .education-box {
        border-right: none; /* Remove the border on the right */
        border-left: .2rem solid var(--main-color); /* Add border on the left */
    }
    .education-column .education-box .education-content::before{
        left: -17.6px;
    }
}

@media (min-width: 769px) {
    .education-column .education-box {
        border-left: none; /* Remove the border on the left */
        border-right: .2rem solid var(--main-color); /* Add border on the right */
    }
    .education-column .education-box .education-content::before{
        left: 98%px;
    }
}

</style>