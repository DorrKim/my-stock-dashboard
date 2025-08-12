export type NavItem = {
    label: string;
    href: string;
    icon: React.ComponentType<{ size?: number }>;
    badge?: string;
}