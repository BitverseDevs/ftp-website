
export const staticNavMsg = {
    msg1: 'Streamline your HR, elevate your business : with our HRIS platform',
};

export const upperNavData = [
    {
        key: 'und01',
        isButton: false,
        navItem: 'HOME',
        pathUrl: '/',
        hasList: false,
        listNav: [],
    },
    {
        key: 'und02',
        isButton: false,
        navItem: 'ABOUT',
        pathUrl: '/about',
        hasList: false,
        listNav: [],
    },
    {
        key: 'und03',
        isButton: false,
        navItem: 'PRODUCTS & SERVICES',
        pathUrl: '/products&services',
        hasList: true,
        listNav: [
            {
                listKey: '',
                listTitle: 'WAREHOUSE RECEIVING (WHSEAPP)',
                listPathUrl: '',
            },
            {
                listKey: '',
                listTitle: 'BARANGGAY MANAGEMENT SYSTEM (BMS)',
                listPathUrl: '',
            },
            {
                listKey: '',
                listTitle: 'KIOSK SOFTWARE (BIT-KIOSK)',
                listPathUrl: '',
            },
            {
                listKey: '',
                listTitle: 'CONTACT TRACING',
                listPathUrl: '',
            },
            {
                listKey: '',
                listTitle: 'PO TRACKING SYSTEM',
                listPathUrl: '',
            },
            {
                listKey: '',
                listTitle: 'CARGO IMPORTING (BIT-CARGO)',
                listPathUrl: '',
            }
        ], 
    },
    {
        key: 'und04',
        isButton: false,
        navItem: 'PORTFOLIO',
        pathUrl: '/portfolio',
        hasList: false,
        listNav: [],
    },
    {
        key: 'und05',
        isButton: false,
        navItem: 'ORGANIZATION',
        pathUrl: '/organization',
        hasList: false,
        listNav: [],
    },
    {
        key: 'und06',
        isButton: false,
        navItem: 'BOOK A DEMO',
        pathUrl: '/contact-us',
        hasList: false,
        listNav: [],
    },
];


export const heroData = {
    left_title: 'The Platform Where Affordability Meet HR Efficieny',
    left_desc: 'An HRIS that streamlines and simplifies every aspect of HR, from recruitment, applicant tracking and onboarding through core HR admin and compliance to holiday and absence management.',
    left_call: 'Get Started',
    right_call: 'Watch Demo',
    left_watch: 'Watch Demo'
};

export const sectionTitles = [
    {
        featMsg: 'Solutions For Your Business',
        title: 'Trusted by Real Clients',
        desc: 'Our technology solutions have covered a wide range of clients: real estate developers, food retail, marketing firms, school institutions, transportation, healthcare, construction companies, among others.'
    },
    {
        featMsg: 'FEATURED SPECIFICATIONS',
        title: 'Human Resource Information System',
        desc: 'All-in-one human resources information system. Recruitments, Appraisal, Expenses, Leaves, Attendances, etc.'
    },
    {
        featMsg: 'TAKE THE NEXT STEP',
        title: 'Why do I need an HRIS?',
        desc: [
            'Faster Data Extraction',
            'Reduce Duplication',
            'System Transparency',
            'Environmental Adaptation',
            'Accurate HR Data',
            'Effective Decision-Making',
            'Better Financial Management', 
            'Enhanced Data Security',
            'Increased Employee Engagement'
            // 'Faster data extraction and processing',
            // 'Reduce duplication of effort, resulting in reduced costs',
            // 'Provides transparency in the system',
            // 'Better ability to react to environmental changes',
            // 'The availability of accurate and up-to-date human resources data',
            // 'Better analysis leading to more effective decision-making',
            // 'More meaningful career planning and advice at all levels',
        ]
    },
    {
        featMsg: 'CHOOSE INNOVATION',
        title: 'Now. Why Bitverse HRIS?',
        desc: [
            {
                iconName: '/assets/efficiency.svg',
                title: 'Improved Efficiency in HR Activities',
                desc: "Bitverse's HRIS software has evolved to facilitate various HR activities, including time tracking, succession planning, and recruitment, leading to significant improvements in efficiency."
            },
            {
                iconName: '/assets/clock.svg',
                title: 'Time Savings',
                desc: 'This evolution in HRIS capabilities helps save working time by automating and streamlining these critical HR processes.'
            },
            {
                iconName: '/assets/echanced.svg',
                title: 'Enhanced Operational Benefits',
                desc: "By handling tasks such as time tracking, succession planning, and recruitment, Bitverse's HRIS software enhances overall operational benefits, making HR management more effective and streamlined."
            },
        ]
        // desc: 'Bitverse\'s HRIS software has evolved to facilitate many HR activities such as time tracking, succession planning, and recruitment. Among other things, this can improve efficiency and save working time.'
    }, 
    {
        featMsg: 'YES. WE HAVE OTHER SERVICES',
        title: 'OUR SERVICES',
        desc: '',
    }
];

