import React from 'react'
import proj from './../images/p1.jpg'

import Project from '../components/Project/Project';
import {projects} from "./../helpers/projectList"

const Projects = () => {
  return (
    <div className="projects">
      <section>
        <div className="projects__container">
          <div className="projects__row">
            <div className="projects__description">
              <h2>Projects</h2>
              <p className='projects__title'>Check out some of my latest <br/> projects.</p>
              <p className='projects__text'>During my studies, I worked on various projects, including the creation of websites and development of applications.</p>
            </div>
            <div className="projects__picture">
              <img src={proj} alt="Projects" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="projects__container">
				<ul className="projects__list">
					{projects && projects.map((project, index) => {
						return (
							<Project
								key={index}
								title={project.title}
								img={project.img}
								index={index}
							/>
						);
					})}
				</ul>
        </div>
      </section>
    </div>
  )
}

export default Projects