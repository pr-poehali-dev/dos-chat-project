import { useState, useRef, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface Message {
  id: number;
  text: string;
  timestamp: Date;
  user: string;
}

export default function ChatWindow() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'Система: Добро пожаловать в MS-DOS Chat!',
      timestamp: new Date(),
      user: 'SYSTEM',
    },
    {
      id: 2,
      text: 'Система: Введите сообщение и нажмите Enter',
      timestamp: new Date(),
      user: 'SYSTEM',
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [username] = useState('USER' + Math.floor(Math.random() * 9999));
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (inputText.trim()) {
      const newMessage: Message = {
        id: Date.now(),
        text: inputText,
        timestamp: new Date(),
        user: username,
      };
      setMessages([...messages, newMessage]);
      setInputText('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  const formatTime = (date: Date) => {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  return (
    <div className="border-2 border-primary bg-card h-[calc(100vh-180px)] flex flex-col">
      <div className="border-b-2 border-primary p-2 text-dos bg-secondary">
        <div className="flex justify-between">
          <span>╔═══════════════════ ЧАТ ═══════════════════╗</span>
          <span>[{username}]</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 scanline space-y-2">
        {messages.map((msg) => (
          <div key={msg.id} className="text-dos">
            <span className="text-muted-foreground">[{formatTime(msg.timestamp)}]</span>{' '}
            <span className="text-accent">{msg.user}:</span>{' '}
            <span className="text-foreground">{msg.text}</span>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="border-t-2 border-primary p-2 bg-secondary">
        <div className="flex gap-2">
          <span className="text-dos text-accent whitespace-nowrap">C:\CHAT&gt;</span>
          <Input
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Введите сообщение..."
            className="flex-1 bg-input border-primary text-foreground text-dos focus:ring-primary"
          />
          <Button
            onClick={handleSend}
            className="bg-primary text-primary-foreground hover:bg-accent text-dos border-2 border-primary"
          >
            SEND
          </Button>
        </div>
      </div>
    </div>
  );
}
