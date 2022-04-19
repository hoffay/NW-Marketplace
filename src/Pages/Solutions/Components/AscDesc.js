import { vendors } from '../../../VendorData';
import { useState, useEffect } from 'react';
function sortCards(){
   
    let industry1="empty"
    if(window.location.hash==="#food") {
  industry1="Food Service";
  } else if(window.location.hash==="#retail"){
     industry1="Retail";  
  } else if(window.location.hash==="#hotelmotel"){
     industry1="Hotel/Motel";  
  } else if(window.location.hash==="#farmagribusiness"){
     industry1="Farm/Agribusiness";  
  } else if(window.location.hash==="#habitual"){
     industry1="Habitational";  
  } else if(window.location.hash==="#processservice"){
     industry1="Process/Service";  
  } else if(window.location.hash==="#manufacturing"){
     industry1="Manufacturing";  
  } else if(window.location.hash==="#autoService"){
     industry1="Auto Service";  
  } else if(window.location.hash==="#wholesale"){
     industry1="Wholesale";  
  } else if(window.location.hash==="#construction"){
     industry1="Construction";  
  } else if(window.location.hash==="#officeprofessional"){
     industry1="Office/Professional";  
  } else if(window.location.hash==="#healthcare"){
     industry1="Health Care"; 
  }
  
  const updateVendor = vendors.filter(vendor => vendor['Industry'].includes(industry1));
  return updateVendor;
  }

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
        const sorted = [...sortCards()].sort((a, b) => b[sortProperty] - a[sortProperty]);
        console.log("1")
        setData(sorted);
        };

        sortArray(sortType);
    }, [sortType]); 


}

export default AscDesc;