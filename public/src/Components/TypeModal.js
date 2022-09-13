import React, {useContext, useState} from 'react';
import {Button, Dropdown, DropdownButton, Form, Modal} from "react-bootstrap";
import {Context} from "../index";
import {createTypes} from '../axios/type';


const TypeModal = ({show, onHide}) => {

    const [value, setValue] = useState('')

    function addType() {
        console.log(value)
        createTypes({name: value}).then(data => setValue(''))
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
                <Modal.Title id="contained-modal-title-vcenter"


                >
                    Добавить тип
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder={"Введите название типа"}
                    />

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={addType} variant={"success"}
                >Добавить</Button>
                <Button onClick={onHide} variant={"danger"}>Закрыть</Button>

            </Modal.Footer>
        </Modal>
    );
};

export default TypeModal;