import React from 'react'
import "../styles/aboutme.css"
import photo from "../Снимок экрана 2025-02-20 170703.png"
function Aboutme() {
  return (
    <div className='Aboutme'>
        <img className="photo" src={photo} alt="" />
       <div className="aboutme_text">
       <h2 className='About_Me'>About Me</h2>
        <p className='About_p'>Hello! I am Eshboev Jasur, I was born in 2009 on June 30. I was born in the city of Uzbekistan, I live in a family of five, my father, mother, two sisters and one brother. I have programming skills and am looking for a job in this field of programming. In my work, I need to preferably work seven or eight hours a day, if six is ​​even better. I have more than twenty homemade projects, including a portfolio. I have a rather complex character, I admit it myself, but I can promise that I will treat my work responsibly. I have a lot of plans for the future, I want to become a great programmer, the rest is not important. If you want to contact me, then go down to the very bottom of the site, there is my telegram, instagram, and other social networks.</p>
       </div>
    </div>
  )
}

export default Aboutme
