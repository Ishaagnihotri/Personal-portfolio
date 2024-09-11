import React from 'react'
import { servicesData } from './ServicesData'

const Services = () => {
    return (
        <div className="section-box mt-4" id="services">
            <div className="row">
                <div className="col-12 col-md-10 col-xl-8">
                    <h6 className="title-heading mb-3" data-backdrop-text={servicesData.mainData.title}>{servicesData.mainData.title}</h6>
                    <h1>{servicesData.mainData.title2}</h1>
                    <p>{servicesData.mainData.description}</p>
                </div>
            </div>
            <div className="mt-4 mt-lg-5">
                <ul className="services-list">
                    {servicesData.services.map((item, index) => (
                        <li key={index} className="services-item">
                            <div className="services-number">
                                <h1 className="font-family-mono fw-semi-bold stroke-text display-4">{item.number}</h1>
                            </div>
                            <div className="services-title icon-xl">
                                <i className={item.bootstrapIcon}></i>
                                <h6 className="mono-heading">{item.title}</h6>
                            </div>
                            <div>
                                <p>{item.description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Services