export const responsiveBrands = {
    0: {
        items: 3,
    },
    575:{
        items: 3,
    },
    767:{
        items: 4,
    },
    991:{
        items: 5,
    },
    1200:{
        items: 6,
    }
};

export const responsivePortfolio = {
    0: {
        items: 1,
    },
    575:{
        items: 1,
    },
    767:{
        items: 3,
    },
    991:{
        items: 3,
    },
    1200:{
        items: 3,
    },
    1500: {
        items: 3,
    }
};

export const brandArea = [
    {
        id: 1001,
        src: '/assets/comp-01-contiss.png'
    },
    {
        id: 1002,
        src: '/assets/comp-02-htlandd.png'
    },
    {
        id: 1003,
        src: '/assets/comp-03-dcc.png'
    },
    {
        id: 1004,
        src: '/assets/comp-04-htt.png'
    },
    {
        id: 1005,
        src: '/assets/comp-05-appp.png'
    },
    {
        id: 1006,
        src: '/assets/comp-06-cavv.png'
    },
    {
        id: 1007,
        src: '/assets/comp-07-mandaa.png'
    },
    {
        id: 1008,
        src: '/assets/comp-08-ddtt.png'
    },
    {
        id: 1009,
        src: '/assets/comp-09-dtt.png'
    },
    {
        id: 1010,
        src: '/assets/comp-10-svv.png'
    }
];

export const featuredSpecAssets = [
    {
        id: 'fsa01',
        assetSrc: '/assets/img1.jpg',
        // assetSrc: '/assets/xchart-03.png',
        alt: 'Featured-Specification-Image-01'
    },
    {
        id: 'fsa02',
        // assetSrc: '/assets/xchart-04.png',
        assetSrc: '/assets/img2.jpg',
        alt: 'Featured-Specification-Image-02'
    }
];

export const productCarouselHome = [
    {
        id: 'pch01',
        sectionTitle: {
            featMsg: 'Employee Record Management, History, Appraisal, 201 Files',
            title: 'HR',
            desc: 'Maintain a centralized and complete employee records database for easy-viewing, employee verification and systematic documentation.',
        },
        srcTitle: 'LEARN MORE',
        srcLink: '#',
        img: '/assets/prod-car01.png',
        imgAlt: 'product-illustration-#1',
    },
    {
        id: 'pch02',
        sectionTitle: {
            featMsg: 'Recruitment, Application, Schedule Interviews, Onboarding, Blacklisting',
            title: 'Recruitment',
            desc: 'Talent acquisition and recruitment management, request for additional manpower, post and track job postings and applications and schedule interviews and examinations.',
        },
        srcTitle: 'LEARN MORE',
        srcLink: '#',
        img: '/assets/prod-car02.png',
        imgAlt: 'product-illustration-#2',
    },
    {
        id: 'pch03',
        sectionTitle: {
            featMsg: 'Manage Holidays, Training, Assets, Travel, and Roles. Scheduling of Conference Rooms',
            title: 'Admin & Employee Portal',
            desc: 'Own dashboard and access across all employees. Manage training, assets, conference room scheduling, travel itinerary, cash advance, and roles.',
        },
        srcTitle: 'LEARN MORE',
        srcLink: '#',
        img: '/assets/prod-car03.png',
        imgAlt: 'product-illustration-#3',
    },
    {
        id: 'pch04',
        sectionTitle: {
            featMsg: 'GENERATE PAYROLL , PAYROLL SUMMARY,  AND PAYROLL MANAGEMENT',
            title: 'Payroll',
            desc: 'Our HRIS system offers a comprehensive payroll solution for businesses of all sizes. Our system simplifies the payroll process, automating tasks such as calculating employee salaries and taxes, and generating reports ',
        },
        srcTitle: 'LEARN MORE',
        srcLink: '#',
        img: '/assets/prod-car04.png',
        imgAlt: 'product-illustration-#4',
    },
    {
        id: 'pch05',
        sectionTitle: {
            featMsg: 'Time-in/out easily. Biometrics, Management of Leaves, Overtime, Night differential, and Shifts',
            title: 'Timekeeping',
            desc: 'Everything you need to easily track and manage your employees time and attendance using automated, efficient and customizable management tools that can be integrated to your biometric system.',
        },
        srcTitle: 'LEARN MORE',
        srcLink: '#',
        img: '/assets/prod-car05.png',
        imgAlt: 'product-illustration-#5',
    },
    {
        id: 'pch06',
        sectionTitle: {
            featMsg: 'Request Assets, Conference Rooms, Vehicles, Hotel, Daily Itinerary, Travel',
            title: 'Requests',
            desc: 'Manage an array of requests.',
        },
        srcTitle: 'LEARN MORE',
        srcLink: '#',
        img: '/assets/prod-car06.png',
        imgAlt: 'product-illustration-#6',
    },
    {
        id: 'pch07',
        sectionTitle: {
            featMsg: 'New Hire, Absenteeism, Contractual & Probationary, Lates, Leaves, Resignees',
            title: 'Reports',
            desc: 'Conveniently monitor your company\'s HR metrics: General Workforce, Attrition, Daily Attendance, Absenteeism, Planned Leaves, Overtime, Adjustments, and Payroll Expense',
        },
        srcTitle: 'LEARN MORE',
        srcLink: '#',
        img: '/assets/prod-car07.png',
        imgAlt: 'product-illustration-#7',
    },
];

