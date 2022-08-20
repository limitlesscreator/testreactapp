import React from 'react';
import pig from '../img/pig.png'
import note from '../img/note.png'
import car from '../img/car.jpg'
import {Item} from "./Item";
import s from './Item.module.sass'

export const Shop = () => {
    let doubleClass = `${s.cont} ${s.appWrapper}`

    let items = [
        {
            image: pig,
            price: 1000,
            desc: 'Nice little pig'
        },
        {
            image: note,
            price: 1000,
            desc: 'Comfortable notebook with high performance'
        },
        {
            image: car,
            price: 10000000,
            desc: 'Lux sport cat '
        },
    ]
    return (
        <div>
            <h1>Things Shop</h1>
            <div className={doubleClass}>
                {items.map(el => {
                    return <Item item={el}/>
                })}
            </div>

            <p className={s.doubleClass}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequuntur delectus doloribus, error labore molestiae odit repellat repudiandae tempora temporibus.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequuntur delectus doloribus, error labore molestiae odit repellat repudiandae tempora temporibus.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequuntur delectus doloribus, error labore molestiae odit repellat repudiandae tempora temporibus.
            </p>

        </div>
    );
};
