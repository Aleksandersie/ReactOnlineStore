import { Button, Dropdown, Form, Row, Col } from "react-bootstrap"
import React, { useContext, useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import { Context } from "../index"
import { getTypes } from "../axios/type"
import { getBrand } from "../axios/brand"

const TestModal = observer(({ show, onHide }) => {
   const { device } = useContext(Context)

   useEffect(() => {
      getTypes().then((data) => device.setTypes(data))
      getBrand().then((data) => device.setBrands(data))
   }, [])

   const [name, setName] = useState("")
   const [price, setPrice] = useState(0)
   const [file, setFile] = useState(null)

   function addFile(e) {
      setFile(e.target.files[0])
   }

   const [info, setInfo] = useState([])

   const addInfo = () => {
      setInfo([...info, { title: "", description: "", number: Date.now() }])
      console.log(info)
      console.log(info.title)
   }
   const removeInfo = (number) => {
      setInfo(info.filter((info) => info.number !== number))
   }
   const changeInfo = (key, value, number) => {
      setInfo(
         info.map((i) => (i.number === number ? { ...i, [key]: value } : i))
      )
   }

   function addDevice() {
      console.log(info)
   }
   return (
      <div>
         <Button variant={"outline-dark"} onClick={addInfo}>
            Добавить новое свойство
         </Button>
         {info.map((i) => (
            <Row className="mt-4" key={i.number}>
               <Col md={4}>
                  <Form.Control
                     value={i.title}
                     onChange={(e) =>
                        changeInfo("title", e.target.value, i.number)
                     }
                     placeholder="Введите название свойства"
                  />
               </Col>
               <Col md={4}>
                  <Form.Control
                     value={i.description}
                     onChange={(e) =>
                        changeInfo("description", e.target.value, i.number)
                     }
                     placeholder="Введите описание свойства"
                  />
               </Col>
               <Col md={4}>
                  <Button
                     onClick={() => removeInfo(i.number)}
                     variant={"outline-danger"}
                  >
                     Удалить
                  </Button>
               </Col>
            </Row>
         ))}
         <Button variant="outline-success" onClick={addDevice}>
            Добавить
         </Button>
      </div>
   )
})

export default TestModal
