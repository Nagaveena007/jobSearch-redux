import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Card,
} from "react-bootstrap";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

import { connect } from "react-redux";
import { removeFromFavoAction } from "../redux/actions";
import SingleJob from "./SingleJob";
const mapDispatchToProps = (disapatch) => ({
  removeFromFavorites: (f) => {
    disapatch(removeFromFavoAction(f));
  },
});
const Favourites = ({ favourite, removeFromFavorites }) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="mt-5">Favourite Companies</h1>
          <ListGroup className="mt-5">
            {favourite.map((f) => (
              <ListGroupItem>
                <AiFillHeart
                  color="red"
                  size={26}
                  className=" mr-3"
                  onClick={() => removeFromFavorites(f)}
                />
                <span>{f}</span>
              </ListGroupItem>
            ))}
          </ListGroup>
          {/*   {favourite.map((f) => (
            <Card className="card mt-3 ml-3 mr-3 mb-3">
              <Card.Body>
                <Card.Link className="job__title mt-2" href={f.url}>
                  {f.title}
                  <span>
                    <small>({f.job_type})</small>
                  </span>
                </Card.Link>
                <Card.Text></Card.Text>
                <Card.Subtitle className="mt-2 text-muted">
                  {f.company_name}
                </Card.Subtitle>

                <Card.Text>{f.candidate_required_location}</Card.Text>

                <Card.Text className="active">
                  <img src="active.png" />
                  <small className="ml-1">Actively recruiting</small>

                  <AiOutlineHeart
                    color="red"
                    size={26}
                    className="ml-5"
                    onClick={() => removeFromFavorites(f)}
                  />
                </Card.Text>

                <Card.Text>{f.publication_date}</Card.Text>
              </Card.Body>
            </Card>
          ))} */}
        </Col>
      </Row>
    </Container>
  );
};

export default connect((s) => s, mapDispatchToProps)(Favourites);
