export type AboutParagraphType = {
    title: string;
    titleClassName: string;
    paragraphString: string;
    paragraphEditable?: boolean;
    isUl?: boolean;
}

export type AboutSectionType = AboutParagraphType[];

export type AboutSectionItemType =  {
    text: string;
    editType: "input" | "textarea";
    placeholder: string;
    value: Object;
    valueKey: string;
    setValue: (event: any) => void;
    isUlTag: boolean;
    customContainerStyle: string;
    textStyle: string;
}