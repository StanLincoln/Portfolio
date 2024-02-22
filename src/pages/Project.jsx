import {Link, useParams} from "react-router-dom";

import { FaGithub } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";

import {projects} from "./../helpers/projectList"

const Project = () => {
	const {id} = useParams();
	const project = projects[id];

    return (
		<section className="section">
			<div className="project__container">
				<div className="project__details">
					<h1 className="project__title">{project.title}</h1>

					<img
						src={project.imgBig}
						alt={project.title}
						className="project__cover"
					/>

					<div className="project__desc">
						<p>Skills: {project.skills}</p>
					</div>

					<div className="project__links">
						<div>
							{project.gitHubLink && (
								<Link className="project__link" to={project.gitHubLink} target="_blank">
								<FaGithub />View on GitHub 
								</Link>
							)}
						</div>
	
						<div>
							{
								project.link && (
									<Link className="project__link" to={project.link} target="_blank"><HiExternalLink />View on the Web</Link>
								)
							}
						</div>
					</div>

				</div>
			</div>
		</section>
	);
}

export default Project;