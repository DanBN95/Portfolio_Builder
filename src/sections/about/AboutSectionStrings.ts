import { AboutSectionItemType, AboutSectionType } from "../../types";

export const aboutSectionString: Omit<AboutSectionItemType, "setAiFormModalOpen">[] = [
    {
        sectionName: "About" ,
        text: "About",
        textType: 'title',
        editType: 'input',
        customTextStyle: 'general-text about-title'
    },
    {
        sectionName: "About",
        text: " Motivated Full-Stack Developer with a Bachelor's degree in Computer Science and hands-on experience in developing high- quality applications using React Native. Seeking a challenging Software Engineer position that will allow me to further my knowledge and skills as well as increased responsibility in an innovative company.",
        textType: 'paragraph',
        editType: 'textarea',
        customTextStyle: 'general-text about-para'
    },
    {
        sectionName: "Experience",
        text: "Experience",
        textType: 'title',
        editType: 'input',
        customTextStyle: 'general-text sub-title'
    },
    {
        sectionName: "Experience",
        text: "One year experience as a Mobile Developer at Matrix company.\n Accomplished React-Native developer with expertise in JavaScript, React- Native architecture, Redux, and Typescript.\nSuccessfully delivered visually appealing IOS and Android app projects from scratch and enhanced existing projects.\nProficient in UI/UX platforms such as Figma and Xd.\nProven experience in updating libraries, making OS adjustments, and uploading new versions to stores.\nAdept at independently integrating with servers and clients and providing valuable development solutions.\nCollaborated effectively with skilled team members and demonstrated excellent problem-solving skills.\nUtilized project management tools such as Jira and Bitbucket to efficiently manage projects.",
        textType: 'ul',
        editType: 'textarea',
        customTextStyle: 'about-para'
    },
    {
        sectionName: "Education",
        text: "Education",
        textType: 'title',
        editType: 'input',
        customTextStyle: 'general-text sub-title'
    },
    {
        sectionName: "Education",
        text: "Bachelor degree in Computer Science with Full-Stack proficiency",
        textType: 'paragraph',
        editType: 'textarea',
        customTextStyle: 'general-text about-para'
    },
];
