import { NavLink } from 'react-router-dom';
import './project.scss';

const Project = ({ title, img, index }) => {
	return (
		<NavLink to={`/projects/${index}`}>
			<li className="project">
				<img src={img} alt={title} className="project__img" />
				<h3 className="project__title">{title}</h3>
			</li>
		</NavLink>
	);
};

export default Project;
