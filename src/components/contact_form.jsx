import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const form = useRef();
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();
        setError(""); // Clear any existing error message

        const templateParams = {
            to_name: 'Abhinav', // Replace with actual recipient name
            from_name: form.current.user_name.value,
            from_email: form.current.user_email.value,
            message: form.current.message.value,
        };

        emailjs
            .send('service_gqxq8x4', 'template_s6tguug', templateParams, import.meta.env.VITE_EMAILJS_KEY)
            .then(
                () => {
                    console.log('SUCCESS!');
                    setSubmitted(true); // Form was successfully submitted
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setError("There was an error sending the message. Please try again later.");
                }
            );
    };

    return (
        <div className="border-b border-neutral-900 pb-4">
            <div>
                <h2 className="my-20 text-4xl text-center">Contact Me</h2>
                {submitted ? (
                    <div className="text-green-600 text-center mb-4">Thank you for contacting me!</div>
                ) : (
                    <form ref={form} onSubmit={sendEmail}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-white">
                                Name
                            </label>
                            <input
                                type="text"
                                name="user_name"
                                id="name"
                                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white text-gray-900"
                                placeholder="Your name"
                                required
                            />
                        </div>

                        <div className="mt-4">
                            <label htmlFor="email" className="block text-sm font-medium text-white">
                                Email Address
                            </label>
                            <input
                                type="email"
                                name="user_email"
                                id="email"
                                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white text-gray-900"
                                placeholder="your_email@example.com"
                                required
                            />
                        </div>

                        <div className="mt-6">
                            <label htmlFor="message" className="block text-sm font-medium text-white">
                                Message
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                rows="4"
                                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white text-gray-900"
                                placeholder="Your message..."
                                required
                            ></textarea>
                        </div>

                        {error && <div className="text-red-500 text-center mt-2">{error}</div>}

                        <div className="text-right mt-2">
                            <button
                                className="px-4 py-2 bg-gradient-to-b from-purple-700 to-black font-medium rounded-lg text-white hover:from-purple-600"
                                type="submit"
                            >
                                Send
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default ContactForm;
