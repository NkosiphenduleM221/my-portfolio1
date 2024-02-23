<template>
  <section class="portfolio" id="portfolio">
      <h1 class="heading">My <span>Work</span></h1>
      <div class="box-container">
          <div class="box">
              <div class="image">
                <h2>Company Website</h2>
                <img :src="cwImage" alt="">
              </div>
                  <div class="content">
                    <p>This project is a website development it showcases various technologies such as HTML, CSS, JavaScript, React.Js and Node.Js used in the development process.</p>
                  </div>
                  <div class="btn a" @click="showPopup('company')">View</div>
          </div>
  
          <div class="box">
              <div class="image app">
                <h2>Banking App</h2>
                <img :src="baImage" alt="" >
              </div>
                  <div class="content">
                    
                    <p>This project is a banking application implemented in Python. It includes features such as account management, transactions, and more.</p>
                  </div>
                  <div class="btn b" @click="showPopup('banking')">View</div>
              
          </div>
  
          <div class="box">
              <div class="image">
                <h2>Metric Converter</h2>
                <img :src="mcImage" alt="">
              </div>
                  <div class="content">
                    
                    <p>The Metric Converter project provides a tool for converting between different metric units. It's a useful utility for various conversion tasks.</p> 
                  </div>
                  <div class="btn c" @click="showPopup('metric')">View</div>
              
          </div>
  
          <div class="box">
              <div class="image">
                <h2>Financial Calculator</h2>
                <img :src="fcImage" alt=""> 
              </div>
                  <div class="content">
                 
                    <p>This Financial Calculator project helps users with various financial calculations, such as compound interest, loan payments, and other financial planning calculations.</p>  
                  </div>
                  <div class="btn d" @click="showPopup('financial')">View</div>
              
          </div>
          <div class="box">
            <div class="image">
              <h2>Tax Calculator</h2>
              <img :src="tcImage" alt=""> 
            </div>  
                <div class="content">
                    
                    <p>This Tax Calculator project helps users with various tax calculations, such as tax rebates, uif calculations, and other tax calculations.</p>
                    
                </div>
                <div class="btn e" @click="showPopup('tax')">View</div>
            
        </div>
      </div>
      
      <!-- Popup -->
      <div class="popup" v-if="showPopupFlag">

        <div class="popup-content">
          <span class="close" @click="closePopup">&times;</span>
          <h2>Project Title: <span>{{ projectDetails.title }}</span></h2>
          <p>Description: <span>{{ projectDetails.description }}</span></p>
          <p>Duration: <span>{{ projectDetails.duration }}</span></p>
          <p>Role: <span>{{ projectDetails.role }}</span></p>
          <p>Key Contributions: <span>{{ projectDetails.keyContributions }}</span></p>
          <p>Technologies Used: <span>{{ projectDetails.technologiesUsed }}</span></p>
          <p>Outcome/Results: <span>{{ projectDetails.outcome }}</span></p>
          <p>Link to Project: <span>{{ projectDetails.projectLink }}</span></p>
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
    tcImage: require('@/assets/projects/Tax Calculator.png'),
    showPopupFlag: false,
    popupContent: ''
  }
},
methods: {
  showPopup(project) {
    this.showPopupFlag = true;
    switch (project) {
      case 'company':
        this.projectDetails = {
          title: 'Company Website',
          description: 'This project is a website development showcasing various technologies such as HTML, CSS, JavaScript, React.js, and Node.js used in the development process...',
          duration: 'July 2023 - September 2023',
          role: 'Developer',
          keyContributions: 'Implemented front-end design and functionality using HTML, CSS, and JavaScript. Integrated React.js components and utilized Node.js for backend development...',
          technologiesUsed: 'HTML, CSS, JavaScript, React.js, Node.js',
          outcome: 'Successfully launched the website, providing a modern and responsive user experience.',
          projectLink: 'https://versatile-programmers.netlify.app/'
        };

        break;
        case 'banking':
        this.projectDetails = {
          title: 'Banking App',
          description: 'This project is a banking application implemented in Python using SQLite3 for database management. It includes features such as account management, transactions, and more...',
          duration: 'September 2023 - October 2023',
          role: 'Developer',
          keyContributions: 'Implemented account management,transaction features and user interface with Tinkter',
          technologiesUsed: 'Python, SQLite3',
          outcome: 'Improved user experience through efficient account management and transaction processing',
          projectLink: 'https://github.com/NkosiphenduleM221/Banking-App'
        };

        break;
        case 'metric':
        this.projectDetails = {
          title: 'Metric Converter',
          description: 'The Metric Converter project provides a tool for converting between different metric units. It\'s a useful utility for various conversion tasks...',
          duration: 'October 2023 - October 2023',
          role: 'Developer',
          keyContributions: 'Implemented the conversion algorithms and user interface with swing',
          technologiesUsed: 'Python',
          outcome: 'Provided users with a convenient tool for metric unit conversion',
          projectLink: 'https://github.com/NkosiphenduleM221/Metric_Converter'
        };

        break;
        case 'financial':
        this.projectDetails = {
          title: 'Financial Calculator',
          description: 'The Financial Calculator project provides users with tools for various financial calculations, including compound interest, loan payments, and other financial planning calculations...',
          duration: 'October 2023 - November 2023',
          role: 'Developer',
          keyContributions: 'Implemented the calculation algorithms and user interface',
          technologiesUsed: 'Python',
          outcome: 'Empowered users with a comprehensive tool for financial planning and calculations',
          projectLink: 'https://github.com/NkosiphenduleM221/Metric_Converter'
        };
         
        break;
        case 'tax':
        this.projectDetails = {
          title: 'Tax Calculator',
          description: 'The Tax Calculator project helps users with various tax calculations, such as tax rebates, UIF calculations, and other tax-related calculations',
          duration: 'November 2023 - December 2023',
          role: 'Developer',
          keyContributions: 'Implemented tax calculation algorithms and user interface',
          technologiesUsed: 'Java',
          outcome: 'Facilitated users with an efficient tool for tax planning and calculations',
          projectLink: 'https://github.com/NkosiphenduleM221/Tax-Calculator'
        };

        break;
      default:
        this.projectDetails = null;
    }
  },
  closePopup() {
    this.showPopupFlag = false;
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
    padding-bottom: 80px;
  }
  .portfolio .heading{
    text-align: center;
    padding-bottom: 80px;
  }

  .portfolio .box-container .box .image {
    height: 320px;
    width: 288px;
    overflow: hidden;
    position: relative;
  }
  .portfolio .box-container .box .image img{
    height: 160px;
    width: 240px;
  }
  .portfolio .box-container .box{
    height: 880px;
  }
  
  .portfolio .box-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 32px;
  }
  .portfolio .box-container .box {
    background-color: var(--second-bg-color);
    padding: 16px 16px;
    box-shadow: var(--box-shadow);
  }
  
  
  .portfolio .box-container .box .image h2 {
    font-size: 32px;
    color: var(--main-color);
    letter-spacing: 1.6px;
    text-transform: uppercase;
  }
  
  .portfolio .box-container .box .content  p {
    font-size: 24px;
    color: var(--text-color);
    letter-spacing: 1.6px;
  }
  
