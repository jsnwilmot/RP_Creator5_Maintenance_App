export type NavigationItemId =
  | 'dashboard'
  | 'maintenance'
  | 'service-history'
  | 'backup-restore'
  | 'settings'
  | 'help-about';

export interface NavigationItem {
  readonly id: NavigationItemId;
  readonly label: string;
  readonly eyebrow: string;
  readonly description: string;
}

export const navigationItems: readonly NavigationItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    eyebrow: 'Workspace overview',
    description:
      'Printer summaries and maintenance status will appear here in a later approved phase.',
  },
  {
    id: 'maintenance',
    label: 'Maintenance',
    eyebrow: 'Maintenance workspace',
    description:
      'Maintenance schedules, checklists, and service completion tools are not enabled in this foundation build.',
  },
  {
    id: 'service-history',
    label: 'Service History',
    eyebrow: 'Permanent records',
    description:
      'Completed service records will be available here after the approved data and workflow phases.',
  },
  {
    id: 'backup-restore',
    label: 'Backup & Restore',
    eyebrow: 'Local data portability',
    description:
      'Manual backup and validated restore are planned for a later approved phase and are not active yet.',
  },
  {
    id: 'settings',
    label: 'Settings',
    eyebrow: 'Application preferences',
    description:
      'Display and backup preferences will be introduced with their approved settings workflow.',
  },
  {
    id: 'help-about',
    label: 'Help / About',
    eyebrow: 'Guidance and details',
    description:
      'Instructions, maintenance references, and full application details will be added in a later approved phase.',
  },
] as const;
