import React from 'react';
import { IsDesktop, IsMobile } from '@sanch941/lib';
import { DesktopWelcome } from './desktop';
import { MobileWelcome } from './mobile';

export const WelcomeTemplate = () => {
    return (
        <>
            <IsMobile>
                <MobileWelcome />
            </IsMobile>
            <IsDesktop>
                <DesktopWelcome />
            </IsDesktop>
        </>
    );
};