export const serviceOfferingsHome = [
    {
        id: 'soh01',
        sectionTitle: {
            featMsg: 'Services We Offer',
            title: 'Business & Productivity Ready Software',
            desc: 'We offer multiple products that are fully customizable.',
        },
        srcTitle: 'LEARN MORE',
        srcLink: '#',
        img: '/assets/xchart-01.png',
        imgAlt: 'services-illustration-#1',
    },
    {
        id: 'soh02',
        sectionTitle: {
            featMsg: 'Services We Offer',
            title: 'Custom Software Development',
            desc: 'Want to have a specific web application based on your business flow? We can build it from scratch',
        },
        srcTitle: 'LEARN MORE',
        srcLink: '#',
        img: '/assets/xchart-01.png',
        imgAlt: 'services-illustration-#2',
    },
    {
        id: 'soh03',
        sectionTitle: {
            featMsg: 'Services We Offer',
            title: 'CMS Website Design',
            desc: 'Website designing, development and maintenance for SMEs, service-oriented business, product-based business and other complex businesses',
        },
        srcTitle: 'LEARN MORE',
        srcLink: '#',
        img: '/assets/xchart-01.png',
        imgAlt: 'services-illustration-#3',
    },
];

export const serviceOfferingsHomeBg = {
        id: 'soh04',
        bg: '/assets/bv-services-bg.png'
};

export const productSpecificationTitle = {
        featMsg: 'FLEXIBLE SOFTWARE THAT CAN FIT TO YOUR BUSINESS NEEDS',
        title: 'Our Products',
        desc: 'Bitverse offers a range of management systems and services, including HRIS, Barangay Management System (BMS), Kiosk Software, contact tracing, and other management systems. Our team of experts works closely with clients to ensure that they get the most out of their systems, providing ongoing support and guidance as needed.'
};

export const productSpecificationList = [
    {
        id: 'psl01',
        productName: 'Warehouse Receiving (WHSEAPP)',
        productDesc: 'Warehouse Receiving APP simplifies the process of receiving and tracking inventory',
        srcLink: '#',
        iconName: '/assets/warehouse.svg'
    },
    {
        id: 'psl02',
        productName: 'Baranggay Management System (BMS)',
        productDesc: 'Barangay Management System (BMS) helps local government units manage their day-to-day operations more efficiently.',
        srcLink: '#',
        iconName: '/assets/baranggay.svg'
    },
    {
        id: 'psl03',
        productName: 'Kiosk Software (BIT-Kiosk)',
        productDesc: 'Provides small stalls an online point-of-sale with order, product, inventory managing.',
        srcLink: '#',
        iconName: '/assets/kiosk.svg'
    },
    {
        id: 'psl04',
        productName: 'Contact Tracing',
        productDesc: 'A digital contact-tracing that logs and identify individuals who may have been in contact with an infected individual (COVID-19).',
        srcLink: '#',
        iconName: '/assets/tracing.svg'
    },
    {
        id: 'psl05',
        productName: 'PO Tracking System',
        productDesc: 'PO Tracking System helps businesses manage and tracks their purchase orders.',
        srcLink: '#',
        iconName: '/assets/tracking.svg'
    },
    {
        id: 'psl06',
        productName: 'Cargo Importing (BIT-Cargo)',
        productDesc: 'BIT Cargo system provides a reliable and efficient system for online logistics ordering and tracking system.',
        srcLink: '#',
        iconName: '/assets/cargo.svg'
    },
];

