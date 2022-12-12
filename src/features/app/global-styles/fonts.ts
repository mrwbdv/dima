import { createGlobalStyle } from 'styled-components';

import spaceGroteskRegularWoff2 from '@assets/fonts/Space-Grotesk/SpaceGrotesk-Regular.woff2';
import spaceGroteskRegularWoff from '@assets/fonts/Space-Grotesk/SpaceGrotesk-Regular.woff';
import spaceGroteskRegularTtf from '@assets/fonts/Space-Grotesk/SpaceGrotesk-Regular.ttf';

import spaceGroteskMediumWoff2 from '@assets/fonts/Space-Grotesk/SpaceGrotesk-Medium.woff2';
import spaceGroteskMediumWoff from '@assets/fonts/Space-Grotesk/SpaceGrotesk-Medium.woff';
import spaceGroteskMediumTtf from '@assets/fonts/Space-Grotesk/SpaceGrotesk-Medium.ttf';

import spaceGroteskBoldWoff2 from '@assets/fonts/Space-Grotesk/SpaceGrotesk-Bold.woff2';
import spaceGroteskBoldWoff from '@assets/fonts/Space-Grotesk/SpaceGrotesk-Bold.woff';
import spaceGroteskBoldTtf from '@assets/fonts/Space-Grotesk/SpaceGrotesk-Bold.ttf';

export const Fonts = createGlobalStyle`
    @font-face {
        font-family: 'Space Grotesk';
        font-weight: 400;
        src: local('Gilroy Regular'), local('Gilroy-Regular'),
            url(${spaceGroteskRegularWoff2}) format('woff2'), /* Super Modern Browsers */
            url(${spaceGroteskRegularWoff}) format('woff'), /* Modern Browsers */
            url(${spaceGroteskRegularTtf}) format('truetype'); /* Safari, Android, iOS */
    }

    @font-face {
        font-family: 'Space Grotesk';
        font-weight: 500;
        src: local('Gilroy Medium'), local('Gilroy-Medium'),
            url(${spaceGroteskMediumWoff2}) format('woff2'), /* Super Modern Browsers */
            url(${spaceGroteskMediumWoff}) format('woff'), /* Modern Browsers */
            url(${spaceGroteskMediumTtf}) format('truetype'); /* Safari, Android, iOS */
    }

    @font-face {
        font-family: 'Space Grotesk';
        font-weight: 700;
        src: local('Gilroy Bold'), local('Gilroy-Bold'),
            url(${spaceGroteskBoldWoff2}) format('woff2'), /* Super Modern Browsers */
            url(${spaceGroteskBoldWoff}) format('woff'), /* Modern Browsers */
            url(${spaceGroteskBoldTtf}) format('truetype'); /* Safari, Android, iOS */
    }
`;
