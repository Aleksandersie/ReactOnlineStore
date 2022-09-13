import React, { useContext, useEffect, useState } from "react"
import { Button, Col, Dropdown, Form, Modal, Row } from "react-bootstrap"
import { Context } from "../index"
import { observer } from "mobx-react-lite"
import { getTypes } from "../axios/type"
import { getBrand } from "../axios/brand"
import { createDevice, getDevice } from "../axios/device"

const DeviceModal = observer(({ show, onHide }) => {
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
      console.log(e.target.files[0])
   }

   const [info, setInfo] = useState([])

   const addInfo = () => {
      setInfo([...info, { title: "", description: "", number: Date.now() }])
   }
   const removeInfo = (number) => {
      setInfo(info.filter((info) => info.number !== number))
   }

   function changeInfo(key, value, number) {
      setInfo(
         info.map((i) => (i.number === number ? { ...i, [key]: value } : i))
      )
   }
   function addDevice() {
      try {
         // const formData = new FormData()
         //
         // formData.append("name", name)
         // formData.append("price", `${price}`)
         // formData.append("brandId", device.selectedBrand.id)
         // formData.append("typeId", device.selectedType.id)
         // formData.append("info", JSON.stringify(info))
         // formData.append("img", file)

         const formData = new FormData()
         formData.append("name", name)
         formData.append("price", `${price}`)
         formData.append("img", file)
         formData.append("brandId", device.selectedBrand.id)
         formData.append("typeId", device.selectedType.id)
         formData.append("info", JSON.stringify(info))
         createDevice(formData).then((data) => onHide())

         // console.log(formData)
         // createDevice(formData).then((data) => onHide())
      } catch (e) {
         console.log(e)
      }
   }

   return (
      <Modal
         show={show}
         onHide={onHide}
         size="xl"
         aria-labelledby="contained-modal-title-vcenter"
         centered
      >
         <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
               Добавить устройство
            </Modal.Title>
         </Modal.Header>
         <Modal.Body>
            <Form>
               <div className="d-flex justify-content-center">
                  <Dropdown className="d-flex justify-content-center mt-3  ">
                     <Dropdown.Toggle
                        variant="primary"
                        id="dropdown-basic"
                        style={{ width: 165 }}
                     >
                        {device.selectedType.name || "Выберите тип"}
                     </Dropdown.Toggle>

                     <Dropdown.Menu>
                        {device.types.map((type) => (
                           <Dropdown.Item
                              key={type.id}
                              onClick={() => device.setSelectedType(type)}
                           >
                              {type.name}
                           </Dropdown.Item>
                        ))}
                     </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown className="d-flex justify-content-center mt-3 ms-5">
                     <Dropdown.Toggle
                        variant="primary"
                        id="dropdown-basic"
                        style={{ width: 165, textAlign: "center" }}
                     >
                        {device.selectedBrand.name || "Выберите бренд"}
                     </Dropdown.Toggle>

                     <Dropdown.Menu>
                        {device.brands.map((brand) => (
                           <Dropdown.Item
                              key={brand.id}
                              onClick={() => device.setSelectedBrand(brand)}
                           >
                              {brand.name}
                           </Dropdown.Item>
                        ))}
                     </Dropdown.Menu>
                  </Dropdown>
               </div>
               <div className="d-flex justify-content-center mt-3">
                  <Form.Control
                     placeholder="Название устройства"
                     md={2}
                     className="ms-1"
                     value={name}
                     onChange={(e) => setName(e.target.value)}
                  />
                  <Form.Control
                     placeholder="Стоимость устройства"
                     md={2}
                     className="ms-3"
                     value={price}
                     onChange={(e) => setPrice(Number(e.target.value))}
                     type="number"
                  />
                  <Form.Control
                     placeholder="Фото"
                     type="file"
                     md={2}
                     className="ms-3"
                     onChange={addFile}
                  />
               </div>
               <div className="d-flex justify-content-center">
                  <Button onClick={addInfo} className="mt-3">
                     Добавить описание
                  </Button>
               </div>
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
                              changeInfo(
                                 "description",
                                 e.target.value,
                                 i.number
                              )
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
            </Form>
         </Modal.Body>
         <Modal.Footer>
            <Button onClick={addDevice} variant={"success"}>
               Добавить
            </Button>
            <Button onClick={onHide} variant={"danger"}>
               Закрыть
            </Button>
         </Modal.Footer>
      </Modal>
   )
})

export default DeviceModal
