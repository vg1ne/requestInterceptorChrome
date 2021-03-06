import {defaultParamsSection, ParamsSectionState} from "../params-section/params-section-props.model";

export default interface FormState {
    tabId: number,
    enabled: boolean,
    paramsSections: ParamsSectionState[]
}
export const initState: FormState = {
    enabled: true,
    tabId: 0,
    paramsSections: [defaultParamsSection]
}
