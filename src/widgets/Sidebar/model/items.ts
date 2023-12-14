import { VFC, SVGProps } from 'react';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg';
import { RouterPath } from 'shared/config/routeConfig/routeConfig';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: VFC<SVGProps<SVGSVGElement>>;
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RouterPath.main,
        Icon: MainIcon,
        text: 'Main',
    },
    {
        path: RouterPath.about,
        Icon: AboutIcon,
        text: 'About',
    },
    {
        path: RouterPath.profile,
        Icon: ProfileIcon,
        text: 'Profile',
    },
];
