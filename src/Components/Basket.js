import { useEffect, useState } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import { Container, Row, Col } from "reactstrap";
import styles from "../styles/Basket.module.css";





function Basket({ basket, addToCart, removeFromCart,ClearBasket , PayMoney}) {
  
  const [lastBasket , setLastBasket] = useState([]);
  
  useEffect(() => {console.log("calisti")}  , [])
  

  useEffect(() => {
    const products = basket.reduce((acc, item) => {
      if (acc[item.name]) {
        acc[item.name].count += 1;
      } else {
        acc[item.name] = { ...item, count: 1 };
      }
      return acc;
    }, {});
    const productDetails = Object.values(products);  
    setLastBasket([...productDetails])
    console.log('bura yazdiriliyor')
  
  } , [basket])

  function totalPrice() {
    const total = basket.reduce((acc, item) => {
      return acc + item.price;
    }, 0);
    return total
  }

  useEffect(() => {totalPrice()},[basket , ]);

    
 
 
  

  return (
    <div className={styles.basket}>
      <h1>Basket-{basket.length}</h1>

      <Container>
        <Row>
          <Col className={styles.Prod} xs="9">
            <Container>
              <Row>
                {lastBasket.map((p, index) => (
                  <Col xs="4">
                    <div className={styles.cardBack}>
                    <Card  >
                      <CardImg
                        top
                        width="100%"
                        height="100%"
                        src={p.img}
                        alt="Card image cap"
                      />
                      <CardBody className={styles.card}>
                        <CardTitle>{p.name}</CardTitle>
                        <CardSubtitle>{p.price}₺</CardSubtitle>
                      </CardBody>
                      <div className={styles.button}>
                        <Button
                          onClick={(e) => {
                            removeFromCart(p)
                          }}
                        >
                          -
                        </Button>
                        <CardText>{p.count}</CardText>
                        <Button
                          onClick={(e) => {
                            addToCart(p)
                          }}
                        >
                          +
                        </Button>
                      </div>
                    </Card>
                    </div>
                  </Col>
                ))}
              </Row>
            </Container>
          </Col>
          <Col className={styles.Pay} xs="3">
           <div className={styles.PayContent}>
            <h1>Toplam Fiyat :</h1>
            <p className={styles.money}>{totalPrice()}₺</p>
            <Button className={styles.Odeme} onClick={()=>{PayMoney()}}>Alisverisi Tamamla</Button>
            <Button className={styles.Clear} onClick={()=>{ClearBasket()}}>Sepeti Temizle</Button>
           </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Basket;
