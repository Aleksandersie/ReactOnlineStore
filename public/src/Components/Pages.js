import React, { useContext } from "react"
import { Context } from "../index"
import { Pagination } from "react-bootstrap"
import { observer } from "mobx-react-lite"

const Pages = observer(() => {
   const { device } = useContext(Context)
   const totalPages = Math.ceil(device.totalCount / device.limit)
   console.log(totalPages)
   const pages = []

   for (let i = 0; i < totalPages; i++) {
      pages.push(i + 1)
   }

   return (
      <Pagination className="mt-4 d-flex justify-content-center">
         {pages.map((p) => (
            <Pagination.Item
               key={p}
               active={device.page === p}
               onClick={() => device.setPage(p)}
            >
               {p}
            </Pagination.Item>
         ))}
      </Pagination>
   )
})

export default Pages
