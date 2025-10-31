export default function HistoryPage() {
  const mockHistory = [
    { date: '31.10.2025', time: '14:23', user: 'USER1337', message: 'Привет всем!' },
    { date: '31.10.2025', time: '14:25', user: 'USER4892', message: 'Как дела?' },
    { date: '31.10.2025', time: '14:27', user: 'USER7621', message: 'Отлично! MS-DOS рулит!' },
    { date: '31.10.2025', time: '14:30', user: 'USER1337', message: 'Согласен, ностальгия...' },
    { date: '31.10.2025', time: '14:32', user: 'USER5544', message: 'Кто помнит Norton Commander?' },
    { date: '31.10.2025', time: '14:35', user: 'USER4892', message: 'Конечно! Легенда!' },
  ];

  return (
    <div className="border-2 border-primary bg-card h-[calc(100vh-180px)] overflow-y-auto scanline">
      <div className="border-b-2 border-primary p-2 text-dos bg-secondary">
        <span>╔═══════════════ ИСТОРИЯ СООБЩЕНИЙ ═══════════════╗</span>
      </div>

      <div className="p-4">
        <div className="border-2 border-primary bg-secondary p-2 mb-4">
          <div className="grid grid-cols-[100px_60px_100px_1fr] gap-2 text-dos text-muted-foreground">
            <span>ДАТА</span>
            <span>ВРЕМЯ</span>
            <span>ПОЛЬЗОВАТЕЛЬ</span>
            <span>СООБЩЕНИЕ</span>
          </div>
        </div>

        <div className="space-y-2">
          {mockHistory.map((entry, index) => (
            <div
              key={index}
              className="border border-primary p-2 bg-secondary hover:bg-muted transition-colors"
            >
              <div className="grid grid-cols-[100px_60px_100px_1fr] gap-2 text-dos">
                <span className="text-accent">{entry.date}</span>
                <span className="text-accent">{entry.time}</span>
                <span className="text-primary">{entry.user}</span>
                <span className="text-foreground">{entry.message}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="border-2 border-primary p-4 bg-secondary mt-6">
          <p className="text-dos text-muted-foreground text-center">
            ═══ Всего записей: {mockHistory.length} ═══
          </p>
        </div>
      </div>
    </div>
  );
}
