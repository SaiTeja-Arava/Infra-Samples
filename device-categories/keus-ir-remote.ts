//AC
export const IKeusIRACRemotePropertiesSchema = {
    name: "IKeusIRACRemoteProperties",
    properties: {
        temperatureRange: "int[]",
        swingHEnabled: "bool",
        swingHSelectType: "int",
        swingHOptions: "string[]",
        swingVEnabled: "bool",
        swingVSelectType: "int",
        swingVOptions: "string[]",
        fanEnabled: "bool",
        fanSelectType: "int",
        fanOptions: "string[]",
        modeEnabled: "bool",
        modeSelectType: "int",
        modeOptions: "string[]",
    }

}
export const IKeusIRACRemoteStateSchema = {
    name: "IKeusIRACRemoteState",
    properties: {
        powerOn: "bool",
        temperature: "int",
        swingHLevel: { type: "string", optional: true },
        swingVLevel: { type: "string", optional: true },
        fanLevel: { type: "string", optional: true },
        mode: { type: "string", optional: true },
    }

}
export const IKeusIRACBlastActionSchema = {
    name: "IKeusIRACBlastAction",
    properties: {
        updateType: { type: "int", optional: true },
        powerOn: { type: "bool", optional: true },
        temperature: { type: "int", optional: true },
        swingHLevel: { type: "string", optional: true },
        swingVLevel: { type: "string", optional: true },
        fanLevel: { type: "string", optional: true },
        mode: { type: "string", optional: true },
    }

}

//TV
export const IKeusIRTVRemotePropertiesSchema = {
    name: "IKeusIRTVRemoteProperties",
    properties: {
        sourceEnabled: "bool",
        sourceSelectType: "int",
        sourceOptions: "string[]",
        modeEnabled: "bool",
        modeSelectType: "int",
        modeOptions: "string[]",
    }

}
export interface IKeusIRTVRemoteState { }
export const IKeusIRTVBlastActionSchema = {
    name: "IKeusIRTVBlastAction",
    properties: {
        updateType: "int",
        powerOn: { type: "bool", optional: true },
        channelNumber: { type: "int", optional: true },
        source: { type: "string", optional: true },
        mode: { type: "string", optional: true },
    }

}

//Amp
export const IKeusIRAMPRemotePropertiesSchema = {
    name: "IKeusIRAMPRemoteProperties",
    properties: {
        sourceEnabled: "bool",
        sourceSelectType: "int",
        sourceOptions: "string[]",
        modeEnabled: "bool",
        modeSelectType: "int",
        modeOptions: "string[]",
    }

}
export interface IKeusIRAMPRemoteState { }
export const IKeusIRAMPBlastActionSchema = {
    name: "IKeusIRAMPBlastAction",
    properties: {
        updateType: "int",
        powerOn: { type: "bool", optional: true },
        source: { type: "string", optional: true },
        mode: { type: "string", optional: true },
    }

}

//Pr
export const IKeusIRPRRemotePropertiesSchema = {
    name: "IKeusIRPRRemoteProperties",
    properties: {
        sourceEnabled: "bool",
        sourceSelectType: "int",
        sourceOptions: "string[]",
        modeEnabled: "bool",
        modeSelectType: "int",
        modeOptions: "string[]",
        onoffType: "int",
    }

}
export const IKeusIRPRRemoteStateSchema = {
    name: "IKeusIRPRRemoteState",
    properties: {
        updateType: "int",
        powerOn: { type: "bool", optional: true },
        source: { type: "string", optional: true },
        mode: { type: "string", optional: true },
    }

}
export const IKeusIRPRBlastActionSchema = {
    name: "IKeusIRPRBlastAction",
    properties: {
        updateType: "int",
        powerOn: { type: "bool", optional: true },
        source: { type: "string", optional: true },
        mode: { type: "string", optional: true },
    }

}

//Fan
export const IKeusIRFANRemotePropertiesSchema = {
    name: "IKeusIRFANRemoteProperties",
    properties: {
        speedSelectType: "int",
        speedOptions: "string[]",
        modeEnabled: "bool",
        modeSelectType: "int",
        modeOptions: "string[]",
        ledEnabled: "bool",
    }

}
export const IKeusIRFANRemoteStateSchema = {
    name: "IKeusIRFANRemoteState",
    properties: {
        powerOn: "bool",
        speedLevel: { type: "string", optional: true },
        mode: { type: "string", optional: true },
        ledState: { type: "int", optional: true },
        updateType: { type: "int", optional: true },
    }

}
export const IKeusIRFANBlastActionSchema = {
    name: "IKeusIRFANBlastAction",
    properties: {
        powerOn: "bool",
        speedLevel: {type:"string",optional:true},
        mode: {type:"string",optional:true},
        ledState: {type:"int",optional:true},
        updateType: {type:"int",optional:true},
    }

}