export const websitePortfolioTitle = {
    title: 'Our Website Portfolio',
    desc: 'Our products have helped businesses and local government units streamline their processes and improve overall efficiency.'
};

export const websitePortfolioList = [
    {
        id: 'wpl01',
        src: '/assets/carou-bot01.png',
        alt: 'DDT Konstract, Inc.',
        srcLink: 'https://ddtkonstract.com/',
    },
    {
        id: 'wpl02',
        src: '/assets/carou-bot02.png',
        alt: 'Conti\'s Bakeshop & Resto',
        srcLink: 'https://contis.ph/',
    },
    {
        id: 'wpl03',
        src: '/assets/carou-bot03.png',
        alt: 'S&R Membership Shopping',
        srcLink: 'https://www.snrshopping.com/',
    },
    {
        id: 'wpl04',
        src: '/assets/carou-bot04.png',
        alt: 'Unihealth-Southwoods Hospital & Medical Center',
        srcLink: 'https://unihealthsouthwoodshospital.com/',
    },
    {
        id: 'wpl05',
        src: '/assets/carou-bot05.png',
        alt: 'Global Care Medical Center of Bay',
        srcLink: 'https://bay.globalcarehospitals.com/',
    },
];

export const callToActionTitle = {
    preMsg: 'Want a software specifically for your business needs?',
    proMsg: 'We can make it for you!',
    actionMsg: 'CONTACT US',
    bgLink: '/bv-footer-banner.png',
}

export const contactUsCTA = {
    title: 'Ready to simplify your HR Process?',
    featMsg: "Let's start from here.",
    // choose which button is which and remove the other
    buttonOne: 'Book a Demo',
    buttonTwo: "Let's start from here"
}

// :)
export const faqHeaderDetails = {
    title: 'Everything You Need To Know About Bitverse HRIS',
    featMsg: 'Frequently Asked Question'
};

export const faqList = [
    {
        id: 'faq01',
        items: [
            {
                id: 'faq0101',
                question: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed. sit amet consectetur adipiscing elit sed.',
                answer: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed.',
                icon: '/assets/arrowDown.svg',
            }, 
            {
                id: 'faq0102',
                question: 'Question 2',
                answer: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed',
                icon: '/assets/arrowDown.svg',
            }, 
        ]
    },
    {
        id: 'faq02',
        items: [
            {
        
                id: 'faq3',
                question: 'Question 3',
                answer: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed',
                icon: '/assets/arrowDown.svg',
            }, 
            {
                id: 'faq4',
                question: 'Question 4',
                answer: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed',
                icon: '/assets/arrowDown.svg',
            }, 
        ]
    }
]

export const footerList = [
    {
        title: '',
        items: [
            {
                name: 'facebook',
                iconName: '/assets/facebook-black.svg',
                desc: '',
                link: '',
            },
            {
                name: 'linkedin',
                iconName: '/assets/linkedin-black.svg',
                desc: '',
                link: '',
            },
            {
                name: 'insta',
                iconName: '/assets/insta-black.svg',
                desc: '',
                link: '',
            },
        ],
        desc: 'Copyright ©2024 All rights reserved',
    },
    {
        title: '',
        items: [
            {
              name: 'location',
              iconName: '/assets/location.svg',
              desc: 'Unit 1603, Pearlbank Centre, Salcedo Village, 146 Valero, Makati, 1200 Metro Manila' 
            },
            {
                name: 'phone',
                iconName: '/assets/telephone.svg',
                desc: '09171187206' 
            },
            {
                name: 'email',
                iconName: '/assets/email.svg',
                desc: 'salesbitverse@gmail.com', 
            },
        ],
        desc: '',
    },
];

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    staticNavMsg,
    upperNavData,
    heroData,
    sectionTitles,
    responsiveBrands,
    brandArea,
    featuredSpecAssets,
    productCarouselHome,
    serviceOfferingsHome,
    serviceOfferingsHomeBg,
    productSpecificationTitle,
    productSpecificationList,
    websitePortfolioTitle,
    websitePortfolioList,
    callToActionTitle,
    footerList,
};