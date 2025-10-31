export default function AboutPage() {
  return (
    <div className="border-2 border-primary bg-card h-[calc(100vh-180px)] overflow-y-auto p-6 scanline">
      <div className="text-dos space-y-6">
        <div className="border-2 border-primary p-4 bg-secondary">
          <h1 className="text-2xl text-primary mb-4">╔═══ О ПРОЕКТЕ ═══╗</h1>
          <div className="space-y-2 text-foreground">
            <p>Название: MS-DOS Chat System</p>
            <p>Версия: 1.0</p>
            <p>Дата релиза: 31.10.2025</p>
            <p>Платформа: Web Browser (Retro Edition)</p>
          </div>
        </div>

        <div className="border-2 border-primary p-4 bg-secondary">
          <h2 className="text-xl text-accent mb-3">ОПИСАНИЕ</h2>
          <p className="text-foreground leading-relaxed">
            MS-DOS Chat - это современная реализация чат-системы,
            стилизованная под легендарную операционную систему MS-DOS.
            Проект сочетает ностальгию по классическому терминальному
            интерфейсу с современными веб-технологиями.
          </p>
        </div>

        <div className="border-2 border-primary p-4 bg-secondary">
          <h2 className="text-xl text-accent mb-3">ВОЗМОЖНОСТИ</h2>
          <div className="space-y-2 ml-4">
            <p className="text-foreground">
              <span className="text-primary">►</span> Обмен сообщениями в реальном времени
            </p>
            <p className="text-foreground">
              <span className="text-primary">►</span> Автоматическое присвоение уникального ID
            </p>
            <p className="text-foreground">
              <span className="text-primary">►</span> Просмотр истории сообщений
            </p>
            <p className="text-foreground">
              <span className="text-primary">►</span> Аутентичный DOS-интерфейс
            </p>
            <p className="text-foreground">
              <span className="text-primary">►</span> Эффект сканлайна монитора
            </p>
          </div>
        </div>

        <div className="border-2 border-primary p-4 bg-secondary">
          <h2 className="text-xl text-accent mb-3">ТЕХНОЛОГИИ</h2>
          <div className="space-y-1 text-foreground">
            <p>• React + TypeScript</p>
            <p>• Tailwind CSS</p>
            <p>• Vite</p>
            <p>• IBM Plex Mono Font</p>
          </div>
        </div>

        <div className="border-2 border-primary p-4 bg-secondary text-center">
          <p className="text-muted-foreground">
            ══════════════════════════════════════
          </p>
          <p className="text-foreground my-2">
            Made with 💚 at Poehali.dev
          </p>
          <p className="text-muted-foreground">
            ══════════════════════════════════════
          </p>
        </div>
      </div>
    </div>
  );
}
