import React from 'react';
import Categories from '../../components/Categories';
import MenuItems from '../../components/MenuItems';
import Tittle from '../../components/Titlte';
import portfolios from '../../components/allportfolios';
import { useState } from 'react';
import {FaAndroid, FaArrowAltCircleLeft, FaArrowCircleDown ,  FaArrowCircleRight } from 'react-icons/fa';
import {Link} from 'react-router-dom';

const allCategories = ['All', ...new Set(portfolios.map(item => item.category))];

function PortfoliosPage() {
    const [categories, setCategories] = useState(allCategories);
    const [menuItems, setMenuItems] = useState(portfolios);

    const filter = (category) =>{
        if(category === 'All'){
            setMenuItems(portfolios)
            return;
        }
        const filteredData  = portfolios.filter((item)=>{
            return item.category === category;
        })
        setMenuItems(filteredData);
    }

    return (
        <>
        <Link to = "/about">
        <FaArrowAltCircleLeft  className="float-left" style={{fontSize : "2.5rem",alignItems : "left" }} /></Link>
<br />
<br />
        <div className="PortfolioPage">
            <div className="title">
                <Tittle title={'Portfolios'} span={'portfolios'} />
            </div>
            <div className="portfolios-data">
                <Categories filter={filter} categories={categories} />
                <MenuItems menuItem={menuItems} />
            </div>
        </div>
        </>
    )
}

export default PortfoliosPage;
