import React, { useState } from 'react';

const ChatbotA = () => {
    const [userInput, setUserInput] = useState('');
    const [botResponse, setBotResponse] = useState('Hello! How can I help you?');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Functionality to handle chat responses will be added here
        // For now, the bot will respond with a default message after a delay
        setBotResponse("Let me think...");

        setTimeout(() => {
            setBotResponse(`Hello! I'm still under development. But soon I will be able to answer questions about you.`);
        }, 500);

        setUserInput('');
    };

    return (
        <div className="bg-gray-200 p-5 flex flex-col items-center shadow-md rounded-md">
            <div className="max-w-3xl">
                <h2 className="text-2xl font-bold text-center">Chatbot</h2>
                <div className="w-full mt-5">
                    <p className="text-sm mt-2 text-gray-600">Ask me anything</p>
                    <form className="flex items-center" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            className="p-2 bg-gray-200 rounded-lg flex-grow"
                            placeholder="Type your question..."
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                        />
                        <button className="ml-4 bg-gradient-to-b from-gray-700 to-gray-900 text-white font-medium p-2 text-sm rounded-lg hover:scale-105 duration-300 " type="submit">
                            Send
                        </button>
                    </form>
                </div>
                <div className="mt-4 max-w-md">
                    <p className="text-sm text-gray-600 italic">{botResponse}</p>
                </div>
            </div>
        </div>
    );
};
export default ChatbotA;
