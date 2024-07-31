import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async () => {
        setError(""); // Clear any existing error message

        try {
            // Replace 'http://localhost:3000/api/contact' with your actual backend API endpoint
            await axios.post("http://localhost:3000/api/contact", { name, email, message });
            setSubmitted(true); // Form was successfully submitted
        } catch (error) {
            setError("There was an error sending the message. Please try again later.");
        }
    };

    return (
        <div className="border-b border-neutral-900 pb-4">
            <div>
                <h2 className="my-20 text-4xl text-center">Contact Me</h2>
                {submitted ? (
                    <div className="text-green-600 text-center mb-4">Thank you for contacting me!</div>
                ) : (
                    <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-white">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white text-gray-900"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
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
                                id="email"
                                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white text-gray-900"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="your_email@example.com"
                                required
                            />
                        </div>

                        <div className="mt-6">
                            <label htmlFor="message" className="block text-sm font-medium text-white">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows="4"
                                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white text-gray-900"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
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
