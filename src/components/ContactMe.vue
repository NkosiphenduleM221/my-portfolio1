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
                    <div class="g-recaptcha" :data-sitekey="rcapt_sig_key">
                    <button type="submit" class="btnc" @click="submitForm">Send</button>
                  </div>
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
/* global grecaptcha */
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
      errors: {},
      
    };
  },
  methods: {
    submitForm(event) {
  this.errors = {};
  event.preventDefault();

  grecaptcha.ready(() => {
    grecaptcha.execute('6Lf86XspAAAAABPcljUYt_L42Ng3TInsd7s5K_Jy', { action: 'submit' }).then((recaptchaResponse) => {
      if (!recaptchaResponse) {
        alert('reCAPTCHA verification failed');
        return;
      }

      // Perform form validation
      if (this.validateForm()) {
        // If form validation passes, proceed with form submission
        const templateParams = {
          name: this.formData.name,
          email: this.formData.email,
          subject: this.formData.subject,
          message: this.formData.message,
          recaptchaResponse: recaptchaResponse // Add reCAPTCHA response to template params
        };

        emailjs.send('service_3hdfnz4', 'template_bkc8qz8', templateParams)
          .then((response) => {
            console.log('Email sent successfully:', response);
            alert('Form submitted successfully');

            // Clear form fields after successful submission
            this.formData = {
              name: '',
              email: '',
              subject: '',
              message: ''
            };
          })
          .catch((error) => {
            console.error('Email sending failed:', error);
            alert('Error submitting form');
          });
      }
    });
  });
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
      const re = /^[\w-.]+@([\w-]+\.)+[\w-]{2,7}$/;
      return re.test(String(email).toLowerCase());
    }
  },
  mounted() {
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js?render=6Lf86XspAAAAABPcljUYt_L42Ng3TInsd7s5K_Jy'
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
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
    padding: 32px;
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
  padding: 36.8px 35.2px;
  z-index: 1;
  overflow: hidden;
  position: relative;
}

.title {
  color: var(--text-color);
  font-weight: 500;
  font-size: 24px;
  line-height: 2;
  margin-bottom: 19.2px;
}

.input-container {
  position: relative;
  margin: 16px 0;
}

.input {
  width: 100%;
  outline: none;
  border: 2px solid var(--text-color);
  background: none;
  padding: 9.6px 19.2px; 
  color: #fff;
  font-weight: 500;
  font-size: 15.2px;
  letter-spacing: 8px;
  transition: 0.3s;
}

textarea.input {
  padding: 12.8px 19.2px;
  min-height: 140px;
  resize: none;
  overflow-y: auto;
}

.input-container label {
  position: absolute;
  top: -8px;
  left: -16px;
  transform: translateY(-50%);
  padding: 0 6.4px;
  color: var(--text-color);
  font-size: 14.4px;
  font-weight: 400;
  pointer-events: none;
  z-index: 1000;
  transition: 0.5s;
}

.input-container.textarea label {
  top: -16px;
  transform: translateY(0);
}

.btnc {
  padding:9.6px 20.8px;
  background-color: var(--main-color);
  border: 2px solid var(--text-color);
  font-size: 15.2px;
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
  font-size: 12.8px;
  padding: 0 6.4px;
  color: transparent;
  pointer-events: none;
  z-index: 500;
}
.error {
    font-size: 9.6px;
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
  font-size: 12.8px;
}

.input-container.focus span:before,
.input-container.focus span:after {
  width: 50%;
  opacity: 1;
}

.contact-info {
  padding: 36.8px 35.2px;
  position: relative;
}

.contact-info .title {
  color: var(--main-color);
}

.text {
  color: var(--main-color);
  margin: 24px 0 32px 0;
}

.information {
  display: flex;
  color: var(--main-color);
  margin: 11.2px 0;
  align-items: center;
  font-size: 15.2px;
}

.icon {
  width: 28px;
  margin-right: 11.2px;
}

.social-media {
  padding: 32px 0 0 0;
}

.social-media p {
  color: var(--second-bg-color);
}

.social-icons {
  display: flex;
  margin-top: 8px;
}

.social-icons a {
  width: 35px;
  height: 35px;
  border-radius: 5px;
  background: linear-gradient(45deg, var(--main-color), var(--main-color));
  color: var(--bg-color);
  text-align: center;
  line-height: 35px;
  margin-right: 8px;
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
    margin: 16px 0 24px 0;
  }

  .social-media {
    padding: 24px 0 0 0;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 24px;
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
    padding: 27.2px 25.6px;
  }

  .text,
  .information,
  .social-media p {
    font-size: 12.8px;
  }

  .title {
    font-size: 18.4px;
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
    padding: 7.2px 19.2px;
  }

  .btnc {
    padding: 7.2px 19.2px;
  }
}
.footer{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 32px 9%;
    background: var(--bg-color);
}
.footer-text p{
    font-size: 19.2px;
}
.footer-iconTop a{
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 12.8px;
    background: var(--main-color);
    border: 3.2px solid var(--main-color);
    border-radius: 9.6px;
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
    font-size: 32px;
    color: var(--bg-color);
    transition: .5s;
}
.footer-iconTop a:hover i {
    color: var(--main-color);
}


</style>