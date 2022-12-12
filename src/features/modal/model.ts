import { createSlice, PayloadAction } from '@reduxjs/toolkit';
const data = [
    {
        id: 1,
        title: 'WEbSite “ladys sicrets”',
        description:
            'Website for a beauty salon. The difficulty in creating this project was that this is a salon for girls who observe Muslim traditions. Therefore, I could not show too explicit photos, even a bare neck or arms were prohibited.',
        completedWorks: [
            'Product and end user research',
            'Site prototype built in Figma',
            'Compliance with the corporate style of the company',
            'Search for references',
            'A B testing to increase website conversion',
            'Adaptation of design for all devices, in order to simplify the work of front-end developers'
        ]
    },
    {
        id: 2,
        title: '3 websites for residential complexes',
        description:
            'At the request of the customer, a design was developed for 3 sites. They have a common prototype, as these are residential complexes of the same construction company. For each site, I used the corporate colors of the companies.',
        completedWorks: [
            'Prototyping',
            'Photo session of each residential complex was made by me',
            'UX testing to improve conversions',
            'End user study'
        ]
    },
    {
        id: 3,
        title: 'WEbSite “Professional repair center”',
        description:
            'Website for a company providing services for the repair of apartments and houses.',
        completedWorks: [
            'Conducted UX research',
            'Compiled interface - constructor of available materials',
            'Compliance with the corporate style of the company',
            'AB tested',
            'Adapted across all devices'
        ]
    },
    {
        id: 4,
        title: 'WEbSite “nomadev”',
        description: 'Website for a software development company.',
        completedWorks: [
            'Product and end user research',
            'Site prototype built in Figma',
            'Compliance with the corporate style of the company',
            'Search for references',
            'AB testing to increase website conversion',
            'Adaptation of design for all devices, in order to simplify the work of front-end developers'
        ]
    },
    {
        id: 5,
        title: 'WEbSite “Solar Tech”',
        description:
            'Website for a company providing services for the installation of solar panels.',
        completedWorks: [
            'Product and end user research',
            'Site prototype built in Figma',
            'Compliance with the corporate style of the company',
            'Search for references',
            'AB testing to increase website conversion',
            'Adaptation of design for all devices, in order to simplify the work of front-end developers',
            '3D model visualizing the system operation'
        ]
    },
    {
        id: 6,
        title: 'WEbSite “star fprecast”',
        description:
            'Website to order, for a startup providing horoscopes and statistics on them. It was done freelance.',
        completedWorks: [
            'Product and end user research',
            'Site prototype built in Figma',
            'Compliance with the corporate style of the company',
            'Search for references',
            'Adaptation of design for all devices, in order to simplify the work of front-end developers'
        ]
    },
    {
        id: 7,
        title: 'dashboard “taustan”',
        description: 'Dashboard for the company helping to monitor the media.',
        completedWorks: [
            'Product and end user research',
            'Site prototype built in Figma',
            'Compliance with the corporate style of the company',
            'Search for references',
            'Adaptation of design for all devices, in order to simplify the work of front-end developers'
        ]
    },
    {
        id: 8,
        title: 'WEbSite “muratov partners”',
        description:
            'Website for a law firm, with the ability to download elementary contract forms and detailed assistance on some articles of the law.',
        completedWorks: [
            'Product and end user research',
            'Site prototype built in Figma',
            'Compliance with the corporate style of the company',
            'Search for references',
            'A B testing to increase website conversion',
            'Adaptation of design for all devices, in order to simplify the work of front-end developers'
        ]
    },
    {
        id: 9,
        title: 'WEbSite “KAZDEVOPS”',
        description:
            'Business card website for a company providing development services for various products, from mobile applications and games to websites and CRM systems. I was an employee of this company!',
        completedWorks: [
            'Product and end user research',
            'Site prototype built in Figma',
            'Compliance with the corporate style of the company',
            'Search for references',
            'A B testing to increase website conversion',
            'Adaptation of design for all devices, in order to simplify the work of front-end developers'
        ]
    },
    {
        id: 10,
        title: 'WEbSite “Blackberry Hills”',
        description:
            'A large project, a site for a residential complex, the premium segment "Blackberry Hills". We developed our own style with interesting animation and unusual usability.  It took almost half a year to develop.',
        completedWorks: [
            'Product and end user research',
            'Site prototype built in Figma',
            'Compliance with the corporate style of the company',
            'Search for references',
            'A B testing to increase website conversion',
            'Adaptation of design for all devices, in order to simplify the work of front-end developers'
        ]
    },
    {
        id: 11,
        title: 'WEbSite “PMG invest”',
        description:
            'Website for an investment company. Offering investment services for small businesses and start-ups.',
        completedWorks: [
            'Product and end user research',
            'Site prototype built in Figma',
            'Compliance with the corporate style of the company',
            'Search for references',
            'A B testing to increase website conversion',
            'Adaptation of design for all devices, in order to simplify the work of front-end developers'
        ]
    },
    {
        id: 12,
        title: 'WEbSite “KUB”',
        description:
            'The site of a management company, in the holdings of which there were more than 10 companies.',
        completedWorks: [
            'Product and end user research',
            'Site prototype built in Figma',
            'Compliance with the corporate style of the company',
            'Search for references',
            'A B testing to increase website conversion',
            'Adaptation of design for all devices, in order to simplify the work of front-end developers'
        ]
    },
    {
        id: 13,
        title: '“Nt wallet”',
        description:
            'More than a year of cooperation with one of the most famous companies in the United Arab Emirates providing online banking services. Within the framework of cooperation, many different projects were made, this is only a small part.',
        completedWorks: [
            'Product and end user research',
            'Site prototype built in Figma',
            'Compliance with the corporate style of the company',
            'Search for references',
            'A B testing to increase website conversion',
            'Adaptation of design for all devices, in order to simplify the work of front-end developers',
            'UI kit',
            'Concept'
        ]
    },
    {
        id: 14,
        title: 'App “au travel”',
        description:
            'Just an idea, after analyzing the Australian market, I did not find analogues of this application, and decided to create an application design taking into account the requirements of the end user. If you want to purchase this project or offer cooperation, please write to me, I am ready to cooperate with Australian companies. Direction - travel.',
        completedWorks: [
            'Product and end user research',
            'Site prototype built in Figma',
            'Search for references',
            'A B testing to increase website conversion',
            'Adaptation of design for all devices, in order to simplify the work of front-end developers'
        ]
    },
    {
        id: 15,
        title: 'WEbSite “prof legal community”',
        description: 'Website for a company providing legal advice.',
        completedWorks: [
            'Product and end user research',
            'Site prototype built in Figma',
            'Compliance with the corporate style of the company',
            'Search for references',
            'A B testing to increase website conversion',
            'Adaptation of design for all devices, in order to simplify the work of front-end developers'
        ]
    },
    {
        id: 16,
        title: 'WEbSite “open-shymkent”',
        description:
            'Portal for city administration. Created to serve and inform the public.',
        completedWorks: [
            'Product and end user research',
            'Site prototype built in Figma',
            'Compliance with the corporate style of the company',
            'Search for references',
            'A B testing to increase website conversion',
            'Adaptation of design for all devices, in order to simplify the work of front-end developers'
        ]
    },
    {
        id: 17,
        title: 'web app “niflheim”',
        description:
            'Mobile application for a small company providing hookah delivery services.',
        completedWorks: [
            'Product and end user research',
            'Site prototype built in Figma',
            'Compliance with the corporate style of the company',
            'Search for references',
            'A B testing to increase website conversion',
            'Adaptation of design for all devices, in order to simplify the work of front-end developers'
        ]
    },
    {
        id: 18,
        title: 'web app “gnipo”',
        description:
            'Application created for a startup. Waste collection and recycling startup.',
        completedWorks: [
            'Product and end user research',
            'Site prototype built in Figma',
            'Compliance with the corporate style of the company',
            'Search for references',
            'A B testing to increase website conversion',
            'Adaptation of design for all devices, in order to simplify the work of front-end developers'
        ]
    },
    {
        id: 19,
        title: 'crm system “tarlan payments”',
        description:
            'Large CRM system for one of the famous payment gateways in Kazakhstan. More than 7 different cabinets (logins) filled with tools to simplify their work.',
        completedWorks: [
            'Product and end user research',
            'Site prototype built in Figma',
            'Compliance with the corporate style of the company',
            'Search for references',
            'A B testing to increase website conversion',
            'Adaptation of design for all devices, in order to simplify the work of front-end developers',
            'Understanding the responsibilities of each position in the company'
        ]
    },
    {
        id: 20,
        title: 'crm system “ladys sicrets”',
        description:
            'The design of a CRM system for a large industrial enterprise has been developed, which allows you to track all the premises and sensors on each employee in order to prevent an emergency in time due to the dangerous mining industry.',
        completedWorks: [
            'Product and end user research',
            'Site prototype built in Figma',
            'Compliance with the corporate style of the company',
            'Search for references',
            'A B testing to increase website conversion',
            'Adaptation of design for all devices, in order to simplify the work of front-end developers'
        ]
    },
    {
        id: 21,
        title: 'WEbSite “old Doge”',
        description:
            'Website for a company engaged in the creation of NFT tokens, cryptocurrency and investing in startups.',
        completedWorks: [
            'Product and end user research',
            'Site prototype built in Figma',
            'Compliance with the corporate style of the company',
            'Search for references',
            'A B testing to increase website conversion',
            'Adaptation of design for all devices, in order to simplify the work of front-end developers'
        ]
    },
    {
        id: 22,
        title: 'WEb app “tCrypt”',
        description: 'Design of the Kazakhstani cryptocurrency exchange.',
        completedWorks: [
            'Product and end user research',
            'Site prototype built in Figma',
            'Compliance with the corporate style of the company',
            'Search for references',
            'A B testing to increase website conversion',
            'Adaptation of design for all devices, in order to simplify the work of front-end developers'
        ]
    },
    {
        id: 23,
        title: 'WEbSite “Tarlan Payments”',
        description: 'Landing page for a large Kazakhstani payment gateway.',
        completedWorks: [
            'Product and end user research',
            'Site prototype built in Figma',
            'Compliance with the corporate style of the company',
            'Search for references',
            'A B testing to increase website conversion',
            'Adaptation of design for all devices, in order to simplify the work of front-end developers'
        ]
    },
    {
        id: 24,
        title: 'WEbSite “alem research”',
        description:
            'Design for a company engaged in analysis and promotion in the media and social networks.',
        completedWorks: [
            'Product and end user research',
            'Site prototype built in Figma',
            'Compliance with the corporate style of the company',
            'Search for references',
            'A B testing to increase website conversion',
            'Adaptation of design for all devices, in order to simplify the work of front-end developers'
        ]
    },
    {
        id: 25,
        title: 'WEbSite “adams group”',
        description:
            'Website design for a company providing technical and economic expertise of investment projects.',
        completedWorks: [
            'Product and end user research',
            'Site prototype built in Figma',
            'Compliance with the corporate style of the company',
            'Search for references',
            'A B testing to increase website conversion',
            'Adaptation of design for all devices, in order to simplify the work of front-end developers'
        ]
    },
    {
        id: 26,
        title: 'Marketplace “pic verse”',
        description:
            'Marketplace and landing page for a company engaged in the creation and promotion of NFT tokens. We took the top 13 Opensea on the first day of the opening of sales.',
        completedWorks: [
            'Product and end user research',
            'Site prototype built in Figma',
            'Compliance with the corporate style of the company',
            'Search for references',
            'A B testing to increase website conversion',
            'Adaptation of design for all devices, in order to simplify the work of front-end developers'
        ]
    },
    {
        id: 27,
        title: 'mobile game “random rush”',
        description:
            'More than half a year I worked in the company creating the game Random Rush, many interface elements were created and the game logic was thought out.',
        completedWorks: [
            'Product and end user research',
            'Site prototype built in Figma',
            'Compliance with the corporate style of the company',
            'Search for references',
            'A B testing to increase website conversion',
            'Adaptation of design for all devices, in order to simplify the work of front-end developers'
        ]
    },
    {
        id: 28,
        title: 'Payment form “tarlan Payments”',
        description:
            'MMore than 4 different payment forms developed for a major payment gateway in Kazakhstan.',
        completedWorks: [
            'Product and end user research',
            'Site prototype built in Figma',
            'Compliance with the corporate style of the company',
            'Search for references',
            'A B testing to increase website conversion',
            'Adaptation of design for all devices, in order to simplify the work of front-end developers',
            'UI kit'
        ]
    },
    {
        id: 29,
        title: 'app “top security”',
        description:
            'Design of an application that provides protection for a specific person anywhere in the city. Designed for famous personalities or big businessmen.',
        completedWorks: [
            'Product and end user research',
            'Site prototype built in Figma',
            'Compliance with the corporate style of the company',
            'Search for references',
            'A B testing to increase website conversion',
            'Adaptation of design for all devices, in order to simplify the work of front-end developers'
        ]
    },
    {
        id: 30,
        title: 'app “reach”',
        description:
            'The idea, the design of an application that allows you to set goals for yourself and fulfill them, publicly with the ability to share goals with friends and assign challenges to them. If you are interested in this application, want to buy or implement this project, please contact me.',
        completedWorks: [
            'Product and end user research',
            'Site prototype built in Figma',
            'Compliance with the corporate style of the company',
            'Search for references',
            'Adaptation of design for all devices, in order to simplify the work of front-end developers'
        ]
    },
    {
        id: 31,
        title: 'app “Australia Surfing”',
        description:
            'An idea, an application design that allows you to find the right spot for surfing on the waves, find out the speed of the wind and waves, as well as find out important news about the presence of jellyfish or sharks. focused on Australia. If you are interested in this application, want to buy or implement this project, please contact me.',
        completedWorks: [
            'Product and end user research',
            'Site prototype built in Figma',
            'Compliance with the corporate style of the company',
            'Search for references',
            'Adaptation of design for all devices, in order to simplify the work of front-end developers'
        ]
    },
    {
        id: 32,
        title: 'mobile game “ladys sicrets”',
        description:
            'A mobile game for children that develops math skills and attention.',
        completedWorks: [
            'Product and end user research',
            'Site prototype built in Figma',
            'Compliance with the corporate style of the company',
            'Search for references',
            'A B testing to increase website conversion',
            'Adaptation of design for all devices, in order to simplify the work of front-end developers'
        ]
    },
    {
        id: 33,
        title: 'WEbSite “ladys sicrets”',
        description:
            'Part of additional functionality developed for a company selling air tickets. As part of the test task.',
        completedWorks: [
            'Product and end user research',
            'Site prototype built in Figma',
            'Compliance with the corporate style of the company',
            'Search for references',
            'Adaptation of design for all devices, in order to simplify the work of front-end developers'
        ]
    }
];

interface InitialState {
    data: Array<{
        id: number;
        title: string;
        description: string;
        completedWorks: string[];
    }>;
    currentSlide: number;
}

const initialState: InitialState = {
    data,
    currentSlide: -1
};

export const { reducer: modalReducer, actions: modalActions } = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setCurrentSlide(state, { payload }: PayloadAction<number>) {
            state.currentSlide = payload;
        }
    }
});
