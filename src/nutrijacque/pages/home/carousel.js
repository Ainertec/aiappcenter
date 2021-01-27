import React, { useState } from "react";
import {
    Carousel,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Carrousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel style={{ borderBottomRightRadius: 20, borderBottomLeftRadius: 20, boxShadow: "5px 5px 8px black" }} activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    style={{ borderBottomRightRadius: 20, borderBottomLeftRadius: 20 }}
                    className="d-block w-100"
                    src="https://i.ibb.co/8m40M4w/64747668-2874961069394995-8285739337077751808-n.png"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ borderBottomRightRadius: 20, borderBottomLeftRadius: 20 }}
                    className="d-block w-100"
                    src="https://i.ibb.co/SJPVJQ0/42930598-2665338517023919-8310850881281064960-n.png"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ borderBottomRightRadius: 20, borderBottomLeftRadius: 20 }}
                    className="d-block w-100"
                    src="https://i.ibb.co/ngC1Mk0/35682315-2556051901285915-711163901802184704-n.png"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ borderBottomRightRadius: 20, borderBottomLeftRadius: 20 }}
                    className="d-block w-100"
                    src="https://i.ibb.co/LxHcRY5/28685075-2485173175040455-5128351442412880115-n.png"
                />
            </Carousel.Item>
        </Carousel>
    );
}


/*
https://ibb.co/StGMy5r
https://ibb.co/Lk5gdpP
https://ibb.co/K5zX6zg
https://ibb.co/6Z3h6YM
https://ibb.co/KzCncH5
https://ibb.co/Qn6V0MZ
https://ibb.co/Ws6BsDF
*/