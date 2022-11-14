import axios from "axios";
import React from "react";
import { useCallback, useEffect, useState } from "react";
import {Chart} from "chart.js";
import {Price} from "../price";

interface price {
    price: number;
    time: number;
}

export const PricePage = () =>
{
    const [prices, setPrices] = useState<price[]>([
        { price: 0, time: 0 }, { price: 0, time: 0 },{ price: 0, time: 0 }, { price: 0, time: 0 },{ price: 0, time: 0 }, { price: 0, time: 0 },{ price: 0, time: 0 }, { price: 0, time: 0 },{ price: 0, time: 0 }, { price: 0, time: 0 },{ price: 0, time: 0 }, { price: 0, time: 0 },{ price: 0, time: 0 }, { price: 0, time: 0 },{ price: 0, time: 0 }, { price: 0, time: 0 },{ price: 0, time: 0 }, { price: 0, time: 0 },{ price: 0, time: 0 }, { price: 0, time: 0 },{ price: 0, time: 0 }, { price: 0, time: 0 },{ price: 0, time: 0 }, { price: 0, time: 0 }
    ]);

    let formattedPrices: any[];
    formattedPrices = [];

    prices.forEach((data) =>{
        formattedPrices.push(<Price price={data.price} time={data.time}></Price>)
    })

    React.useEffect(() => {
        axios
            .get("http://127.0.0.1:5000/price", {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "text/plain",
                },
            })
            .then((response) => {
                setPrices(response.data);
                console.log(prices);
            });
    }, []);

    return (
        <>
            <div>
                {formattedPrices}
            </div>
        </>
    )
};
