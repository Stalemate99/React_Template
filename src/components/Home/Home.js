import React from 'react';
import { Grid, GridList, GridListTileBar } from '@material-ui/core';

import Card from '../Card/Card';

const cardData = [ 
    { orderID : 1, price: 10, items: ["abc","abc"] },
    { orderID : 2, price: 10, items: ["abc","abc"] },
    { orderID : 3, price: 10, items: ["abc","abc"] },
    { orderID : 4, price: 10, items: ["abc","abc"] },
    { orderID : 5, price: 10, items: ["abc","abc"] },
    { orderID : 6, price: 10, items: ["abc","abc"] },
    { orderID : 7, price: 10, items: ["abc","abc"] },
    { orderID : 8, price: 10, items: ["abc","abc"] },
    { orderID : 9, price: 10, items: ["abc","abc"] },
]

export default function Home() {

    const handleCards = () => {
        
        return cardData.map((data)=> {
            return (
                <Grid container item xs={4} key={data.orderID} cols={1} >
                    <Card orderID={data.orderID} price={data.price} items={data.items} />
                </Grid>
            )
        })
        
    }

    return (
        <Grid container spacing={1} >
            { handleCards() }
        </Grid>
    )

}