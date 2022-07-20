import './Projects.css'
import StarWars from '../../assets/img/star-wars-api.png'
import { Card } from '../Card/Card'

export const Projects = () => {

  const projects = [
    {
      title: "Star Wars API",
      description: "Project that shows the Star Wars characters",
      imgURL: StarWars,
      url: "https://starwars-api-ricardobzc.netlify.app/"
    },
    {
      title: "SiGAC",
      description: "Project for TecNM Colima",
      imgURL: "https://dimensionrealdecolima.com.mx/wp-content/uploads/2021/10/Nota-Tec-Colima-800x445.jpeg",
      url: "https://github.com/TheViccs/Extraescolares"
    }
  ]


  return (
    <section className="project-content-container" id="projects">
        <h2>Projects</h2>
        <div className="project-container">
          {projects.map((project, index)=> <Card key={index} imgURL={project.imgURL} title={project.title} description={project.description} url={project.url}/>)}
        </div>
    </section>
  )
}
