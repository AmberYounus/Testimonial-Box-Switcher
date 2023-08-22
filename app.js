const testimonialsContainer = document.querySelector(".testimonial-box");
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-image");
const username = document.querySelector(".username");
const role = document.querySelector(".role");

const testimonials = [
  {
    name: "yuka nwe",
    position: "Marketing",
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6",
    text: "I've dealt with a LOT of HTML/CSS engineers, and I have to say that this man takes the cake. What a brilliant developer this guy is. He emphasises writing clean, good code and pays attention to the details. I adore programmers that take the time to carefully implement every element of a well-thought-out design. He goes above and beyond and consistently and flawlessly converts ART into PIXELS.",
  },
  {
    name: "SOnka yuk",
    position: "Software Engineer",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "I was worried that this project couldn't be completed because of the short timeframe. But this guy proved me incorrect since in addition to producing excellent work, he also managed to meet the deadline by one day. And when I requested changes, he responded in MINUTES. I'm eager to collaborate with him once more and heartily endorse him. Thanks once more",
  },
  {
    name: "Tina mew",
    position: "Graphic Designer",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "This man is a top-notch front end developer and designer. His work is of high quality, and he works quickly. We are fortunate to have worked with him! ",
  },
  {
    name: "Teko mas",
    position: "Software Engineer",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "This guy is a bright, proactive, conscientious, and hardworking young IT worker. He excels at HTML/CSS technologies and PSD2HTML conversions. He is enthusiastic to pick up new technology and a quick learner. He is determined and dynamic enough to meet deadlines and provide excellent results.        ",
  },
  {
    name: "Nawlo tend",
    position: "Marketing",
    photo:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb",
    text: "This man is a top-notch front end developer and designer. His work is of high quality, and he works quickly. We are fortunate to have worked with him!        ",
  },
  {
    name: "Oivy Tus",
    position: "Software Engineer",
    photo: "https://randomuser.me/api/portraits/men/97.jpg",
    text: "This guy is a bright, proactive, conscientious, and hardworking young IT worker. He excels at HTML/CSS technologies and PSD2HTML conversions. He is enthusiastic to pick up new technology and a quick learner. He is determined and dynamic enough to meet deadlines and provide excellent results.        ",
  },
  {
    name: "Pesma khi",
    position: "Data Entry",
    photo: "https://randomuser.me/api/portraits/men/97.jpg",
    text: "I was worried that this project couldn't be completed because of the short timeframe. But this guy proved me incorrect since in addition to producing excellent work, he also managed to meet the deadline by one day. And when I requested changes, he responded in MINUTES. I'm eager to collaborate with him once more and heartily endorse him. Thanks once more        ",
  },
  {
    name: "Eroden Te",
    position: "Marketing",
    photo: "https://randomuser.me/api/portraits/men/97.jpg",
    text: "This guy is a bright, proactive, conscientious, and hardworking young IT worker. He excels at HTML/CSS technologies and PSD2HTML conversions. He is enthusiastic to pick up new technology and a quick learner. He is determined and dynamic enough to meet deadlines and provide excellent results.",
  },
  {
    name: "Qyuod erop",
    position: "Marketing",
    photo: "https://randomuser.me/api/portraits/men/97.jpg",
    text: "I was worried that this project couldn't be completed because of the short timeframe. But this guy proved me incorrect since in addition to producing excellent work, he also managed to meet the deadline by one day. And when I requested changes, he responded in MINUTES. I'm eager to collaborate with him once more and heartily endorse him. Thanks once more        ",
  },
  {
    name: "yuko de",
    position: "Marketing",
    photo: "https://randomuser.me/api/portraits/men/97.jpg",
    text: "This man makes every effort to do the task successfully. I've employed him twice before, and I'll do it again in the future.",
  },
  {
    name: "ferea tyu",
    position: "Receptionist",
    photo: "https://randomuser.me/api/portraits/men/97.jpg",
    text: "This man makes every effort to do the task successfully. I've employed him twice before, and I'll do it again in the future. ",
  },
];

let idx = 1;
function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx];
  testimonial.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;
  role.innerHTML = position;

  idx++;
  if (idx > testimonials.length - 1) {
    idx = 0;
  }
}
setInterval(updateTestimonial, 10000);
