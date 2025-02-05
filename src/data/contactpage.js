export const contactPageData = [
    {
        key: 'apd01',
        title: "Glad you're here! Let's start by booking a HRIS demo",
        isMainAbout: true,
        picUrl: '/assets/waving-hand.svg',
        desc: 'We understand that manual HR processes can be time-consuming and prone to errors. Our HRIS system offers a comprehensive solution to streamline your HR operations and ensure accurate and up-to-date data. Aside from this, we also cater in customizable solutions for your company and organization, ranging from profile websites, portfolio, dynamic contact pages, systems and more. Contact us to know more!',
    },
    {
        key: 'apd02',
        title: 'Our Mission',
        isMainAbout: false,
        picUrl: '',
        desc: 'To ensure the success of our partners by providing continuing and professional IT support, using our expertiseto long-term, innovative and cost-effective solutions for our partners.',
    },
    {
        key: 'apd03',
        title: 'Our Vision',
        isMainAbout: false,
        picUrl: '',
        desc: 'To be trusted partner of choice providing top-notch, innovative and reliable IT solutions for our customers both local and international.',
    },
    {
        key: 'apd04',
        title: 'Our Focus',
        isMainAbout: false,
        picUrl: '',
        desc: 'Forge strategic partnerships with progressive and pioneering organizations that are in the forefront of utilizing technology to deliver differentiation to their business. Transform organizations via innovative technological solutions. Enable partners to move to automated and digital systems.',
    }
];

export const contactPageBanner = {
    bannerSrc: '/assets/bv-contact-us.pngg'
};

export const webDevContactItem = [
    {
        id: 'itemOne',
        title: 'Fast',
        desc: 'Increase Speed To Market',
        iconName: '/assets/webDevContact-img-one.png',
    },
    {
        id: 'itemTwo',
        title: 'Reliable',
        desc: 'Get High-Quality Software',
        iconName: '/assets/webDevContact-img-two.png',
    },
    {
        id: 'itemThree',
        title: 'Scalable',
        desc: 'Reduce Development Cost',
        iconName: '/assets/webDevContact-img-three.png',
    },
]

export const contactPageFormList = [
    {
        key: 'cpfl01',
        label: 'Full Name',
        labelFor: 'fullName',
        type: 'text',
        placeholder: 'Enter Full Name',
        value: 'fullName',
        required: true,
        pattern: '',
    },
    {
        key: 'cpfl02',
        label: 'Email Address',
        labelFor: 'email',
        type: 'email',
        placeholder: 'Enter Valid Email',
        value: 'email',
        required: true,
        pattern: '',
    },
    {
        key: 'cpfl03',
        label: 'Contact Number',
        labelFor: 'contactNumber',
        type: 'tel',
        placeholder: 'Cellphone Number',
        value: 'contactNumber',
        required: true,
        pattern: '[0-9]{4}-[0-9]{3}-[0-9]{4}',
    },
    {
        key: 'cpfl04',
        label: 'Company Name',
        labelFor: 'companyName',
        type: 'text',
        placeholder: 'Business Name',
        value: 'companyName',
        required: true,
        pattern: '',
    },
    {
        key: 'cpfl05',
        label: 'Number of Employees',
        labelFor: 'numberOfEmployees',
        type: 'number',
        placeholder: 'Can Be Estimates',
        value: 'numberOfEmployees',
        required: true,
        pattern: '',
    },
    {
        key: 'cpfl06',
        label: 'Appointment Date',
        labelFor: 'datePreferences',
        type: 'date',
        placeholder: 'Preferred Date',
        value: 'datePreferences',
        required: true,
        pattern: '',
    },
    {
        key: 'cpfl07',
        label: 'Preferred Time',
        labelFor: 'timePreferences',
        type: 'time',
        placeholder: 'Preferred Time',
        value: 'timePreferences',
        required: true,
        pattern: '',
    },
    {
        key: 'cpfl08',
        label: 'Remarks:',
        labelFor: 'remarks',
        type: 'text',
        placeholder: 'Any additional input (Optional)',
        value: 'remarks',
        required: false,
        pattern: '',
    }
];

export const webDevContactPageFormList = [
    {
        key: 'cpfl01',
        label: 'Full Name',
        labelFor: 'fullName',
        type: 'text',
        placeholder: 'Enter Full Name',
        value: 'fullName',
        required: true,
        pattern: '',
    },
    {
        key: 'cpfl02',
        label: 'Email Address',
        labelFor: 'emailAddress',
        type: 'email',
        placeholder: 'Enter Valid Email',
        value: 'emailAddress',
        required: true,
        pattern: '',
    },
    {
        key: 'cpfl03',
        label: 'Contact Number',
        labelFor: 'contactNumber',
        type: 'tel',
        placeholder: 'Cellphone Number',
        value: 'contactNumber',
        required: true,
        pattern: '[0-9]{4}-[0-9]{3}-[0-9]{4}',
    },
    {
        key: 'cpfl04',
        label: 'Company Name',
        labelFor: 'companyName',
        type: 'text',
        placeholder: 'Business Name',
        value: 'companyName',
        required: true,
        pattern: '',
    },
    {
        key: 'cpfl08',
        label: 'Remarks:',
        labelFor: 'remarks',
        type: 'text',
        placeholder: 'Any additional input (Optional)',
        value: 'remarks',
        required: false,
        pattern: '',
    }
];

// real contact us info
export const realContactUsInfo = [
    {
        id: 'info-one',
        title: 'Contact Us',
        featMsgOne: 'Call us: +639171187206',
        featMsgTwo: 'Email: sales@bitverseph.com',
        iconName: '/assets/realContactUs-Icon.svg',
    },
    {
        id: 'info-two',
        title: 'Office Hours',
        featMsgOne: 'Mon - Friday',
        featMsgTwo: '8:00 am - 5:00 pm',
        iconName: '/assets/realOfficeHours-Icon.svg',
    },
    {
        id: 'info-three',
        title: 'Address',
        featMsgOne: 'Unit 19B 2nd Floor Aseana Powerstation Building Pres Macapagal Blvd, corner Bradco Ave, Parañaque, 1700 Metro Manila',
        featMsgTwo: '',
        iconName: '/assets/realAddress-Icon.svg',
    }
]

// real contact us form
export const contactFormInfo = [
    {
        id: 'field-one',
        name: 'fullName',
        label: 'Fullname',
        type: 'text',
        // value: '',
        required: 'true'
    },
    {
        id: 'field-two',
        name: 'emailAddress',
        label: 'Email Address',
        type: 'text',
        // value: '',
        required: 'true'
    },
    {
        id: 'field-three',
        name: 'contactNumber',
        label: 'Contact Number',
        type: 'number',
        // value: '',
        required: 'true'
    },
    {
        id: 'field-four',
        name: 'companyName',
        label: 'Company Name',
        type: 'text',
        // value: '',
        required: 'true'
    },
    {
        id: 'field-five',
        name: 'remarksQuestion',
        label: 'Remarks / Questions',
        type: 'text',
        // value: '',
        required: 'true'
    }
]

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    contactPageData,
    contactPageBanner,
    contactPageFormList
}