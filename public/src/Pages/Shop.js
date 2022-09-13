import React, { useContext, useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"
import LeftBar from "../Components/LeftBar"
import TopBrandBar from "../Components/TopBrandBar"
import DeviceList from "../Components/DeviceList"
import { observer } from "mobx-react-lite"
import { Context } from "../index"
import { getTypes } from "../axios/type"
import { getBrand } from "../axios/brand"
import { getDevice } from "../axios/device"
import Pages from "../Components/Pages"

const Shop = observer(() => {
   const { device } = useContext(Context)

   useEffect(() => {
      getTypes().then((data) => device.setTypes(data))
      getBrand().then((data) => device.setBrands(data))
      getDevice(null, null, 4, 1).then((data) => {
         device.setDevices(data.rows)
         device.setTotalCount(data.count)
         console.log(data)
      })
   }, [])
   useEffect(() => {
      getDevice(
         device.selectedBrand.id,
         device.selectedType.id,
         3,
         device.page
      ).then((data) => {
         device.setDevices(data.rows)
         device.setTotalCount(data.count)
      })
   }, [device.page, device.selectedType, device.selectedBrand])
   return (
      <div>
         <Container>
            <Row className="mt-5">
               <Col md={2}>
                  <LeftBar />
               </Col>
               <Col md={9}>
                  <TopBrandBar />
                  <DeviceList />
                  <Pages />
               </Col>
            </Row>
         </Container>
      </div>
   )
})

export default Shop
