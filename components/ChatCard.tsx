import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, List, Home, Send, X, MoreHorizontal, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ChatCardProps {
    onClose: () => void;
}

type Message = {
    id: string;
    text: string;
    sender: 'user' | 'bot';
    timestamp: Date;
};

type View = 'menu' | 'conversation';

export const ChatCard: React.FC<ChatCardProps> = ({ onClose }) => {
    const [view, setView] = useState<View>('menu');
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputText, setInputText] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping, view]);

    const addMessage = (text: string, sender: 'user' | 'bot') => {
        const newMessage: Message = {
            id: Math.random().toString(36).substr(2, 9),
            text,
            sender,
            timestamp: new Date(),
        };
        setMessages((prev) => [...prev, newMessage]);
    };

    const handleOptionClick = (option: string) => {
        setView('conversation');
        addMessage(option, 'user');
        simulateBotResponse(option);
    };

    const handleSendMessage = (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!inputText.trim()) return;

        // If sending from menu view, switch to conversation first
        if (view === 'menu') {
            setView('conversation');
        }

        const text = inputText;
        setInputText('');
        addMessage(text, 'user');
        simulateBotResponse(text);
    };

    const simulateBotResponse = (userText: string) => {
        setIsTyping(true);
        setTimeout(() => {
            let response = "I'd be happy to help you with that. Could you provide a few more details?";

            if (userText.includes("Ask a question")) {
                response = "Great! What exactly would you like to know about our properties or services?";
            } else if (userText.includes("Share your criteria")) {
                response = "Excellent. To find your perfect match, tell me about your preferred location, budget, and number of bedrooms.";
            } else if (userText.includes("Explore")) {
                response = "We have a stunning collection available. Are you interested in a modern apartment or a private villa?";
            }

            setIsTyping(false);
            addMessage(response, 'bot');
        }, 1500);
    };

    return (
        <div className="w-full max-w-[450px] bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden font-sans border border-white/20 flex flex-col max-h-[600px] h-[500px]">
            {/* Header */}
            <div className="bg-[#f8f5f2] p-4 flex items-center justify-between border-b border-gray-100 shrink-0">
                <div className="flex items-center gap-3">
                    {view === 'conversation' && (
                        <button
                            onClick={() => setView('menu')}
                            className="mr-1 p-1 hover:bg-gray-200 rounded-full transition-colors text-gray-500"
                        >
                            <ArrowLeft size={18} />
                        </button>
                    )}
                    <div className="relative">
                        <img
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces"
                            alt="Emma"
                            className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                        />
                        <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></div>
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-800 text-base leading-tight">Emma</h3>
                        <p className="text-xs text-gray-500">Online now - Ask me anything!</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                    <button className="p-1 hover:bg-gray-200 rounded-full transition-colors">
                        <MoreHorizontal size={20} />
                    </button>
                    <button
                        onClick={onClose}
                        className="p-1 hover:bg-gray-200 rounded-full transition-colors hover:text-red-500"
                    >
                        <X size={20} />
                    </button>
                </div>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto p-6 bg-[#fcfbf9] scrollbar-thin scrollbar-thumb-gray-200">
                <AnimatePresence mode="wait">
                    {view === 'menu' ? (
                        <motion.div
                            key="menu"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.2 }}
                        >
                            {/* Welcome Bubble */}
                            <div className="bg-white rounded-2xl rounded-tl-none p-4 shadow-sm mb-6 border border-gray-100 inline-block max-w-[90%]">
                                <p className="text-gray-700 text-[15px]">Hi! How can I help you today?</p>
                            </div>

                            {/* Action Buttons */}
                            <div className="space-y-3">
                                <button
                                    onClick={() => handleOptionClick("Ask a question")}
                                    className="w-full bg-white hover:bg-gray-50 p-4 rounded-xl text-left shadow-sm border border-gray-100 flex items-center gap-4 group transition-all duration-200 hover:scale-[1.02] hover:shadow-md"
                                >
                                    <div className="bg-[#eef2f6] p-2 rounded-lg text-slate-600 group-hover:bg-[#e0e6ed] transition-colors">
                                        <MessageCircle size={20} className="text-slate-600" />
                                    </div>
                                    <span className="text-gray-700 font-medium">Ask a question</span>
                                </button>

                                <button
                                    onClick={() => handleOptionClick("Share your criteria")}
                                    className="w-full bg-white hover:bg-gray-50 p-4 rounded-xl text-left shadow-sm border border-gray-100 flex items-center gap-4 group transition-all duration-200 hover:scale-[1.02] hover:shadow-md"
                                >
                                    <div className="bg-[#eef2f6] p-2 rounded-lg text-slate-600 group-hover:bg-[#e0e6ed] transition-colors">
                                        <List size={20} className="text-slate-600" />
                                    </div>
                                    <span className="text-gray-700 font-medium">Share your criteria</span>
                                </button>

                                <button
                                    onClick={() => handleOptionClick("Explore apartments or villas")}
                                    className="w-full bg-white hover:bg-gray-50 p-4 rounded-xl text-left shadow-sm border border-gray-100 flex items-center gap-4 group transition-all duration-200 hover:scale-[1.02] hover:shadow-md"
                                >
                                    <div className="bg-[#eef2f6] p-2 rounded-lg text-slate-600 group-hover:bg-[#e0e6ed] transition-colors">
                                        <Home size={20} className="text-slate-600" />
                                    </div>
                                    <span className="text-gray-700 font-medium">Explore apartments or villas</span>
                                </button>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="conversation"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.2 }}
                            className="space-y-4"
                        >
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[85%] p-3 rounded-2xl text-[15px] shadow-sm ${msg.sender === 'user'
                                                ? 'bg-blue-600 text-white rounded-br-none'
                                                : 'bg-white text-gray-700 rounded-tl-none border border-gray-100'
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            ))}

                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm flex gap-1">
                                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></span>
                                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></span>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Footer / Input */}
            <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-gray-100 shrink-0">
                <div className="bg-[#f0f2f5] rounded-full px-4 py-2 flex items-center gap-3 transition-all focus-within:ring-2 focus-within:ring-blue-100">
                    <input
                        type="text"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        placeholder="Type your message..."
                        className="bg-transparent flex-1 outline-none text-gray-700 placeholder-gray-500 text-sm"
                    />
                    <button
                        type="submit"
                        disabled={!inputText.trim()}
                        className={`w-8 h-8 flex items-center justify-center rounded-full text-white transition-all shadow-sm ${inputText.trim()
                                ? 'bg-blue-600 hover:bg-blue-700'
                                : 'bg-[#8b9bb4] cursor-not-allowed'
                            }`}
                    >
                        <Send size={14} className="ml-0.5" />
                    </button>
                </div>
            </form>
        </div>
    );
};
