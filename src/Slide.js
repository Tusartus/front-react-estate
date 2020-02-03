import React from 'react';

import { Slide } from 'react-slideshow-image';

import rl1 from './img/rl1.jpg';
import rl2 from './img/rl2.jpg';
import rl3 from './img/rl3.jpg';
import rl4 from './img/rl4.jpg';
import rl5 from './img/rl5.jpg';
import rl6 from './img/rl6.jpg';


import './Slide.css';


const proprietes = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows:true

}

const Slideshowhome = () => {
    return (
        <div className="containerSlide col-md-12">
             <h2 className="text-center mb-5 name-architect">Architecture works </h2>
            <Slide {...proprietes}>

                <div className="each-slide">
                    <div>
                        <img className="img-responsive" src={rl1} alt="estate real" />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img className="img-responsive" src={rl2} alt="immobilier " />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img className="img-responsive" src={rl3} alt="immobilier" />
                    </div>
                </div>

                <div className="each-slide">
                    <div>
                        <img className="img-responsive" src={rl4} alt="immobilier" />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img className="img-responsive"  src={rl5} alt="immobilier" />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img  className="img-responsive" src={rl6} alt="immobolier" />
                    </div>
                </div>

            </Slide>
        </div>
    )
}

export default Slideshowhome;