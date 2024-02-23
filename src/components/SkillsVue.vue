<template>
    <section class="skills" id="skills">
      <h1 class="heading">My <span>Skills</span></h1>
      <div class="skills-column1">

      <h3 class="title"><span>Professional</span> Skills</h3>
      <div class="box-container">
        
          <div class="box">
              <div class="image">
                  <div class="content">
                    
                    <h3>Web Design and Development</h3> 
                  </div>
              </div>
          </div>
  
          <div class="box">
              <div class="image">
            
                  <div class="content">   
                    <h3>Software Design and Development</h3>  
                  </div>
              </div>
          </div>
  
          <div class="box">
              <div class="image">
                  <div class="content">  
                    <h3>System Analysis</h3>    
                  </div>
              </div>
          </div>
  
          <div class="box">
              <div class="image">
                  <div class="content">
                    <h3>Database Programming</h3>
                      
                  </div>
              </div>
          </div>
          <div class="box">
            <div class="image">
                <div class="content">
                  <h3>Data Analytics</h3>
                
                </div>
            </div>
        </div>
      </div>
    </div>
      <div class="skills-column2">
                
        <h3 class="title"><span>Tech</span> Stack</h3>
        <div class="box-container">
        

        <div class="box">
              <div class="image">
                  <div class="content">
                    <div class="pie-chart java">
                       <div class="slice slice1"></div>
                       <div class="slice slice2"></div>
                       <div class="slice slice3"></div>
                    </div>
                    <h3><i class='bx bxl-java' ></i></h3> 
                  </div>
              </div>
          </div>
  
          <div class="box">
              <div class="image">
                  <div class="content"> 
                    <div class="pie-chart python">
                       <div class="slice slice1"></div>
                       <div class="slice slice2"></div>
                       <div class="slice slice3"></div>
                    </div> 
                    <h3><i class='bx bxl-python' ></i></h3>  
                  </div>
              </div>
          </div>
  
          <div class="box">
              <div class="image">
                  <div class="content">
                    <div class="pie-chart vue">
                       <div class="slice slice1"></div>
                       <div class="slice slice2"></div>
                       <div class="slice slice3"></div>
                    </div>
                    <h3><i class='bx bxl-vuejs' ></i></h3>    
                  </div>
              </div>
          </div>
  
          <div class="box">
              <div class="image">
                  <div class="content">
                    <div class="pie-chart node">
                       <div class="slice slice1"></div>
                       <div class="slice slice2"></div>
                       <div class="slice slice3"></div>
                    </div>
                    <h3><i class='bx bxl-nodejs' ></i></h3>
                      
                  </div>
              </div>
          </div>
          <div class="box">
            <div class="image">
                <div class="content">
                    <div class="pie-chart js">
                       <div class="slice slice1"></div>
                       <div class="slice slice2"></div>
                       <div class="slice slice3"></div>
                    </div>
                  <h3><i class='bx bxl-javascript' ></i></h3>
                
                </div>
            </div>
        </div>
        <div class="box">
            <div class="image">
                <div class="content">
                    <div class="pie-chart html">
                       <div class="slice slice1"></div>
                       <div class="slice slice2"></div>
                       <div class="slice slice3"></div>
                    </div>
                  <h3><i class='bx bxl-html5' ></i></h3>
                
                </div>
            </div>
        </div>
        <div class="box">
            <div class="image">
                <div class="content">
                    <div class="pie-chart css">
                       <div class="slice slice1"></div>
                       <div class="slice slice2"></div>
                       <div class="slice slice3"></div>
                    </div>
                  <h3><i class='bx bxl-css3'></i></h3>
                
                </div>
            </div>
        </div>
        <div class="box">
            <div class="image">
                <div class="content">
                    <div class="pie-chart react">
                       <div class="slice slice1"></div>
                       <div class="slice slice2"></div>
                       <div class="slice slice3"></div>
                    </div>
                 <h3><i class='bx bxl-react' ></i></h3>
                
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
.skills{
    background-color: var(--second-bg-color);
}
.skills .heading{
    color: var(--text-color);
    text-align: center;
    font-size: 56px;
}
.skills .box-container .box .image {
    height: 180px;
    width: 292px;
    overflow: hidden;
    position: relative;
    margin-left: 36px;
  }
  span{
    color: var(--main-color);
  }
  .skills .box-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 40px;
    margin-top: 40px;
    padding: 48px;
  }
  .skills .box-container .box {
    background-color: var(--bg-color);
    padding: 24px;
  }
 
  .skill .box-container .box .image .content {
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: var(--main-color);
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateY(100%);
  }
  .skills .box-container .box .image .content h3 {
    font-size: 24px;
    color: var(--main-color);
    text-transform: uppercase;
  }
  .title{
    color: var(--text-color);
    text-align: center;
    font-size: 84px;
    font-weight: 700;
  }
  .skills-column2 .title{
    margin-top: 16px;
  }
  .pie-chart {
    width: 100px;
    height: 100px; 
    position: relative;
    border-radius: 50%;
    overflow: hidden;
  }
  
  .slice {
    position: absolute;
    justify-content: center;
    margin-right: 2rem;
    width: 100%;
    height: 100%;
    clip: rect(0, 50px, 100px, 0); 
  }
  
  .slice1 {
    background-color: var(--second-bg-color); 
    transform: rotate(0deg); 
  }
  
  .slice2 {
    background-color: var(--main-color); 
    transform: rotate(180deg); 
  }
  .slice3 {
    background-color: var(--second-bg-color);
    transform: rotate(45deg);
  }
  
  .skills-column2 .box-container{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 50px;
    
  }
  .skills-column2 .box-container .box .image{
    height: 200px;
    width: 200px;
    overflow: hidden;
    position: relative;
    
  }
  .skills-column2 .box-container .box .image .content h3 i {
    text-align: center;
    position: relative;
    left: 16px;
    font-size: 56px;
  }
  
  .java .slice3{
    background-color: var(--main-color);
    transform: rotate(35deg);
  }
  
  .python .slice2{
    background-color: var(--main-color);
    transform: rotate(30deg);
  }
  .python .slice3{
    background-color: var(--main-color);
    transform: rotate(180deg);
  }
  .vue .slice3{
    background-color: var(--main-color);
    transform: rotate(85deg);
  }
  .node .slice3{
    background-color: var(--main-color);
    transform: rotate(85deg);
  }
  .js .slice3{
    background-color: var(--main-color);
    transform: rotate(30deg);
  }
  .html .slice3{
    background-color: var(--main-color);
    transform: rotate(20deg);
  }
  .css .slice3{
    background-color: var(--main-color);
    transform: rotate(20deg);
  }
  .react .slice3{
    background-color: var(--main-color);
    transform: rotate(85deg);
  }

</style>