import { useEffect, useState } from 'react';

export default function HomePage() {
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const asciiArt = `
    ███╗   ███╗███████╗      ██████╗  ██████╗ ███████╗
    ████╗ ████║██╔════╝      ██╔══██╗██╔═══██╗██╔════╝
    ██╔████╔██║███████╗█████╗██║  ██║██║   ██║███████╗
    ██║╚██╔╝██║╚════██║╚════╝██║  ██║██║   ██║╚════██║
    ██║ ╚═╝ ██║███████║      ██████╔╝╚██████╔╝███████║
    ╚═╝     ╚═╝╚══════╝      ╚═════╝  ╚═════╝ ╚══════╝
  `;

  return (
    <div className="border-2 border-primary bg-card h-[calc(100vh-180px)] overflow-y-auto p-6 scanline">
      <div className="text-dos space-y-4">
        <pre className="text-primary text-center leading-tight">{asciiArt}</pre>
        
        <div className="border-2 border-primary p-4 bg-secondary mt-8">
          <div className="space-y-2">
            <p className="text-foreground">
              C:\&gt; WELCOME.EXE
            </p>
            <p className="text-muted-foreground">
              ══════════════════════════════════════════════════════
            </p>
            <p className="text-foreground">
              Добро пожаловать в MS-DOS Chat System v1.0
            </p>
            <p className="text-muted-foreground">
              Copyright (C) 2025 Poehali.dev. All rights reserved.
            </p>
            <p className="text-muted-foreground">
              ══════════════════════════════════════════════════════
            </p>
          </div>
        </div>

        <div className="mt-8 space-y-3">
          <p className="text-foreground">
            <span className="text-accent">►</span> Система инициализирована успешно
          </p>
          <p className="text-foreground">
            <span className="text-accent">►</span> Сетевой протокол загружен
          </p>
          <p className="text-foreground">
            <span className="text-accent">►</span> Чат-модуль активирован
          </p>
        </div>

        <div className="border-2 border-primary p-4 bg-secondary mt-8">
          <p className="text-foreground mb-2">ДОСТУПНЫЕ КОМАНДЫ:</p>
          <div className="space-y-1 ml-4">
            <p className="text-muted-foreground">F1 - Главная страница</p>
            <p className="text-muted-foreground">F2 - Открыть чат</p>
            <p className="text-muted-foreground">F3 - Просмотр истории</p>
            <p className="text-muted-foreground">F4 - Информация о проекте</p>
          </div>
        </div>

        <div className="mt-8">
          <p className="text-foreground">
            C:\&gt; <span className={showCursor ? 'opacity-100' : 'opacity-0'}>█</span>
          </p>
        </div>
      </div>
    </div>
  );
}