.portfolio .box-container .box .content {
  width: 240px;
}
.portfolio .box-container .box .btn{
  position: relative;
  left: 16px;
  background-color: var(--main-color);
  width: 72px;
  height: 40px;
  color: var(--bg-color);
  text-align: center;
  top: 80px;
  font-size: 22.4px;
  padding: 1.6px;
  border-radius: 10%;
  border: solid 1.6px var(--contact-color);
}
.portfolio .box-container .box .a {
  position: relative;
  bottom: 800px;
}
.portfolio .box-container .box .b {
  position: relative;
  top: 152px;
}
.portfolio .box-container .box .c{
  position: relative;
  top: 192px;
}
.portfolio .box-container .box .e{
  position: relative;
  top: 192px;
}
.portfolio .box-container{
  padding: 64px;
}
.portfolio .box-container .box .app{
  position: relative;
  top: 51.2px;
}
.popup {
    position: fixed; 
    top: 0; 
    left: 50%; 
    transform: translateX(-50%); 
    width: 80%; 
    max-width: 650px;
    background-color: var(--bg-color);
    padding: 20px;
    border: 1px solid var(--second-bg-color);
    z-index: 999; 
}
.popup-content .close {
   width: 90px;
   font-size: 32px;
}
.popup-content h2{
  font-size: 48px;
  font-weight: 900;
}
.popup-content p {
  font-size: 24px;
  color: var(--text-color);
}
</style>