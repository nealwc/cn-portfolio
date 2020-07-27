import React, { Component } from "react";
import ProjectCard from "../components/Card";
import projects from "../projects.json"
import { Container } from "react-bootstrap";


class Projects extends Component {
    state = {
        projects
    };

    render() {
        return (
            <Container>
                <ProjectCard />
            </Container >
        );
    }
}

export default Projects