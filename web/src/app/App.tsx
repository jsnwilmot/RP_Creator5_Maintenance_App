import { useState } from 'react';

import { AppNavigation } from '../ui/AppNavigation';
import { PlaceholderView } from '../ui/PlaceholderView';
import { navigationItems, type NavigationItemId } from './navigation';

const logoPath = `${import.meta.env.BASE_URL}RP_Apps_Logo.png`;

export function App() {
  const [activeItemId, setActiveItemId] =
    useState<NavigationItemId>('dashboard');

  const activeItem =
    navigationItems.find((item) => item.id === activeItemId) ??
    navigationItems[0];

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <header className="app-header">
        <div className="app-header__inner">
          <img
            className="app-logo"
            src={logoPath}
            alt="Rose & Paw Applications"
            width="88"
            height="88"
          />
          <div className="app-identity">
            <p className="app-identity__organization">Rose & Paw Applications</p>
            <h1>Creator 5 Maintenance App</h1>
            <p className="app-identity__summary">
              A clear, local-first workspace for caring for your printer.
            </p>
          </div>
        </div>
      </header>

      <div className="app-layout">
        <aside className="app-sidebar">
          <AppNavigation
            activeItemId={activeItemId}
            onSelect={setActiveItemId}
          />
          <div className="privacy-note">
            <p className="privacy-note__label">Local by design</p>
            <p>
              This foundation includes no accounts, cloud sync, or maintenance
              data collection.
            </p>
          </div>
        </aside>

        <main className="app-main" id="main-content" tabIndex={-1}>
          <PlaceholderView item={activeItem} />
        </main>
      </div>

      <footer className="app-footer">
        <div className="app-footer__inner">
          <p>
            Unofficial community tool. Rose & Paw Applications is not affiliated
            with, sponsored by, or endorsed by FlashForge.
          </p>
          <p>Rose & Paw Creator 5 Maintenance App</p>
        </div>
      </footer>
    </div>
  );
}
