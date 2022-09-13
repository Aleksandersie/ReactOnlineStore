import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, Row} from "react-bootstrap";


const TopBrandBar = observer(  () => {
    const {device} = useContext(Context)

    return (

        <div>
            <Row className='d-flex'>
                {device.brands.map(brand=>
                    <Card
                    key={brand.id}
                    className='p-2 ms-1'
                    style={{width:"auto",cursor:"pointer"}}
                    onClick={()=> device.setSelectedBrand(brand)}

                    bg={brand.id===device.selectedBrand.id? 'dark':'light'}
                    text={brand.id===device.selectedBrand.id? 'white':'dark'}
                    >
                        {brand.name}
                    </Card>
                )}
            </Row>
        </div>


    );
});

export default TopBrandBar;