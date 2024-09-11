import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Make sure you import emailjs
import { connectData } from './ConnectData';

const Connect = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        subject: '',
    });

    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, message, subject } = formData;

        if (name.length === 0 || email.length === 0 || message.length === 0) {
            setSubmitStatus('error');
        } else {
            try {
                await emailjs.send(
                    "service_c0ag3sx", // service id
                    "template_3klnowr", // template id
                    formData,
                    "IYkaqN6xfXe4lLNP0" // public api
                );
                setSubmitStatus('success');
                setFormData({ name: '', email: '', message: '', subject: '' });
            } catch (error) {
                console.log(error.text);
                setSubmitStatus('error');
            }
        }
    };

    return (
        <div className="section-box mt-4" id="contact">
            <div className="row">
                <div className="col-12 col-md-10 col-xl-8">
                    <h6 className="title-heading mb-3" data-backdrop-text={connectData.mainData.title}>
                        {connectData.mainData.title2}
                    </h6>
                    <h1>{connectData.mainData.title3}</h1>
                    <p>{connectData.mainData.description}</p>
                    <ul className="list-inline-pills mt-4">
                        <li>Phone: {connectData.mainData.phone}</li>
                        <li>Email: {connectData.mainData.email}</li>
                        <li>Address: {connectData.mainData.address}</li>
                    </ul>
                </div>
            </div>
            <div className="mt-4 mt-lg-5">
                {/* Contact Form */}
                <div className="contact-form">
                    <form method="post" id="contactform" onSubmit={handleSubmit}>
                        <div className="row gx-3 gy-0">
                            <div className="col-12 col-md-6">
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="col-12 col-md-6">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="E-Mail"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />
                        <textarea
                            name="message"
                            id="message"
                            placeholder="Message"
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                        <button className="button button-md button-dark" type="submit">Send Message</button>
                    </form>
                    {/* Submit result */}
                    <div className="submit-result">
                        {submitStatus === 'success' && (
                            <span id="success">Thank you! Your Message has been sent.</span>
                        )}
                        {submitStatus === 'error' && (
                            <span id="error">Something went wrong. Please try again!</span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Connect;
