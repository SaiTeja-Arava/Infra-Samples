import { IKeusSmartConsoleButtonSchema } from './keus-smart-console';
export const IKeusSceneWizardPropertiesSchema = {
    name: "IKeusSceneWizardProperties",
    properties: {
        buttons: "IKeusSmartConsoleButton[]",
        sceneStepSize: "int",
        batteryPercentage: {type:"int",optional:true}
    }

}

export interface IKeusSceneWizardState { }
