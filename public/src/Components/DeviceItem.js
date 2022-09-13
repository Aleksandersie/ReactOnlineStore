import React, { useState } from "react"
import { Button, Card, Col, Image } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { DEVICE_ROUTE } from "../routeConsts/routeConsts"
import phone from "../img/Без имени-2.jpg"

const DeviceItem = ({ device }) => {
   const navigate = useNavigate()
   console.log(device)
   return (
      <Col md={4} onClick={() => navigate(DEVICE_ROUTE + "/" + device.id)}>
         <Card
            style={{ width: 300 }}
            className="mt-3 p-2 d-flex flex-column
                 align-items-center shadow"
         >
            <Image
               width={150}
               height={175}
               src={process.env.REACT_APP_API_URL + device.img}
            />
            <div style={{ color: "black" }}>
               <h5>{device.type.name}</h5>
            </div>
            <div style={{ color: "gray", fontSize: 17 }}>
               <h5>{device.brand.name}</h5>
            </div>

            <div style={{ color: "black" }}>{device.name}</div>
            <Button className="mt-2 mb-2">Подробнее</Button>
         </Card>
      </Col>
   )
}

export default DeviceItem
