import React, {  } from 'react'
import { Card, CardActions, CardContent, CardHeader, makeStyles } from '@material-ui/core'

const userStyles = makeStyles({
    root : {
        minWidth : '300px'
    }
});

export default function CardComp({ orderID, items, price }) {

    const classes = userStyles();

    const handleList = () => {
        return items.map((item,idx) => {
            return <p>{ idx + ". " + item }</p>
        })
    }

    return(
        <Card className={classes.root}>
            <CardHeader
                title={ <p style={{ fontFamily : "bold" }} >ORDER ID :: {orderID}</p> } 
            />
            <CardContent>
                <h4 style={{ fontFamily : "bold" }} >ITEM LIST</h4>
                { handleList() }
            </CardContent>
            <CardActions>
                <p>PRICE :: {price} </p>
            </CardActions>
        </Card>
    )

}