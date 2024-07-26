import React, { useState } from "react";

const ChatbotB = () => {
    const [userInput, setUserInput] = useState("");
    const [botResponse, setBotResponse] = useState("Hello! Ask me anything about you.");

    const handleSubmit = (event) => {
        event.preventDefault();
        // Functionality to handle user questions and fetch bot responses can be added here.
        // For now, a simple reply is provided after a delay of 2 seconds.

        let userQuestion = userInput;
        setTimeout(() => {
            let response;

            // Switch statement to handle specific user questions
            switch (userQuestion.toLowerCase()) {
                case "hi":
                case "hello":
                    response = "Hello there!";
                    break;
                case "how are you?":
                    response = "I'm just a chatbot, but thanks for asking!";
                    break;
                default:
                    response = "I'm sorry, I don't understand that.";
            }

            setBotResponse(response);
            setUserInput("");
        }, 2000);
    };

    return (
        <div className="bg-gray-200 rounded-md p-4 shadow-md my-4">
            <h3 className="text-xl font-bold mb-2">Chatbot</h3>
            <p className="text-gray-600 italic">Ask me anything.</p>
            <form className="flex items-center" onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="p-2 bg-gray-100 rounded-lg flex-grow"
                    placeholder="Type your question..."
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                />
                <button className="bg-blue-500 hover:bg-blue-400 text-white font-semi-bold py-2 px-4 ml-3">
                    Send
                </button>
            </form>
            <div className="mt-4 border-t-2 border-gray-100 pt-4">
                <p className="text-gray-600 italic">{botResponse}</p>
            </div>
        </div>
    );
};
export default ChatbotB;
