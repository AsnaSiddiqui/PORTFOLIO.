import Image from "next/image";
import Header from "./components/header/page";
import Mine from "./components/image/mines.jpeg"
import Animation from "./components/image/animation.png"
import Email from "./components/image/email.png"
import Github from "./components/image/github.png"
import Linkedin from "./components/image/linkedin.png"


export default function Home() {
  return (
      <div>
        <Header/>

      <div className="main">
        <div className="leftside">
        <h5>Hello, Welcome</h5>
        <h1>I am <span>Asna Siddiqui</span></h1>
        <h4>WEB DEVELOPER</h4>
        <p>I am a web developer passionate about creating responsive,
           visually appealing websites that prioritize user experience and functionality.</p>
        </div>
        <div className="rightside">
        <Image src={Mine} alt="image"/>
        </div>
      </div>


      <div className="about" id="abouts">

    

        <div className="leftside1">

          <Image src={Animation} alt="image"/>

        </div>
        <div className="rightside1">
        <h2>ABOUT ME</h2>
        <ul>
            <li>I am an undergraduate student pursuing a Bachelor of Commerce (B.Com) with a growing interest in web development. Though my academic background is in commerce, I have developed a passion for coding and technology. I am currently working on enhancing my skills in HTML, CSS, JavaScript, Tailwind CSS & Next.js, and I am exploring the world of full-stack development.</li>
            <li>As a beginner to intermediate web developer, I enjoy creating interactive websites and learning through  I believe that combining my business knowledge with technical skills will help me create unique solutions in the future.</li>
            <li>I am committed to learning continuously, and I look forward to growing in the world of web development while pursuing my studies in commerce.</li>
        </ul>
        </div>
        </div>


  <div className="skills" id="skills">
    <h2>Skills</h2>

    <br />
    <div className="skillsmain">
      <ul>
        <div className="row">
          <div className="row1">
            <li>
              <h3>HTML & CSS:</h3> 
              <p>Building responsive and accessible web pages using modern techniques.</p>
            </li>
            <li>
              <h3>TypeScript:</h3>
              <p>Applying type safety in web development and enhancing JavaScript code.</p> 
            </li>
          </div>
          <div className="row2">
            <li>
              <h3>Next.js:</h3>
              <p>Experienced in developing high-performance, SEO-friendly web applications with Next.js.</p>
             </li>
            <li>
              <h3>Tailwind CSS</h3>
              <p>Proficient in building responsive and modern designs using Tailwind CSS for efficient styling.</p>
            </li>
          </div>  
          <div className="row3">
            <li>
              <h3>Ongoing Learning:</h3> 
              <p>Improved and extended knowledge in HTML, CSS, TypeScript, and Next.js.</p>
            </li>
          </div>
          </div>
      </ul>
    </div>
        </div>

        <div className="contact" id="contact">
    
    

<div className="contactmain">
    <h1>Lets chat&#33 </h1>
    <h2>I would love to learn about your project</h2>

    <div className="details">

    <a className="logo1" href="https://www.linkedin.com/in/asna-siddiqui-2845862b4/" target="_blank"><Image src={Linkedin} alt="LinkedIN media logo " /></a>
    <br />
    <a className="logo2" href="mailto:asnasiddiqui11@gmail.com" target="_blank"><Image src={Email} alt="Email media logo" /></a>
    <br />
    <a className="logo3" href="https://github.com/AsnaSiddiqui" target="_blank"><Image src={Github} alt="GitHub media logo" /></a>

    </div>
    <p>Feel free to get in touch&#33 Whether
       it is for a potential project, collaboration, or just to connect, 
       I am always open to new opportunities and conversations.</p>

</div>

</div>
        
      </div>
        
      
      )
}
