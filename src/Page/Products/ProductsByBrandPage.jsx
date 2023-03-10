import React from 'react'
import {Container, Col, Row} from 'react-bootstrap';
import Pagination from '../../Components/Uitily/Pagination';
import CardProductsContainer from './../../Components/Products/ProductsContainer';
import {useParams} from 'react-router-dom';
import ProductsByBrandHook from "../../hook/products/productsByBrandHook";

const ProductsByBrandPage = () => {
    const {id} = useParams()
    const [items, pagination, onPress] = ProductsByBrandHook(id)

    let pageCount = 0;
    if (pagination) pageCount = pagination
    
    return (
        <div style={{minHeight: '670px'}}>

            <Container>
                <Row className='d-flex flex-row'>

                    <Col sm="12">
                        <CardProductsContainer products={items} title="" btntitle=""/>
                    </Col>
                </Row>

                <Pagination pageCount={pageCount} onPress={onPress}/>
            </Container>
        </div>
    )
}

export default ProductsByBrandPage
