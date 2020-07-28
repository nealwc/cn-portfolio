import React from "react";
import { Card } from "react-bootstrap"

function ProjectCard(props) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text className="d-flex">{props.description}</Card.Text>
                <Card.Footer>
                    <Card.Link href={props.gitHub} fixed="bottom">
                        <i class="fa fa-github" aria-hidden="true"></i>
                    </Card.Link>
                    <Card.Link href={props.url}>
                        <i class="fa fa-external-link" aria-hidden="true"></i>
                    </Card.Link>
                </Card.Footer>
            </Card.Body>
        </Card>
    );
};

export default ProjectCard