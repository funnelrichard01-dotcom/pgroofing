import React, { useState, useRef, useEffect } from 'react';
import { 
  MessageSquare, 
  X, 
  Send, 
  Phone, 
  CalendarCheck, 
  Sparkles, 
  ShieldCheck, 
  RotateCcw, 
  User, 
  Bot,
  Minimize2,
  Maximize2
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { ChatMessage } from '../types';

interface ChatAssistantProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenEstimate: () => void;
  initialPrompt?: string;
}

export const ChatAssistant: React.FC<ChatAssistantProps> = ({
  isOpen,
  onClose,
  onOpenEstimate,
  initialPrompt,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-1',
      role: 'model',
      content:
        "Hello! I'm the P&G Roofing Assistant. P&G Roofing Contractors Corp (License #CCC1329409) provides premier residential and commercial roofing across South Florida.\n\nHow can I help you today? You can ask about our roofing systems (tile, metal, shingle, flat), active leak repairs, free roof inspections, or financing options.",
      timestamp: Date.now(),
      suggestions: [
        "Tell me about P&G Roofing",
        "What do you guys do?",
        "My roof is leaking",
        "Do you install tile?",
        "Do you offer financing?",
      ],
    },
  ]);

  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, messages]);

  // Handle passed initialPrompt if any
  useEffect(() => {
    if (initialPrompt && isOpen) {
      handleSendMessage(initialPrompt);
    }
  }, [initialPrompt]);

  const handleSendMessage = async (textToSend?: string) => {
    const messageText = (textToSend || input).trim();
    if (!messageText || isTyping) return;

    const userMessage: ChatMessage = {
      id: `usr-${Date.now()}`,
      role: 'user',
      content: messageText,
      timestamp: Date.now(),
    };

    const newHistory = [...messages, userMessage];
    setMessages(newHistory);
    setInput('');
    setIsTyping(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: messageText,
          messages: newHistory.map(m => ({ role: m.role, content: m.content })),
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      const reply = data.reply || "P&G Roofing is here to help! We offer free roof inspections and estimates. Please call us at (305) 300-5145 or message us on WhatsApp.";

      // Generate dynamic follow-up suggestions based on context
      const dynamicSuggestions: string[] = [];
      const lowerReply = reply.toLowerCase();
      if (lowerReply.includes('inspection') || lowerReply.includes('estimate')) {
        dynamicSuggestions.push("Schedule a Free Inspection");
      }
      if (lowerReply.includes('tile')) {
        dynamicSuggestions.push("What tile styles are available?");
      }
      if (lowerReply.includes('metal')) {
        dynamicSuggestions.push("How long does metal roofing last?");
      }
      if (lowerReply.includes('leak') || lowerReply.includes('repair')) {
        dynamicSuggestions.push("I need someone to look at my roof");
      }
      if (lowerReply.includes('commercial')) {
        dynamicSuggestions.push("What flat roof systems do you install?");
      }

      const assistantMessage: ChatMessage = {
        id: `bot-${Date.now()}`,
        role: 'model',
        content: reply,
        timestamp: Date.now(),
        suggestions: dynamicSuggestions.slice(0, 3),
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (err) {
      console.warn('Chat request failed, using local verified knowledge responder:', err);
      // Graceful local responder so the chat NEVER fails for the user
      const fallbackReply = "P&G Roofing Contractors Corp (License #CCC1329409) is here to help! We provide free roof inspections, estimates, repairs, and installations for metal, tile, shingle, flat roofs, and waterproofing across South Florida. Would you like to schedule an inspection, or speak with our team at (305) 300-5145?";

      const assistantMessage: ChatMessage = {
        id: `bot-${Date.now()}`,
        role: 'model',
        content: fallbackReply,
        timestamp: Date.now(),
      };
      setMessages(prev => [...prev, assistantMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleReset = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        role: 'model',
        content:
          "Conversation restarted. I am your P&G Roofing Assistant. How can I help you with your roofing project or questions today?",
        timestamp: Date.now(),
        suggestions: [
          "Tell me about P&G Roofing",
          "What do you guys do?",
          "How much is a roof?",
          "Do you offer financing?",
        ],
      },
    ]);
  };

  const [showTestList, setShowTestList] = useState(false);

  const ACCEPTANCE_TESTS = [
    "tell me about P&G Roofing",
    "what do you guys do",
    "yeah",
    "my roof is not good",
    "it leaks",
    "how much",
    "do you install tile",
    "what areas do you service",
    "do you work on commercial buildings",
    "are you licensed",
    "how long does a roof replacement take",
    "can I stay in my home",
    "do you offer financing",
    "what happens if my roof leaks",
    "how does the process work",
    "are u mad",
    "thanks",
    "okay",
    "asdfghjkl",
    "I need someone to look at my roof"
  ];

  if (!isOpen) return null;

  return (
    <div 
      className={`fixed z-50 transition-all duration-200 flex flex-col bg-white shadow-2xl border border-slate-300 ${
        isExpanded
          ? 'inset-3 sm:inset-6 md:inset-10 rounded-3xl'
          : 'bottom-4 left-4 sm:bottom-6 sm:left-6 w-[95vw] sm:w-[440px] h-[580px] max-h-[85vh] rounded-3xl'
      }`}
    >
      {/* Assistant Header */}
      <div className="bg-slate-900 text-white p-4 rounded-t-3xl flex items-center justify-between border-b border-slate-800 shrink-0">
        <div className="flex items-center gap-2.5">
          <div className="relative">
            <div className="w-10 h-10 rounded-2xl bg-red-600 flex items-center justify-center text-white font-black text-sm shadow-sm">
              P&G
            </div>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 absolute -bottom-0.5 -right-0.5 ring-2 ring-slate-900"></span>
          </div>

          <div>
            <div className="flex items-center gap-1.5">
              <h3 className="font-extrabold text-sm sm:text-base text-white">
                P&G Roofing Assistant
              </h3>
            </div>
            <div className="text-[11px] text-slate-300 flex items-center gap-1">
              <span>Verified AI Assistant</span>
              <span>·</span>
              <span className="text-red-400 font-mono">Lic #CCC1329409</span>
            </div>
          </div>
        </div>

        {/* Window controls */}
        <div className="flex items-center gap-1">
          <button
            onClick={handleReset}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            title="Restart conversation"
            aria-label="Restart conversation"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors hidden sm:inline-flex"
            title={isExpanded ? 'Restore size' : 'Expand window'}
            aria-label="Toggle full window"
          >
            {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            title="Close Assistant"
            aria-label="Close Assistant"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Human Handoff Quick Strip & Test Accordion */}
      <div className="bg-slate-100 px-4 py-2 text-xs flex items-center justify-between border-b border-slate-200 text-slate-700 shrink-0">
        <button
          onClick={() => setShowTestList(!showTestList)}
          className="text-[11px] font-bold text-red-700 hover:text-red-800 underline underline-offset-2 flex items-center gap-1"
        >
          <span>Acceptance Test Prompts (1-20)</span>
          <span>{showTestList ? '▲' : '▼'}</span>
        </button>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${COMPANY_INFO.phones.primaryRaw}`}
            className="font-bold text-slate-800 hover:text-red-600 flex items-center gap-1 text-[11px]"
          >
            <Phone className="w-3 h-3 text-red-600" />
            <span>(305) 300-5145</span>
          </a>
          <span className="text-slate-300">|</span>
          <a
            href={COMPANY_INFO.whatsapp.directUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1 text-[11px]"
          >
            <MessageSquare className="w-3 h-3" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Collapsible Test Prompts Dropdown */}
      {showTestList && (
        <div className="bg-slate-900 text-white p-3 border-b border-slate-800 max-h-44 overflow-y-auto space-y-1.5 animate-in slide-in-from-top-2 duration-150 shrink-0 text-xs">
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
            Click any prompt to test the P&G Roofing AI Assistant:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
            {ACCEPTANCE_TESTS.map((testQuery, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setShowTestList(false);
                  handleSendMessage(testQuery);
                }}
                className="text-left px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-red-700 text-slate-200 hover:text-white transition-colors text-[11px] truncate flex items-center justify-between"
              >
                <span>{idx + 1}. "{testQuery}"</span>
                <span className="text-slate-400">→</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Message History */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/60">
        {messages.map((msg) => {
          const isUser = msg.role === 'user';
          return (
            <div
              key={msg.id}
              className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} space-y-1.5`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-xs sm:text-sm leading-relaxed shadow-sm ${
                  isUser
                    ? 'bg-red-600 text-white rounded-tr-none'
                    : 'bg-white text-slate-800 border border-slate-200/90 rounded-tl-none whitespace-pre-line'
                }`}
              >
                {msg.content}
              </div>

              {/* Suggestions chips */}
              {!isUser && msg.suggestions && msg.suggestions.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-1 max-w-[90%]">
                  {msg.suggestions.map((suggestion, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSendMessage(suggestion)}
                      className="px-2.5 py-1 rounded-lg bg-white hover:bg-red-50 text-slate-700 hover:text-red-700 text-[11px] font-medium border border-slate-200 hover:border-red-200 transition-colors shadow-2xs text-left"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}

        {isTyping && (
          <div className="flex items-center gap-2 p-3 bg-white rounded-2xl border border-slate-200 w-24">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-bounce"></span>
            <span className="w-2 h-2 rounded-full bg-red-600 animate-bounce [animation-delay:0.2s]"></span>
            <span className="w-2 h-2 rounded-full bg-red-600 animate-bounce [animation-delay:0.4s]"></span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Bottom Sticky Quick Conversion Triggers */}
      <div className="px-4 py-2 bg-white border-t border-slate-100 flex items-center justify-between gap-2 shrink-0">
        <button
          onClick={onOpenEstimate}
          className="flex-1 py-1.5 px-2 bg-red-50 hover:bg-red-100 text-red-700 text-[11px] font-bold rounded-lg border border-red-200 transition-colors flex items-center justify-center gap-1"
        >
          <CalendarCheck className="w-3.5 h-3.5" />
          <span>Get Free Estimate</span>
        </button>

        <a
          href={COMPANY_INFO.whatsapp.directUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="py-1.5 px-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-[11px] font-bold rounded-lg border border-emerald-200 transition-colors flex items-center gap-1"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>WhatsApp Us</span>
        </a>
      </div>

      {/* Input Area */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSendMessage();
        }}
        className="p-3 bg-white rounded-b-3xl border-t border-slate-200 flex items-center gap-2 shrink-0"
      >
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your question..."
          className="flex-1 px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-600"
          disabled={isTyping}
        />

        <button
          type="submit"
          disabled={!input.trim() || isTyping}
          className="p-2.5 rounded-xl bg-red-600 hover:bg-red-700 disabled:opacity-40 text-white transition-all shadow-sm"
          aria-label="Send message"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};
