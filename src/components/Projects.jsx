import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';

const Projects = () => {
  const projectList = [
    { name: 'Project 1', description: 'Description of project 1', link: '#' },
    { name: 'Project 2', description: 'Description of project 2', link: '#' },
  ];

  return (
    <Container className="my-5">
      <h2>My Projects</h2>
      <Row>
        {projectList.map((project, index) => (
          <Col sm="6" key={index}>
            <Card className="mb-4">
              <CardBody>
                <CardTitle tag="h5">{project.name}</CardTitle>
                <CardText>{project.description}</CardText>
                <Button color="primary" href={project.link} target="_blank">View Project</Button>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
