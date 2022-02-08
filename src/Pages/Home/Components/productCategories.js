import React from "react";
import styles from './productCategories.css';
import LCSButton1 from "../../../Components/Header/LCSButton";

function ProductCategories() {
    return(
    <div class="productnav">
      <b>Choose from Business Type</b>
      <a href="#Food Service">Food Service</a>
      <a href="#Retail">Retail</a>
      <a href="#Hotel/Motel">Hotel/Motel</a>
      <a href="#Farm/Agribusiness">Farm/Agribusiness</a>
      <a href="#Habitational">Habitational</a>
      <a href="#Process/Service">Process/Service</a>
      <a href="#Manufacturing">Manufacturing</a>
      <a href="#Auto Service">Auto Service</a>
      <a href="#Wholesale" >Whole Sale</a>
      <a href="#Contracting">Contracting</a>
      <a href="#Office/Professional">Office/Professional</a>
      <a href="#Health Care" >Health Care</a>
    </div>
    );

}

export default ProductCategories;