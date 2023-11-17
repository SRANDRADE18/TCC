import './loginadm.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

import storage from 'local-storage';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Conta_adm() {

    const navigate = useNavigate();

    useEffect(() => {
        if (!storage('login-adm')) {

            navigate('/Loginadm')
        }
    })

    return (
        <div></div>
    )


}