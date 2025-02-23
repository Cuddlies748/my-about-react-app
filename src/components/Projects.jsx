import React from 'react'
import '../styles/projects.css'
import Project from './Project'
function Projects() {
  return (
    <div data-ignore-cursor="true" className='Projects'>
      <h2 data-ignore-cursor="true" className='project_h2'>Projects</h2>
      <div data-ignore-cursor="true" className="rprojects_wrapper">
            <Project h2={"project1"} imgSrc={"https://avatars.mds.yandex.net/i?id=370b93ce054e1d93c8bb5c54605c14d57b407400-5284124-images-thumbs&n=13"}
            href={"https://youtube.com"} cap={"see this project"}/>
            
            <Project h2={"project2"} imgSrc={"https://avatars.mds.yandex.net/i?id=33182dbd67e184a96265c7f4f95ab8b62591dad1-5208953-images-thumbs&n=13"}
            href={"https://youtube.com"} cap={"see this project"}/>
            <Project h2={"project3"} imgSrc={"https://avatars.mds.yandex.net/i?id=6ababf378645e49649b87852908dfeee6bd3bd43-5754043-images-thumbs&n=13"}
            href={"https://youtube.com"} cap={"see this project"}/>
            <Project h2={"project4"} imgSrc={"https://avatars.mds.yandex.net/i?id=9d605cc2f074d396695e1ad93344b3a0b0efa7026bd768ba-12305949-images-thumbs&n=13"}
            href={"https://youtube.com"} cap={"see this project"}/>
            <Project h2={"project5"} imgSrc={"https://avatars.mds.yandex.net/i?id=1a7cc08b8dd1ad7c1983d0a37c99757ad98bb39d-5859689-images-thumbs&n=13"}
            href={"https://youtube.com"} cap={"see this project"}/>
            <Project h2={"project6"} imgSrc={"https://avatars.mds.yandex.net/i?id=05fe203468a3a7d188716b50bceff6a9fcb1079a-4394907-images-thumbs&n=13"}
            href={"https://youtube.com"} cap={"see this project"}/>
            <Project h2={"project7"} imgSrc={"https://avatars.mds.yandex.net/i?id=fd9bc04df8343edc8fc02f40ed1bed2e1a7ee947-7570876-images-thumbs&n=13"}
            href={"https://youtube.com"} cap={"see this project"}/>
            <Project h2={"project8"} imgSrc={"https://avatars.mds.yandex.net/i?id=4c970e5107f6c06289a30a0cdbb2272ba7d21717-4936013-images-thumbs&n=13"}
            href={"https://youtube.com"} cap={"see this project"}/>
      
       
      </div>
    </div>
  )
}

export default Projects
