import React, { useState } from "react"
import { Button, Card, Container, Row } from "react-bootstrap"
import BrandModal from "../Components/BrandModal"
import TypeModal from "../Components/TypeModal"
import DeviceModal from "../Components/DeviceModal"
import TestModal from "../Components/TestModal"

const Admin = () => {
   const [brandVisible, setBrandVisible] = useState(false)
   const [typeVisible, setTypeVisible] = useState(false)
   const [deviceVisible, setDeviceVisible] = useState(false)
   return (
      <Container>
         <Row md={4} className="m-auto justify-content-center mt-5">
            <Card className="m-auto justify-content-center align-items-center shadow">
               <Card.Header style={{ width: 325, textAlign: "center" }}>
                  <h5>Панель администратора</h5>
               </Card.Header>
               <Button
                  style={{ width: 200 }}
                  className="mt-3"
                  onClick={() => setTypeVisible(true)}
               >
                  Добавить тип
               </Button>
               <Button
                  style={{ width: 200 }}
                  className="mt-3"
                  onClick={() => setBrandVisible(true)}
               >
                  Добавить бренд
               </Button>
               <Button
                  style={{ width: 200 }}
                  className="mt-3 mb-3"
                  onClick={() => setDeviceVisible(true)}
               >
                  Добавить товар
               </Button>
            </Card>
         </Row>
         <BrandModal
            show={brandVisible}
            onHide={() => setBrandVisible(false)}
         />
         <TypeModal show={typeVisible} onHide={() => setTypeVisible(false)} />
         <DeviceModal
            show={deviceVisible}
            onHide={() => setDeviceVisible(false)}
         />
      </Container>
   )
}

export default Admin
