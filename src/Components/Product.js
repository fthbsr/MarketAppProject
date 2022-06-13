import axios from 'axios';
import { useState ,useEffect} from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import {Container, Row, Col} from 'reactstrap';
import styles from '../styles/Product.module.css';

  
function Product({id , addToCart}) {
    const [product , setProduct] = useState([])
    const [filtered , setFiltered] = useState([])


    
    useEffect(() => {
        getProduct()  },[])


    useEffect(() => {console.log("id guncelendi")} , [id])
    useEffect(() => {productFilter(id)},[id])
    useEffect(() => {setProduct(filtered) }, [filtered] )

  
    async function productFilter  (id)  {
        
       
        console.log(id)
        let response = await  axios.get('https://market-api-tez.herokuapp.com/Products/?categoryId='+ id)
        let answer = await response.data;
        setFiltered(answer)
    
    }



    async function  getProduct  () {
        const url = "https://market-api-tez.herokuapp.com/Products";
        let response = await fetch(url)
        let data = await response.json()
        setProduct(data)
            
        
    }

    useEffect(() => {console.log('geri gelindi')} , [])
    
    

    
  return (
    <div >
        <Container   >
            <h1 className={styles.bgColor}>Urunler</h1>
            <Row  >
            {product.map((p, index) => 
                <Col xs='4'  key={index} className={styles.Card}>
            <Card className="mb-3"   >
            <CardImg top width="100%" src={p.img} alt="Card image cap" />
            <CardBody>
            <div className={styles.cardItem}>
            <CardTitle className={styles.title}>
                <p>Urun Adi : </p>
                <p> {p.name}</p>
                </CardTitle>
            <CardSubtitle  className={styles.title}>
                 <p>Stocktaki Urun : </p>
                <p> {p.stock}</p>
            </CardSubtitle>
            <CardText className={styles.title}>
                 <p>Fiyati : </p>
                <p> {p.price}₺</p>
            </CardText>
            </div>
            <Button  className={styles.btn} onClick={()=> {addToCart(p)}} >Satin Al</Button>
            </CardBody>
        </Card>
        </Col>)}

            </Row>
        </Container>
        
    </div>
  )
}

export default Product;