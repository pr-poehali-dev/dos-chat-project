interface DOSNavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function DOSNavigation({ currentPage, onNavigate }: DOSNavigationProps) {
  const menuItems = [
    { key: 'F1', label: 'Главная', page: 'home' },
    { key: 'F2', label: 'Чат', page: 'chat' },
    { key: 'F3', label: 'История', page: 'history' },
    { key: 'F4', label: 'О проекте', page: 'about' },
  ];

  return (
    <div className="border-2 border-primary bg-card mt-2">
      <div className="flex">
        {menuItems.map((item, index) => (
          <button
            key={item.page}
            onClick={() => onNavigate(item.page)}
            className={`flex-1 p-2 text-dos border-r-2 last:border-r-0 border-primary transition-colors ${
              currentPage === item.page
                ? 'bg-primary text-primary-foreground'
                : 'hover:bg-secondary'
            }`}
          >
            <span className="text-accent-foreground">{item.key}</span> {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}
