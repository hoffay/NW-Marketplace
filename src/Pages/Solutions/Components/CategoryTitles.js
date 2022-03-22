import { vendors } from '../../../VendorData';

function categoryTitle(){
   
    let industry="All"
    if(window.location.hash==="#food") {
  industry="Food Service Solutions";
  } else if(window.location.hash==="#retail"){
     industry="Retail Solutions";  
  } else if(window.location.hash==="#hotelmotel"){
     industry="Hotel/Motel Solutions";  
  } else if(window.location.hash==="#farmagribusiness"){
     industry="Farm/Agribusiness Solutions";  
  } else if(window.location.hash==="#habitual"){
     industry="Habitational Solutions";  
  } else if(window.location.hash==="#processservice"){
     industry="Process/Service Solutions";  
  } else if(window.location.hash==="#manufacturing"){
     industry="Manufacturing Solutions";  
  } else if(window.location.hash==="#autoService"){
     industry="Auto Service Solutions";  
  } else if(window.location.hash==="#wholesale"){
     industry="Wholesale Solutions";  
  } else if(window.location.hash==="#construction"){
     industry="Construction Solutions";  
  } else if(window.location.hash==="#officeprofessional"){
     industry="Office/Professional Solutions";  
  } else if(window.location.hash==="#healthcare"){
     industry="Health Care Solutions"; 
  }

  return (
    <div className = "category-title">
        <h1>{industry}</h1>
        <div className = "category-subtext">as per your search</div>
    </div>
    );
  }

  export default categoryTitle;