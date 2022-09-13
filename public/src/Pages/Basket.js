import React from "react"
import { Card, Col, Row } from "react-bootstrap"

const Basket = () => {
   return (
      <div>
         <Row className="d-flex justify-content-center mt-5">
            <Col md={6} className="">
               <Card
                  style={{ height: 452, alignItems: "center" }}
                  className="shadow"
               >
                  <Card.Header style={{ width: "100%", textAlign: "center" }}>
                     <h5>Корзина:</h5>
                  </Card.Header>
               </Card>
            </Col>
         </Row>
      </div>
   )
}

export default Basket
