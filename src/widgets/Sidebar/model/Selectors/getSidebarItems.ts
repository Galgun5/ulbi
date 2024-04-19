import { getAuthUserData } from 'entities_/User';
import { RouterPath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg';
import ArticleIcon from 'shared/assets/icons/article-20-20.svg';
import { createSelector } from '@reduxjs/toolkit';
import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(
    getAuthUserData,
    (userData) => {
        const sidebarItemsList: SidebarItemType[] = [
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

        ];

        if (userData) {
            sidebarItemsList.push(
                {
                    path: RouterPath.profile + userData.id,
                    Icon: ProfileIcon,
                    text: 'Profile',
                    authOnly: true,
                },
                {
                    path: RouterPath.articles,
                    Icon: ArticleIcon,
                    text: 'Articles',
                    authOnly: true,
                },
            );
        }
        return sidebarItemsList;
    },
);
