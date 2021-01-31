import React from 'react'
import './home.css'

import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import baner from '../../assets/imgs/baner.jpg'
import Navbar from '../../components/navbar/navbar'
const Home = (props) => {
        
        return (
            <div>
                <Navbar />
                <Container>
                    <Row>
                        <Col xs={12}>
                            <Image src={baner} className="home-baner" fluid />
                        </Col>
                    </Row>

                </Container>
            </div>

        )
    }

export default Home