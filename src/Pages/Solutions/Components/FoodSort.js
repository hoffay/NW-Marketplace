import React, { Component } from 'react';
import { vendors } from '../../../VendorData';
import { useState, useEffect } from 'react';
import reactDom from 'react-dom';
//import VendorGrid from "./VendorGrid/Vendor";
import { render } from '@testing-library/react';


function SortFood(){
    const [data, setData] = useState([]);
    const [sortType, setSortType] = useState('Industry');

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
        //const sorted = [...vendors].sort((a, b) => b[sortProperty] - a[sortProperty]);
        for(let i=0; i < vendors.length; i++){
            if(!vendors[i].Industry.includes("Food"))
            delete vendors[i];

        }
        //const sorted = delete [...vendors[]
        setData(vendors);
        };

        sortArray(sortType);
    }, [sortType]); 


}

export default SortFood;