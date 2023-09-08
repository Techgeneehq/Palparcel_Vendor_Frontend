import Icon from '@/components/global/Icons';
import { ReactElement } from 'react';

export type navLinksType = {
  title: string;
  href?: string;
  icon: ReactElement;
  color?: string;
};

export const navLinks = (): navLinksType[] => [
  {
    title: 'Dashboard',
    icon: <Icon.DashboardIcon />,
    href: '/dashboard',
    color: 'text-[#FE9900]',
  },
  {
    title: 'Product',
    icon: <Icon.ProductIcon />,
    href: '/product',
    color: 'text-[#FE9900]',
  },
  {
    title: 'Overview',
    icon: <Icon.OverviewIcon />,
    href: '/overview',
    color: 'text-[#FE9900]',
  },
  {
    title: 'Order',
    icon: <Icon.OrderIcon />,
    href: '/order',
    color: 'text-[#FE9900]',
  },
  {
    title: 'Wallet',
    icon: <Icon.WalletIcon />,
    href: '/wallet',
    color: 'text-[#FE9900]',
  },
  {
    title: 'Notification',
    icon: <Icon.NotificationIcon />,
    href: '/notification',
    color: 'text-[#FE9900]',
  },
  {
    title: 'Comment',
    icon: <Icon.CommentIcon />,
    href: '/comment',
    color: 'text-[#FE9900]',
  },
  {
    title: 'Settings',
    icon: <Icon.SettingsIcon />,
    href: '/settings',
    color: 'text-[#FE9900]',
  },
];
