import React from 'react';
import Slick from 'react-slick';
import './slider.css';
import {Link} from 'react-router-dom';



const SlideTemplate = (props)=>{
    let template = null;
    let settings = {
        dots:true,
        infinite:true,
        arrows:false,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1,
        ...props.settings
    }

    switch(props.type){
        case ('featured'):
            template = props.data.map((item,i)=>{
                return (
                    <div key={i}>
                        <div className='featured-item'>
                            <div className='featured-image'
                                style={{
                                    background: `url(../images/articles/${item.image})`
                                }}></div>
                            <Link to={`/articles/${item.id}`}>
                                <div className="featured-caption">
                                    {item.title}
                                </div>
                            </Link>
                        </div>

                    </div>
                )
            })
            break;
        default:
        template = null;

    }




    return (
    <Slick {...settings}>
        {template}
    </Slick>
    )
}
export default SlideTemplate; 