import React, { useState, useEffect } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Container, Row, Col } from "reactstrap";
import styles from "../styles/Categories.module.css";

function Categories({ setId }) {
  useEffect(() => {
    getCategory();
  }, []);
  const [category, setCategory] = useState([]);

  function getCategory() {
    const url = "https://market-api-tez.herokuapp.com/Categories";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1 className={styles.BackColor}>Kategoriler</h1>
            <div>
              <ListGroup>
                {category.map((c, index) => (
                  <ListGroupItem
                  className={styles.bgColor}
                    key={index}
                    value={index}
                    onClick={(e) => {
                      setId(e.target.value);
                    }}
                  >
                    {c.name}
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Categories;
