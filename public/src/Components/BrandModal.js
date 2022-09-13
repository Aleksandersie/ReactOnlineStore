import React, { useContext, useState } from "react"
import { Button, Dropdown, Form, Modal } from "react-bootstrap"
import { Context } from "../index"
import { createBrand } from "../axios/brand"

const BrandModal = ({ show, onHide }) => {
   const [value, setValue] = useState("")

   function addBrand() {
      createBrand({ name: value }).then((data) => setValue(""))
      onHide()
   }

   return (
      <Modal
         show={show}
         onHide={onHide}
         size="sm"
         aria-labelledby="contained-modal-title-vcenter"
         centered
      >
         <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
               Добавить бренд
            </Modal.Title>
         </Modal.Header>
         <Modal.Body>
            <Form>
               <Form.Control
                  placeholder={"Введите название бренда"}
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
               />
            </Form>
         </Modal.Body>
         <Modal.Footer>
            <Button onClick={addBrand} variant={"success"}>
               Добавить
            </Button>
            <Button onClick={onHide} variant={"danger"}>
               Закрыть
            </Button>
         </Modal.Footer>
      </Modal>
   )
}

export default BrandModal
