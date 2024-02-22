<template>
    <section class="contact" id="contact">
        <div class="container">
            <span class="big-circle"></span>
            <img src="img/shape.png" class="square" alt="" />
            <div class="form">
              <div class="contact-info">
                <h3 class="title">Let's get in touch</h3>
                <p class="text">
                  Get in touch with me via these forms of communication:
                </p>
      
                <div class="info">
                  <div class="information">
                    <i class='bx bxs-location-plus' ></i>
                    <p>6 Mahali Street, Delft, Cape Town, 7490</p>
                  </div>
                  <div class="information">
                    <i class='bx bxs-envelope'></i>
                    <p>abenathimdingi02@gmail.com</p>
                  </div>
                  <div class="information">
                    <i class='bx bx-phone' ></i>
                    <p>0606388088</p>
                  </div>
                </div>
      
                <div class="social-media">
                  <p>Connect with me :</p>
                  <div class="social-icons">
                    <a href="#">
                      <i class='bx bxl-facebook' ></i>
                    </a>
                    
                    <a href="https://www.linkedin.com/in/nkosiphendule-mdingi-957220232/">
                      <i class='bx bxl-linkedin' ></i>
                    </a>
                  </div>
                </div>
              </div>
      
              <div class="contact-form">
                <span class="circle one"></span>
                <span class="circle two"></span>
      
                <div>
                  <form id="contactForm">
                    <h3 class="title">Contact Me</h3>
              
                    <!-- Full name -->
                    <div class="input-container">
                      <input type="text" id="name" v-model= "formData.name" name="name" class="input"/>
                      <label for="name">Full name</label>
                      <div class="error">{{ errors.name }}</div>
                    </div>
              
                    <!-- Email -->
                    <div class="input-container">
                      <input type="email" id="email" v-model="formData.email" name="email" class="input"/>
                      <label for="email">Email</label>
                      <div class="error" >{{ errors.email }}</div>
                    </div>
              
                    <!-- Phone -->
                    <div class="input-container">
                      <input type="text" id="subject" v-model="formData.subject" name="subject" class="input" />
                      <label for="subject">Subject</label>
                      <div class="error" >{{ errors.subject }}</div>
                    </div>
              
                    <!-- Message -->
                    <div class="input-container textarea">
                      <textarea id="message" v-model="formData.message" name="message" class="input"></textarea>
                      <label for="message">Message</label>
                      <div class="error" >{{ errors.message }}</div>
                    </div>
              
                    <button type="submit" class="btnc" @click="submitForm">Send</button>

                  </form>
                </div>
                
                </div>
            </div>
        </div>
        <footer class="footer">
        <div class="footer-text">
            <p>Copyright &copy; 2023 by Nkosiphendule Mdingi | All Rights Reserved</p>
        </div>

        <div class="footer-iconTop">
            <a href="#home"><i class='bx bxs-to-top'></i></a>
        </div>
    </footer>
    </section>
    
</template>
<script>
import emailjs from 'emailjs-com';

emailjs.init('Pjy5Hblz6FWyfQWfe');

