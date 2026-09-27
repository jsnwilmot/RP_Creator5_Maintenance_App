import {
  navigationItems,
  type NavigationItemId,
} from '../app/navigation';

interface AppNavigationProps {
  readonly activeItemId: NavigationItemId;
  readonly onSelect: (itemId: NavigationItemId) => void;
}

export function AppNavigation({
  activeItemId,
  onSelect,
}: AppNavigationProps) {
  return (
    <nav aria-label="Primary navigation">
      <p className="navigation-heading">Workspace</p>
      <ul className="navigation-list">
        {navigationItems.map((item) => {
          const isActive = item.id === activeItemId;

          return (
            <li key={item.id}>
              <button
                className="navigation-button"
                type="button"
                aria-current={isActive ? 'page' : undefined}
                onClick={() => onSelect(item.id)}
              >
                {item.label}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
