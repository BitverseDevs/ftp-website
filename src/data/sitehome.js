
export const staticNavMsg = {
    msg1: 'Streamline your HR, elevate your business : with our HRIS platform',
};

export const upperNavData = [
    {
        key: 'und01',
        isButton: false,
        navItem: 'Home',
        pathUrl: '/',
        hasList: false,
        listNav: [],
    },
    {
        key: 'und02',
        isButton: false,
        navItem: 'About',
        pathUrl: '/about',
        hasList: false,
        listNav: [],
    },
    {
        key: 'und03',
        isButton: false,
        navItem: 'Services',
        pathUrl: '/services',
        hasList: true,
    },
    // {
    //     key: 'und04',
    //     isButton: false,
    //     navItem: 'Portfolio',
    //     pathUrl: '/portfolio',
    //     hasList: false,
    //     listNav: [],
    // },
    {
        key: 'und05',
        isButton: false,
        navItem: 'Partners',
        pathUrl: '/partners',
        hasList: false,
        listNav: [],
    },
    {
        key: 'und06',
        isButton: false,
        navItem: 'Contact',
        pathUrl: '/real-contact-us',
        hasList: false,
        listNav: [],
    },
    // {
    //     key: 'und06',
    //     isButton: false,
    //     navItem: 'Organization',
    //     pathUrl: '/organization',
    //     hasList: false,
    //     listNav: [],
    // },
    {
        key: 'und07',
        isButton: false,
        navItem: 'Book a demo',
        pathUrl: '/contact-us',
        hasList: false,
        listNav: [],
    },
];


