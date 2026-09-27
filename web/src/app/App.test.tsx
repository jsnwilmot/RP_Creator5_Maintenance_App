import { fireEvent, render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { App } from './App';

const navigationLabels = [
  'Dashboard',
  'Maintenance',
  'Service History',
  'Backup & Restore',
  'Settings',
  'Help / About',
] as const;

describe('App', () => {
  it('renders the Rose & Paw application identity and shell', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'Creator 5 Maintenance App',
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('img', { name: 'Rose & Paw Applications' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('provides text-labeled primary navigation controls', () => {
    render(<App />);

    const navigation = screen.getByRole('navigation', {
      name: 'Primary navigation',
    });

    for (const label of navigationLabels) {
      expect(
        within(navigation).getByRole('button', { name: label }),
      ).toBeInTheDocument();
    }

    expect(
      within(navigation).getByRole('button', { name: 'Dashboard' }),
    ).toHaveAttribute('aria-current', 'page');
  });

  it('switches between the Phase 1 placeholder views', () => {
    render(<App />);

    fireEvent.click(screen.getByRole('button', { name: 'Maintenance' }));

    expect(
      screen.getByRole('heading', { level: 2, name: 'Maintenance' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Maintenance' }),
    ).toHaveAttribute('aria-current', 'page');
  });

  it('displays the required unofficial community disclaimer', () => {
    render(<App />);

    expect(
      screen.getByText(
        'Unofficial community tool. Rose & Paw Applications is not affiliated with, sponsored by, or endorsed by FlashForge.',
      ),
    ).toBeInTheDocument();
  });
});
