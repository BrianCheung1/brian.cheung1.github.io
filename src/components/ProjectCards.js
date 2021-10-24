import { Row, Col, Container, Image, Card, Button } from "react-bootstrap";

function ProjectCards({ image, title, description, link, link2 }) {
  return (
    <Col lg={8}>
      <Card bg="dark" style={{ width: "auto" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body className="projectCardsBody">
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary" href={link} target="_blank">
            Github
          </Button>
        
          {link2 !== "" ? (
            <Button variant="primary" href={link2} target="_blank" style={{marginLeft:"10px"}}>
              Check it out
            </Button>
          ) : (
            ""
          )}
        </Card.Body>
      </Card>
    </Col>
  );
}
export { ProjectCards };