export const heroData = {
    left_title: 'The Platform Where Affordability Meet Efficieny',
    left_desc: 'Stop settling for outdated processes. With Bitverse, you gain access to cutting-edge solutions that streamline your workflow, boost efficiency, and drive innovation. Upgrade today and experience the future of business success.',
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

export const mainCTAV2Info = {
    title: "Let's starting working together!",
    ctaContent: "Start here",
} 

export const clientCTAV2Info = {
    title: 'Ready to transition Digitally?',
    ctaContent: 'Do it with us',
}

export const highlightsItems = [
    {
        highlight_id: 'highlight-one',
        title: 'The best digital HR platform, trusted by many business',
        featMsg: 'BIT HR',
        cta: 'Explore',
        footerText: 'Streamline HR tasks, boost productivity, and manage employee data easily for sustainable growth',
        imagePath: '/assets/hrDetailsImgHome.svg',
        heroImage: '/assets/hrDetailsImg.svg',
        imageOne: '/assets/highlight-one-vector-two.svg',
        imageTwo: '/assets/highlight-one-vector-one.svg',
        imageThree: '/assets/highlight-one-vector-five.svg',
        imageFour: '/assets/highlight-one-vector-four.svg',
        imageFive: '/assets/highlight-one-vector-three.svg',
        moreInfo: [
            {
                id: 'more-info-one',
                title: 'Centralize your employee data effortlessly',
                featMsg: [
                    'BIT-HR reduces paperwork, minimizes errors, and provides real-time access to HR data, streamlining processes and ensuring accurate employee records',
                ]
            },
            {
                id: 'more-info-two',
                title: 'Seamless Access for Every Employee',
                featMsg: [
                    "BIT-HR organizes employees by roles, enables easy communication through personalized accounts, and streamlines form filing for efficient HR management.",
                ]
            },
            {
                id: 'more-info-three',
                title: 'Bridge the gap and connect with your employees',
                featMsg: [
                    'Instant notifications for pending approvals keep management informed, ensuring smooth communication and timely document handling.',
                ]
            }
        ],

        // Content for ContactUsV2
        contactV2Info: {
            title: 'Ready To Simplify HR Processes?',
            ctaContent: "Let's start from here",
        }
    }, 
    {
        highlight_id: 'highlight-two',
        title: 'Payroll solution that brings you advantages',
        featMsg: 'Payroll',
        cta: 'Explore',
        footerText: 'Our HRIS and payroll software streamlines processes from gross to net calculations and tax computations, ensuring adherence to strict regulatory standards for smooth business operations.',
        alt: 'Payroll sample vector',
        imagePath: '/assets/payrollDetailsImgHome.svg',
        heroImage: '/assets/payrollDetailsImg.png',
        vectorBg: '/assets/highlightDetailVectorBg.png',
        imageOne: '/assets/highlight-two-vector-one.png',
        imageTwo: '/assets/highlight-two-vector-two.png',
        imageThree: '/assets/highlight-two-vector-three.svg',
        imageFour: '/assets/highlight-two-vector-four.png',
        imageFive: '/assets/highlight-two-vector-five.png',
        imageSix: '/assets/highlight-two-vector-six.svg',
        moreInfo: [
            {
                id: 'more-info-one',
                title: 'Streamline Your Payroll Process with Ease',
                featMsg: [
                    'Experience the power of auto-fast payroll generation, designed to simplify the entire payroll process and preparation. It accurately computes work hours, lateness, undertime, and apply government deductions, ensuring complete accuracy every time. With just a single click, all your payroll calculations are done, saving you valuable time and effort.',
                ]
            }, 
            {
                id: 'more-info-two',
                title: 'Instant Access to Your Pay Slip, Anytime, Anywhere',
                featMsg: [
                   "We offer the convenience of digital pay slips that are accessible anytime, anywhere, and can be easily printed whenever needed. Our platform allows for full customization, enabling you to tailor the design to match your company's branding and pay slip format. Switch from paper systems to an efficient, eco-friendly solution that provides employees instant access to their pay details, with a professional, customized look."
                ]
            }
        ],
         // Content for ContactUsV2
        contactV2Info: {
            title: 'Process Payroll In Just A Click',
            ctaContent: 'Automate Payroll',
        }
    }
];

export const highlightHRDetail = [
    {
        id: 'HR_Detail_One',
        title: 'Categories Management',
        abbreviation: 'CM',
        footer: 'Manage Divions, Ranks etc.',
        iconName: '/assets/highlightHRDetail-one.svg',
    },
    {
        id: 'HR_Detail_Two',
        title: 'User Account Management',
        abbreviation: 'UAM',
        footer: 'Manage Divions, Ranks etc.',
        iconName: '/assets/highlightHRDetail-two.svg',
    },
    {
        id: 'HR_Detail_Three',
        title: 'Payroll Variables',
        abbreviation: 'PVM',
        footer: 'Manage Divions, Ranks etc.',
        iconName: '/assets/highlightHRDetail-three.svg',
    }
]

export const hrHighlightFAQTitle = [
    {
        featMsg: 'Frequently Asked Questions',
        title: 'Everything You Need To Know About Bitverse HRIS'
    },

    {
        featMsg: 'Frequently Asked Questions',
        title: 'Everything You Need To Know About Bitverse HRIS Payroll'
    },
]

export const hrHighlightQA = [
    [
        {
            id: 'faq01',
            items: [
                {
                    id: 'faq0101',
                    question: 'Is it a free demo?',
                    answer: 'Yes, Bitverse offers a free demo. We can do an online and on-site product demo. To get started, book a demo now.',
                    icon: '/assets/arrowDown.svg',
                }, 
                {
                    id: 'faq0102',
                    question: ' How is BIT-HR software different from other HR solutions?',
                    answer: "Bitverse integrates many HR-related duties to improve and expedite human resource management. We maximize the system's capacity for providing solutions while integrating system upgrades and customization. Our software is adaptable and simple to use for managing a range of HR functions",
                    icon: '/assets/arrowDown.svg',
                }, 
                {
                    id: 'faq0103',
                    question: 'How does Bitverse host their BIT-HR system?',
                    answer: "The BIT HR system may be used on-premise or in cloud, depending on your company’s preference.",
                    icon: '/assets/arrowDown.svg',
                }, 
            ]
        },
        {
            id: 'faq02',
            items: [
                {
            
                    id: 'faq0201',
                    question: 'Companies of what size can use BIT-HR software?',
                    answer: "Bitverse HR software is suitable for companies of all sizes, from small businesses to large enterprises. It is designed to adapt to your company's needs and can scale to accommodate any changes or growth.",
                    icon: '/assets/arrowDown.svg',
                }, 
                {
                    id: 'faq0202',
                    question: 'Who has access to the system?',
                    answer: "All employees and staff of a company have access to the system and can use it with their own account. Depending on their status or position, their level of access could differ. The lower a person's position, the fewer features they can utilize.",
                    icon: '/assets/arrowDown.svg',
                }, 
                {
                    id: 'faq0203',
                    question: 'How does the BIT HR implementation work?',
                    answer: "The implementation of the BIT-HR system involves several steps: requirement gathering, system selection, customization, data migration, and training. Customization ensures the system meets specific business needs, integrates smoothly, and improves HR operational efficiency.",
                    icon: '/assets/arrowDown.svg',
                }, 
                {
                    id: 'faq0204',
                    question: 'Does BIT-HR have a mobile app and is it mobile compatible? ',
                    answer: "BIT-HR does not have a dedicated mobile app, but the system is fully mobile-compatible and can be easily accessed through a web browser on mobile devices.",
                    icon: '/assets/arrowDown.svg',
                }, 
            ]
        }
    ], 
    [
        {
            id: 'faq01',
            items: [
                {
                    id: 'faq0101',
                    question: 'How does the BIT-HR payroll system work?',
                    answer: "BIT-HR automatically generates payroll computations, including calculations for lateness, undertime, company deductions, and monthly payroll variables. This automation simplifies the payroll process and ensures accuracy.",
                    icon: '/assets/arrowDown.svg',
                }, 
                {
                    id: 'faq0102',
                    question: 'How do I process payroll in BIT-HR?',
                    answer: "Processing payroll in BIT-HR is quick and easy with just three simple steps: Select the appropriate cutoff period, as coordinated with your company. Choose the employees to be included in the payroll. Apply any payroll deductions. Once these steps are completed, the system will automatically generate pay slips, which can be viewed or printed directly from within the system.",
                    icon: '/assets/arrowDown.svg',
                }, 
                {
                    id: 'faq0103',
                    question: 'Can employees access their own payroll information?',
                    answer: "Yes, BIT-HR includes a feature that allows each employee to view their own pay slip and payroll details securely.",
                    icon: '/assets/arrowDown.svg',
                }, 
            ]
        },
        {
            id: 'faq02',
            items: [
                {
            
                    id: 'faq0201',
                    question: 'Can I view the entire payroll history of an employee?',
                    answer: "Yes, BIT-HR makes it easy to track the entire payroll history of an employee. Simply search by the employee's name, and all relevant payroll information, including past pay slips, will be displayed.",
                    icon: '/assets/arrowDown.svg',
                }, 
                {
                    id: 'faq0202',
                    question: 'Can we customize the BIT-HR pay slip?',
                    answer: "Yes, the BIT-HR pay slip is fully customizable. You can modify the pay slip layout, add additional content, and tailor it to meet your company’s specific needs, ensuring the payroll process is both effective and convenient.",
                    icon: '/assets/arrowDown.svg',
                }, 
            ]
        }

    ]
]

export const serviceOfferingsHome = [
    {
        id: 'soh01',
        sectionTitle: {
            featMsg: 'Services We Offer',
            title: 'Human Resource Information System',
            desc: 'We offer a fully customizable HRIS tailored to meet the unique needs of your business.',
        },
        srcTitle: 'LEARN MORE',
        srcLink: '/hris-service',
        img: '/assets/xchart-01.png',
        imgAlt: 'services-illustration-#1',
    },
    {
        id: 'soh02',
        sectionTitle: {
            featMsg: 'Services We Offer',
            title: 'Software Development',
            desc: "Unlock your business's potential with our custom software development services.",
        },
        srcTitle: 'LEARN MORE',
        srcLink: '/software-dev-service',
        img: '/assets/xchart-01.png',
        imgAlt: 'services-illustration-#2',
    },
    {
        id: 'soh03',
        sectionTitle: {
            featMsg: 'Services We Offer',
            title: 'Website Development',
            desc: 'Enhance your online presence with responsive, user-friendly websites that drive results.',
        },
        srcTitle: 'LEARN MORE',
        srcLink: '/web-dev-service',
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
        src: '/assets/ddt.png',
        alt: 'DDT Konstract, Inc.',
        srcLink: 'https://ddtkonstract.com/',
    },
    {
        id: 'wpl02',
        src: '/assets/contis.png',
        alt: 'Conti\'s Bakeshop & Resto',
        srcLink: 'https://contis.ph/',
    },
    {
        id: 'wpl03',
        src: '/assets/s&r.png',
        alt: 'S&R Membership Shopping',
        srcLink: 'https://www.snrshopping.com/',
    },
    {
        id: 'wpl04',
        src: '/assets/unihealth.png',
        alt: 'Unihealth-Southwoods Hospital & Medical Center',
        srcLink: 'https://unihealthsouthwoodshospital.com/',
    },
    {
        id: 'wpl05',
        src: '/assets/global.png',
        alt: 'Global Care Medical Center of Bay',
        srcLink: 'https://bay.globalcarehospitals.com/',
    },
    {
        id: 'wpl06',
        src: '/assets/siliconvalley.png',
        alt: 'Silicon Valley',
        srcLink: 'https://bay.globalcarehospitals.com/',
    },
    {
        id: 'wpl07',
        src: '/assets/appelectric.jpg',
        alt: 'App Electric',
        srcLink: 'https://appelectric.com.ph/',
    },
    {
        id: 'wpl08',
        src: '/assets/mandanibay.png',
        alt: 'Mandani Bay',
        srcLink: 'https://www.mandanibay.com/',
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

// stats in contact us 
export const currentStats = [
    {
        id: 'stat1',
        title: 'By the Numbers',
        // title: 'lorem ipsum the',
        number: ''
    },
    {
        id: 'stat2',
        title: 'Years of Service',
        // title: 'lorem ipsum the',
        number: '14'
    },
    {
        id: 'stat3',
        title: 'Current Users',
        // title: 'lorem ipsum the',

        number: '3000+'
    },
    {
        id: 'stat4',
        title: 'Partners',
        // title: 'lorem ipsum the',
        number: '20'
    },
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
              desc: 'Unit 19B 2nd Floor Aseana Powerstation Building Pres Macapagal Blvd, corner Bradco Ave, Parañaque, 1700 Metro Manila' 
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


// LFG

export const highlightFAQ = [
    {
      id: 'hFAQ01',
      title: 'Everything You Need To Know About Bitverse HRIS',
      featMsg: 'Frequently Asked Question',
      items: [
          {
              id: 'hFAQ0101',
              question: 'Highlight One (1)',
              answer: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed.',
              icon: '/assets/arrowDown.svg',
          }, 
          {
              id: 'hFAQ0102',
              question: 'Highlight One (2)',
              answer: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed',
              icon: '/assets/arrowDown.svg',
          }, 
      ]
    },
  
    {
      id: 'hFAQ02',
      title: 'Everything You Need To Know About Bitverse HRIS',
      featMsg: 'Frequently Asked Question',
      items: [
          {
              id: 'hFAQ0201',
              question: 'Highlight Two (1)',
              answer: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed.',
              icon: '/assets/arrowDown.svg',
          }, 
          {
              id: 'hFAQ0202',
              question: 'Highlight Two (2)',
              answer: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed',
              icon: '/assets/arrowDown.svg',
          }, 
      ]
    },
  ]
  

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