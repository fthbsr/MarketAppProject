import {useState} from 'react'
import Categories from './Categories'
import Product from './Product'
import styles from '../styles/urunler.module.css'
import { Container ,Row,Col, } from 'reactstrap';


function Urunler( {basket,setBasket}) {
    const [id, setId] = useState(0);
    
  return (
    <div className={styles.urunler}>
         <Container>
       
        <Row>
          <Col xs="3">
            <Categories setId={setId} />
          </Col>
          <Col xs="9">
            <Product
              id={id}
              addToCart={(t) => {
                basket.push(t)
                setBasket(basket)
                console.log(basket)
              }}
            />
          </Col>
        </Row>
      </Container> 
            </div>


    
  )
}

export default Urunler