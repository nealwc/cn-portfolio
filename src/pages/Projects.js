import React, { Component } from "react";
import ProjectCard from "../components/ProjectCard/Index";
import projects from "../utils/projects.json"
import { Container } from "react-bootstrap";
import Wrapper from "../components/Wrapper"


class Projects extends Component {
    state = {
        projects
    };

    render() {
        return (
            <Wrapper>
                {this.state.projects.map(project => (
                <ProjectCard 
                name={project.name}
                description={project.description}
                url={project.url}
                gitHub={project.gitHub}
                image={project.image}
                />
                ))}
            </Wrapper>
        );
    }
}

export default Projects