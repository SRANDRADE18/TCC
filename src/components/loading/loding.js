import React from "react";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {BiLoaderAlt} from 'react-icons/bi'
import './loadin.scss'

export default function Loading(){

    return(
        <BiLoaderAlt className="Loading"/>
    )
}