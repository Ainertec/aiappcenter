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
                    src="https://scontent-gig2-1.xx.fbcdn.net/v/t1.0-9/64747668_2874961069394995_8285739337077751808_n.png?_nc_cat=103&ccb=2&_nc_sid=dd9801&_nc_ohc=1KZTX9KpBBcAX9wEZ6R&_nc_ht=scontent-gig2-1.xx&oh=13f3b9eb2facf147cc495a0ec24d3c55&oe=600D7A13"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ borderBottomRightRadius: 20, borderBottomLeftRadius: 20 }}
                    className="d-block w-100"
                    src="https://scontent-gig2-1.xx.fbcdn.net/v/t1.0-9/42930598_2665338517023919_8310850881281064960_n.png?_nc_cat=100&ccb=2&_nc_sid=e3f864&_nc_ohc=sI6Fvr8U6E0AX_3rTYl&_nc_ht=scontent-gig2-1.xx&oh=3dbab609be954c25b5bc6e5f9a840fb7&oe=60103F63"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ borderBottomRightRadius: 20, borderBottomLeftRadius: 20 }}
                    className="d-block w-100"
                    src="https://scontent-gig2-1.xx.fbcdn.net/v/t1.0-9/35682315_2556051901285915_711163901802184704_n.png?_nc_cat=102&ccb=2&_nc_sid=e3f864&_nc_ohc=QM0bpytgr_0AX9Xiz7b&_nc_ht=scontent-gig2-1.xx&oh=aaebe4d9ef00d98d66bec2aa7b29ea26&oe=601014FB"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ borderBottomRightRadius: 20, borderBottomLeftRadius: 20 }}
                    className="d-block w-100"
                    src="https://scontent-gig2-1.xx.fbcdn.net/v/t1.0-9/28685075_2485173175040455_5128351442412880115_n.png?_nc_cat=100&ccb=2&_nc_sid=e3f864&_nc_ohc=sLuQ8TLqpokAX_LENkP&_nc_ht=scontent-gig2-1.xx&oh=dcf110479af7cbd50232e2509d13a6aa&oe=60112377"
                />
            </Carousel.Item>
        </Carousel>
    );
}