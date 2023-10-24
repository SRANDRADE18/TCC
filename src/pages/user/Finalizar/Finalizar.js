
import './Finalizar.scss'
import Rodape from '../../../components/Rodape/rodape';
import Header from '../../../components/Header/header';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Finalizar() {
    return (
        <div className='Finalizar-Compra'>
            <Header />
            <div className='Finalizar'>
                
            <img className='tenis-Preto' src="/assets/images/tenis/Tenis_galáxia.png"></img>

            </div>
            <Rodape />
        </div>
    )
}