export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      errors: {}
    };
  },
  methods: {
    submitForm(event) {
  this.errors = {};
  event.preventDefault();

  if (this.validateForm()) {
    const templateParams = {
      name: this.formData.name,
      email: this.formData.email,
      subject: this.formData.subject,
      message: this.formData.message
    };

    emailjs.send('service_3hdfnz4', 'template_bkc8qz8', templateParams)
      .then((response) => {
        console.log('Email sent successfully:', response);
        alert('Form submitted successfully');

        this.formData = {
          name: '',
          email: '',
          subject: '',
          message: ''
        };
      }, (error) => {
        console.error('Email sending failed:', error);
        alert('Error submitting form');
      });
  }
},

    validateForm() {
      let isValid = true;

      if (!this.formData.name.trim()) {
        this.errors.name = 'Name is required';
        isValid = false;
      }

      if (!this.formData.email.trim()) {
        this.errors.email = 'Email is required';
        isValid = false;
      } else if (!this.isValidEmail(this.formData.email)) {
        this.errors.email = 'Invalid email format';
        isValid = false;
      }

      if (!this.formData.subject.trim()) {
        this.errors.subject = 'Subject is required';
        isValid = false;
      }

      if (!this.formData.message.trim()) {
        this.errors.message = 'Message is required';
        isValid = false;
      }

      return isValid;
    },
    isValidEmail(email) {
      const re = /^[\w-.]+@([\w-]+\.)+[\w-]{2,7}$/g;
      return re.test(String(email).toLowerCase());
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

.container {
    position: relative;
    width: 100%;
    min-height: 100vh;
    padding: 2rem;
    background-color: var(--second-bg-color);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}

.form {
  width: 100%;
  max-width: 920px;
  background-color: var(--bg-color);
  box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.contact-form {
  background-color: var(--main-color);
  position: relative;
}

.circle {
  border-radius: 50%;
  background: linear-gradient(135deg, transparent 20%, var(--main-color));
  position: absolute;
}

.circle.one {
  width: 130px;
  height: 130px;
  top: 130px;
  right: -40px;
}

.circle.two {
  width: 80px;
  height: 80px;
  top: 10px;
  right: 30px;
}

.contact-form:before {
  content: "";
  position: absolute;
  width: 26px;
  height: 26px;
  background-color: var(--main-color);
  transform: rotate(45deg);
  top: 50px;
  left: -13px;
}

form {
  padding: 2.3rem 2.2rem;
  z-index: 1;
  overflow: hidden;
  position: relative;
}

.title {
  color: var(--text-color);
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 2;
  margin-bottom: 1.2rem;
}

.input-container {
  position: relative;
  margin: 1rem 0;
}

.input {
  width: 100%;
  outline: none;
  border: 2px solid var(--text-color);
  background: none;
  padding: 0.6rem 1.2rem; 
  color: #fff;
  font-weight: 500;
  font-size: 0.95rem;
  letter-spacing: 0.5px;
  transition: 0.3s;
}

textarea.input {
  padding: 0.8rem 1.2rem;
  min-height: 140px;
  resize: none;
  overflow-y: auto;
}

.input-container label {
  position: absolute;
  top: -.5rem;
  left: -1rem;
  transform: translateY(-50%);
  padding: 0 0.4rem;
  color: var(--text-color);
  font-size: 0.9rem;
  font-weight: 400;
  pointer-events: none;
  z-index: 1000;
  transition: 0.5s;
}

.input-container.textarea label {
  top: -1rem;
  transform: translateY(0);
}

.btnc {
  padding: 0.6rem 1.3rem;
  background-color: var(--main-color);
  border: 2px solid var(--text-color);
  font-size: 0.95rem;
  color: var(--text-color);
  line-height: 1;
  outline: none;
  cursor: pointer;
  transition: 0.3s;
  margin: 0;
}

.btnc:hover {
  background-color: transparent;
  color: var(--bg-color);
}

.input-container span {
  position: absolute;
  top: 0;
  left: 25px;
  transform: translateY(-50%);
  font-size: 0.8rem;
  padding: 0 0.4rem;
  color: transparent;
  pointer-events: none;
  z-index: 500;
}
.error {
    font-size: .6rem;
    color: red;
    margin-top: 10px;
  }
.input-container span:before,
.input-container span:after {
  content: "";
  position: absolute;
  width: 10%;
  opacity: 0;
  transition: 0.3s;
  height: 5px;
  background-color: var(--main-color);
  top: 50%;
  transform: translateY(-50%);
}

.input-container span:before {
  left: 50%;
}

.input-container span:after {
  right: 50%;
}

.input-container.focus label {
  top: 0;
  transform: translateY(-50%);
  left: 25px;
  font-size: 0.8rem;
}

.input-container.focus span:before,
.input-container.focus span:after {
  width: 50%;
  opacity: 1;
}

.contact-info {
  padding: 2.3rem 2.2rem;
  position: relative;
}

.contact-info .title {
  color: var(--main-color);
}

.text {
  color: var(--main-color);
  margin: 1.5rem 0 2rem 0;
}

.information {
  display: flex;
  color: var(--main-color);
  margin: 0.7rem 0;
  align-items: center;
  font-size: 0.95rem;
}

.icon {
  width: 28px;
  margin-right: 0.7rem;
}

.social-media {
  padding: 2rem 0 0 0;
}

.social-media p {
  color: var(--second-bg-color);
}

.social-icons {
  display: flex;
  margin-top: 0.5rem;
}

.social-icons a {
  width: 35px;
  height: 35px;
  border-radius: 5px;
  background: linear-gradient(45deg, var(--main-color), var(--main-color));
  color: var(--bg-color);
  text-align: center;
  line-height: 35px;
  margin-right: 0.5rem;
  transition: 0.3s;
}

.social-icons a:hover {
  transform: scale(1.05);
}

.contact-info:before {
  content: "";
  position: absolute;
  width: 110px;
  height: 100px;
  border: 22px solid var(--main-color);
  border-radius: 50%;
  bottom: -77px;
  right: 50px;
  opacity: 0.3;
}

.big-circle {
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: linear-gradient(to bottom, var(--main-color), var(--main-color));
  bottom: 10%;
  right: 65%;
  transform: translate(-40%, 38%);
}

.big-circle:after {
  content: "";
  position: absolute;
  width: 360px;
  height: 360px;
  background-color: var(--second-bg-color);
  border-radius: 50%;
  top: calc(50% - 180px);
  left: calc(50% - 180px);
}

.square {
  position: absolute;
  height: 400px;
  top: 50%;
  left: 50%;
  transform: translate(181%, 11%);
  opacity: 0.2;
}

@media (max-width: 850px) {
  .form {
    grid-template-columns: 1fr;
  }

  .contact-info:before {
    bottom: initial;
    top: -75px;
    right: 65px;
    transform: scale(0.95);
  }

  .contact-form:before {
    top: -13px;
    left: initial;
    right: 70px;
  }

  .square {
    transform: translate(140%, 43%);
    height: 350px;
  }

  .big-circle {
    bottom: 75%;
    transform: scale(0.9) translate(-40%, 30%);
    right: 50%;
  }

  .text {
    margin: 1rem 0 1.5rem 0;
  }

  .social-media {
    padding: 1.5rem 0 0 0;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 1.5rem;
  }

  .contact-info:before {
    display: none;
  }

  .square,
  .big-circle {
    display: none;
  }

  form,
  .contact-info {
    padding: 1.7rem 1.6rem;
  }

  .text,
  .information,
  .social-media p {
    font-size: 0.8rem;
  }

  .title {
    font-size: 1.15rem;
  }

  .social-icons a {
    width: 30px;
    height: 30px;
    line-height: 30px;
  }

  .icon {
    width: 23px;
  }

  .input {
    padding: 0.45rem 1.2rem;
  }

  .btnc {
    padding: 0.45rem 1.2rem;
  }
}
.footer{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 2rem 9%;
    background: var(--bg-color);
}
.footer-text p{
    font-size: 1.2rem;
}
.footer-iconTop a{
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: .8rem;
    background: var(--main-color);
    border: .2rem solid var(--main-color);
    border-radius: .6rem;
    z-index: 1;
    overflow: hidden;
}
.footer-iconTop a::before{
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 0;
    height: 100%;
    background: var(--second-bg-color);
    z-index: -1;
    transition: .5s;
}
.footer-iconTop a:hover:before{
    width: 100%;
}
.footer-iconTop a i {
    font-size: 2rem;
    color: var(--bg-color);
    transition: .5s;
}
.footer-iconTop a:hover i {
    color: var(--main-color);
}


</style>