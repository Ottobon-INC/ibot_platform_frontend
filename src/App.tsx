import React from 'react';

function App() {
  return (
    <div className="min-h-screen w-full bg-surface-base text-ink-gray-9 flex flex-col md:flex-row">
      {/* Desktop Sidebar / Mobile Bottom Nav Placeholder */}
      <aside className="hidden md:flex w-56 border-r border-outline-gray-1 bg-surface-gray-1 flex-col">
        <div className="p-4 border-b border-outline-gray-1 text-lg font-bold">IBOT Platform</div>
        <nav className="flex-1 p-2 space-y-1">
          <a href="#" className="block px-3 py-2 rounded bg-surface-gray-2 text-ink-gray-9 font-medium">Dashboard</a>
          <a href="#" className="block px-3 py-2 rounded text-ink-gray-6 hover:bg-surface-gray-2 hover:text-ink-gray-9">Projects</a>
          <a href="#" className="block px-3 py-2 rounded text-ink-gray-6 hover:bg-surface-gray-2 hover:text-ink-gray-9">Participants</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        <header className="h-12 border-b border-outline-gray-1 flex items-center px-4 bg-surface-base">
          <h1 className="text-lg font-semibold truncate">Dashboard</h1>
        </header>
        
        <div className="flex-1 overflow-auto p-4 md:p-6 space-y-6">
          <section className="bg-surface-gray-1 border border-outline-gray-1 rounded-lg p-4">
            <h2 className="text-xl font-bold mb-2">Welcome to IBOT</h2>
            <p className="text-ink-gray-6">
              Responsive dashboard configured for web, PWA, and mobile.
            </p>
          </section>
        </div>
      </main>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden flex h-14 border-t border-outline-gray-1 bg-surface-base items-center justify-around">
        <a href="#" className="text-ink-gray-9 text-sm font-medium">Home</a>
        <a href="#" className="text-ink-gray-6 text-sm">Projects</a>
        <a href="#" className="text-ink-gray-6 text-sm">More</a>
      </nav>
    </div>
  );
}

export default App;
