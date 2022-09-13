import React, { useContext } from "react"
import { observer } from "mobx-react-lite"
import { ListGroup } from "react-bootstrap"
import { Context } from "../index"
import "./style.css"

const LeftBar = observer(() => {
   const { device } = useContext(Context)
   console.log(device.selectedType.id + "type")
   console.log(device.selectedBrand.id)
   return (
      <div>
         <ListGroup style={{ textAlign: "center", cursor: "pointer" }}>
            {device.types.map((type) => (
               <ListGroup.Item
                  key={type.id}
                  active={type.id === device.selectedType.id}
                  onClick={() => device.setSelectedType(type)}
                  style={
                     type.id === device.selectedType.id
                        ? {
                             backgroundColor: "gray",
                             color: "white",
                             border: "none",
                          }
                        : {
                             backgroundColor: "#212529",
                             color: "white",
                             border: "none",
                          }
                  }
               >
                  {type.name}
               </ListGroup.Item>
            ))}
         </ListGroup>
      </div>
   )
})

export default LeftBar
