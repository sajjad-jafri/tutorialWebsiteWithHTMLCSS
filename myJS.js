//Loading Navigation
document.addEventListener("DOMContentLoaded", function() {
    fetch('../nav.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('nav-placeholder').innerHTML = data;

         // Ensure the elements exist before adding event listeners
            let menuBtn = document.querySelector('#menu-btn');
            let navbar = document.querySelector('.header .flex .navbar');

            if (menuBtn && navbar) {
                menuBtn.onclick = () => {
                    menuBtn.classList.toggle('fa-times');
                    navbar.classList.toggle('active');
                };
            }
        });
});



//course swiper
var swiper = new Swiper(".course-slider", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    540: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});


//review swiper
var swiper = new Swiper(".reviews-slider", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    540: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});


//Send Email from contact us 
const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method not allowed' }),
    };
  }

  const { name, email, message } = JSON.parse(event.body);

  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USERR, // Environment variable for your email address
      pass: process.env.EMAIL_PASSS, // Environment variable for your email password or app password
    },
  });

  let mailOptions = {
    from: process.env.EMAIL_USERR, // Use environment variable for the sender's email
    to: email,
    subject: 'Thank You for Your Message!',
    text: `Hi ${name},\n\nThank you for reaching out. We have received your message:\n\n${message}\n\nWe will get back to you soon.\n\nBest regards,\nYour Company`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Failed to send email' }),
    };
  }
};