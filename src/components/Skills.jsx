import React from 'react';
import { Container, ListGroup, ListGroupItem } from 'reactstrap';

const Skills = () => {
  const skillsList = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];

  return (
    <Container className="my-5">
      <h2>My Skills</h2>
      <ListGroup>
        {skillsList.map((skill, index) => (
          <ListGroupItem key={index}>{skill}</ListGroupItem>
        ))}
      </ListGroup>
    </Container>
  );
};

export default Skills;
