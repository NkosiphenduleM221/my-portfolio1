<template>
    <section class="portfolio" id="portfolio">
        <h1 class="heading">My <span>Project</span></h1>
        <div class="box-container">
            <div class="box">
                <div class="image">
                  <h2>Company Website</h2>
                  <img :src="cwImage" alt="">
                </div>
                    <div class="content">
                      <p>This project is a website development it showcases various technologies such as HTML, CSS, JavaScript, React.Js and Node.Js used in the development process.</p>
                    </div>
                    <div class="btn a">View</div>
            </div>
    
            <div class="box">
                <div class="image app">
                  <h2>Banking App</h2>
                  <img :src="baImage" alt="" >
                </div>
                    <div class="content">
                      
                      <p>This project is a banking application implemented in Python. It includes features such as account management, transactions, and more.</p>
                    </div>
                    <div class="btn b">View</div>
                
            </div>
    
            <div class="box">
                <div class="image">
                  <h2>Metric Converter</h2>
                  <img :src="mcImage" alt="">
                </div>
                    <div class="content">
                      
                      <p>The Metric Converter project provides a tool for converting between different metric units. It's a useful utility for various conversion tasks.</p> 
                    </div>
                    <div class="btn c">View</div>
                
            </div>
    
            <div class="box">
                <div class="image">
                  <h2>Financial Calculator</h2>
                  <img :src="fcImage" alt=""> 
                </div>
                    <div class="content">
                   
                      <p>This Financial Calculator project helps users with various financial calculations, such as compound interest, loan payments, and other financial planning calculations.</p>  
                    </div>
                    <div class="btn d">View</div>
                
            </div>
            <div class="box">
              <div class="image">
                <h2>Tax Calculator</h2>
                <img :src="tcImage" alt=""> 
              </div>  
                  <div class="content">
                      
                      <p>This Tax Calculator project helps users with various tax calculations, such as tax rebates, uif calculations, and other tax calculations.</p>
                      
                  </div>
                  <div class="btn e">View</div>
              
          </div>
        </div>
    </section>
</template>
<script>
export default {
  data() {
    return {
      cwImage: require('@/assets/projects/company-website.png'),
      baImage: require('@/assets/projects/Bank App.png'),
      mcImage: require('@/assets/projects/MetricConverter.png'),
      fcImage: require('@/assets/projects/Financial_Calculator.png'),
      tcImage: require('@/assets/projects/Tax Calculator.png')
    }
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

 .portfolio{
    background-color: var(--bg-color);
    padding-bottom: 5rem;
  }
  .portfolio .heading{
    text-align: center;
    padding-bottom: 5rem;
  }

  .portfolio .box-container .box .image {
    height: 20rem;
    width: 18rem;
    overflow: hidden;
    position: relative;
  }
  .portfolio .box-container .box .image img{
    height: 10rem;
    width: 15rem;
  }
  .portfolio .box-container .box{
    height: 55rem;
  }
  
  .portfolio .box-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    gap: 2rem;
  }
  .portfolio .box-container .box {
    background-color: var(--second-bg-color);
    padding: 1rem 1rem;
    box-shadow: var(--box-shadow);
  }
  
  
  .portfolio .box-container .box .image h2 {
    font-size: 2rem;
    color: var(--main-color);
    letter-spacing: 0.1rem;
    text-transform: uppercase;
  }
  
  .portfolio .box-container .box .content  p {
    font-size: 1.5rem;
    color: var(--text-color);
    letter-spacing: 0.1rem;
  }
  
.portfolio .box-container .box .content {
  width: 15rem;
}
.portfolio .box-container .box .btn{
  position: relative;
  left: 1rem;
  background-color: var(--main-color);
  width: 4.5rem;
  height: 2.5rem;
  color: var(--bg-color);
  text-align: center;
  top: 5rem;
  font-size: 1.4rem;
  padding: .1rem;
  border-radius: 10%;
  border: solid .1rem var(--contact-color);
}
.portfolio .box-container .box .a {
  position: relative;
  bottom: 50rem;
}
.portfolio .box-container .box .b {
  position: relative;
  top: 9.5rem;
}
.portfolio .box-container .box .c{
  position: relative;
  top: 12rem;
}
.portfolio .box-container .box .e{
  position: relative;
  top: 12rem;
}
.portfolio .box-container{
  padding: 4rem;
}
.portfolio .box-container .box .app{
  position: relative;
  top: 3.2rem;
}
</style>