import React, { Component } from 'react';
import { vendors } from '../../../VendorData';
import { useState, useEffect } from 'react';
import reactDom from 'react-dom';
import VendorGrid from "./VendorGrid";
import { render } from '@testing-library/react';



function AscDesc(){
    const [data, setData] = useState([]);
    const [sortType, setSortType] = useState('Vendor_Name');

    useEffect(() => {
        const sortArray = type => {
        const types = {
            Industry: 'Industry',
            Logo: 'Logo',
            Web_Link: 'Web_Link',
            Description: 'Description',
            Contact_Info: 'Contact_Info',
            Discount: 'Discount',
            Example_Scenarios: 'Example_Scenarios',
            Trigger_Words_for_Search: 'Trigger_Words_for_Search'
        };
        const sortProperty = types[type];
        const sorted = [...vendors].sort((a, b) => b[sortProperty] - a[sortProperty]);
        setData(sorted);
        };

        sortArray(sortType);
    }, [sortType]); 

    return(
        <VendorGrid/>
    )
}

export default AscDesc;