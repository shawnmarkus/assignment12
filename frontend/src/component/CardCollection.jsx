import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";

function GridCard({ list }) {
  const navigate = useNavigate();
  return (
    <Row xs={1} md={2} lg={3} xl={4} xxl={5} className="g-4 p-5">
      {list.map((i, idx) => (
        <Col key={idx}>
          <Card
            onClick={() => {
              navigate(`/play/${i.videoId}/${idx}`);
              console.log("navigate to some page ", i.videoId);
            }}
          >
            <Card.Img variant="top" src={i.thumbnailUrl} />
            <Card.Body>
              <Card.Title>{i.title}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default GridCard;
