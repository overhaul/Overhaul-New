import React, { useState } from 'react';
import Icon from '../components/Icons'

const Accordion = ({ title, paragraph, icon }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="accordion-item">
            <div className="row block-what-we-do_content gsap-fade-in">
                <div className="col-xs-12 block-what-we-do_title">
                    <Icon name={icon}/>
                    <h2 className="col-xs-12 ">{ title }</h2>
                    <button aria-label="open" onClick={() => setIsActive(!isActive)} className='arrow-button'>
                        <span className={`close ${isActive ? 'open' : ''}`}></span>
                    </button>
                </div>
            </div>
            <div className={`accordion content col-xs-12 ${isActive ? 'open' : ''}`}>
                { paragraph ? <p className="col-xs-12" dangerouslySetInnerHTML={{ __html:paragraph}}></p> : ''}
            </div>
        </div>
    );
};

export default Accordion;