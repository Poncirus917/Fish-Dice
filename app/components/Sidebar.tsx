// app/components/Sidebar.tsx
"use client";

interface SidebarProps {
  activeTab: 'import' | 'console';
  onTabChange: (tab: 'import' | 'console') => void;
}

export default function Sidebar({ activeTab, onTabChange }: SidebarProps) {
  const menuItems = [
    { id: 'import', label: '角色导入', icon: '📂' },
    { id: 'console', label: '跑团控制台', icon: '🎮' },
  ];

  return (
    <aside className="w-20 sm:w-64 bg-slate-900 text-slate-300 flex flex-col transition-all duration-300 shadow-xl">
      {/* Logo 区域 */}
      <div className="p-6 border-b border-slate-800 flex items-center gap-3">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg shadow-blue-900/20">
          🐟
        </div>
        <h1 className="hidden sm:block font-bold text-xl text-white tracking-tight">
          鱼骰 <span className="text-xs text-blue-500 font-normal ml-1 flex-none">V1.0</span>
        </h1>
      </div>

      {/* 导航菜单 */}
      <nav className="flex-1 p-3 space-y-1 mt-4">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onTabChange(item.id as 'import' | 'console')}
            className={`
              w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group
              ${activeTab === item.id 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/40' 
                : 'hover:bg-slate-800 hover:text-white'}
            `}
          >
            <span className="text-xl flex-shrink-0">{item.icon}</span>
            <span className={`hidden sm:block font-medium ${activeTab === item.id ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'}`}>
              {item.label}
            </span>
            
            {/* 激活状态的小指示条 */}
            {activeTab === item.id && (
              <div className="hidden sm:block ml-auto w-1.5 h-1.5 bg-blue-200 rounded-full shadow-[0_0_8px_rgba(191,219,254,0.8)]" />
            )}
          </button>
        ))}
      </nav>

      {/* 底部信息 (可选) */}
      <div className="p-4 border-t border-slate-800 text-[10px] text-slate-600 hidden sm:block">
        <p>© 2026 Fish Dice Tool</p>
        <p>Beta Preview v1.0</p>
      </div>
    </aside>
  );
}