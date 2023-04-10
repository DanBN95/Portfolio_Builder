export type AboutParagraphType = {
    title: string;
    titleClassName: string;
    paragraphString: string;
    paragraphEditable?: boolean;
    isUl?: boolean;
}

export type AboutSectionType = AboutParagraphType[];

export type AboutSectionItemType =  {
    sectionName: string;
    index?: number;
    text: string;
    textType: "title" | "paragraph" | 'ul';
    editType: "input" | "textarea";
    placeholder?: string;
    setAiFormModalOpen: (isOpen: boolean) => void;
    customTextStyle: string;
    deleteSectionItem?: (index: number) => void;
}