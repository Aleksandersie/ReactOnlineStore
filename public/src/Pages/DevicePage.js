import React, { useContext, useEffect, useState } from "react"
import { Col, Container, Image, Row, Button, Card } from "react-bootstrap"
import phone from "../img/Без имени-2.jpg"
import { useParams } from "react-router-dom"
import { Context } from "../index"
import { getOneDevice } from "../axios/device"

const DevicePage = () => {
   // const device = {id:1, name:'Iphone 12 PRO',price:10000, rating:5,img: 'https://placehold.co/400x300'}
   // const desc = [
   //     {id:1, title:'Память', desc:'4 гб'},
   //     {id:1, title:'Камера', desc:'40 мп'},
   //     {id:1, title:'Процессор', desc:'1333 мгц'},
   //     {id:1, title:'Ядер', desc:'3'},
   //     {id:1, title:'Аккумулятор', desc:'3000'},
   // ]

   const [device, setDevice] = useState({ info: [] })
   const params = useParams()

   useEffect(() => {
      getOneDevice(params.id).then((data) => setDevice(data))
   }, [])

   let [counter, setCounter] = useState(1)
   function up() {
      setCounter(counter + 1)
   }
   function down() {
      setCounter(counter - 1)
   }
   if (counter <= 1) {
      counter = 1
   }
   return (
      <Container>
         <Row className="d-flex m-auto mt-5 ">
            <Col md={4} className="">
               <Card
                  style={{ height: 452, alignItems: "center" }}
                  className="shadow"
               >
                  <Card.Header style={{ width: 408, textAlign: "center" }}>
                     <h5>{device.name}</h5>
                  </Card.Header>
                  <Image
                     width={336}
                     height={400}
                     src={process.env.REACT_APP_API_URL + device.img}
                  />
               </Card>
            </Col>
            <Col md={4} className="">
               <Card
                  style={{ height: 452, alignItems: "center" }}
                  className="shadow"
               >
                  <Card.Header style={{ width: 408, textAlign: "center" }}>
                     <h5>Характеристики:</h5>
                  </Card.Header>
                  {device.info.map((i) => (
                     <div
                        key={i.id}
                        style={{ width: 408, textAlign: "left" }}
                        className="mt-3 ms-5"
                     >
                        <h5>
                           {i.title}: {i.description}
                        </h5>
                     </div>
                  ))}
               </Card>
            </Col>
            <Col md={4} className="">
               <Card
                  style={{ height: 452, alignItems: "center" }}
                  className="shadow"
               >
                  <Card.Header style={{ width: 408, textAlign: "center" }}>
                     <h5>Добавить в корзину</h5>
                  </Card.Header>
                  <div className="mt-4" style={{ fontSize: 25 }}>
                     Стоимость:{device.price}
                  </div>
                  <Card
                     style={{ height: 150, width: 250, alignItems: "center" }}
                     className="mt-4 justify-content-center
                        shadow-sm"
                     bg={"light"}
                  >
                     <div className="d-flex m-3">
                        <Button
                           style={{
                              height: 35,
                              textAlign: "center",
                              lineHeight: 0,
                           }}
                           onClick={down}
                        >
                           -
                        </Button>
                        <Button
                           variant={"outline-primary"}
                           className="ms-2 me-2"
                           style={{
                              height: 35,
                              width: 35,
                              textAlign: "center",
                              lineHeight: 0,
                           }}
                        >
                           {counter}
                        </Button>
                        <Button
                           style={{
                              height: 35,
                              width: 35,
                              textAlign: "center",
                              lineHeight: 0,
                           }}
                           onClick={up}
                        >
                           +
                        </Button>
                     </div>

                     <Button>Добавить в корзину</Button>
                  </Card>
                  <div className="mt-4">
                     <h5>Расчитать доставку</h5>
                  </div>
                  <Button variant={"danger"} className="mt-3">
                     Перейти к оформлению
                  </Button>
               </Card>
            </Col>
         </Row>
      </Container>
   )
}

export default DevicePage
