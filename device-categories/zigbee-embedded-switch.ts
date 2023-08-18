
export const IEmbeddedApplianceActionSchema = {
    name: "IEmbeddedApplianceAction",
    embedded:true,
    properties: {
        deviceId: "string",
        applianceId: "string",
        applianceType: "int",
        applianceState: "applianceStateCollection"
    }

}
export const applianceStateCollectionSchema = {
    name: "applianceStateCollection",
    embedded:true,
    properties: {
        iEmbeddedOnOffApplianceState: { type: "IEmbeddedOnOffApplianceState", optional: true },
        iEmbeddedSingleDimmerApplianceState: { type: "IEmbeddedSingleDimmerApplianceState", optional: true },
        iEmbeddedFanApplianceState: { type: "IEmbeddedFanApplianceState", optional: true },
        iEmbeddedColorTunableApplianceState: { type: "IEmbeddedColorTunableApplianceState", optional: true }
    }
}

export const IEmbeddedSwitchPortSchema = {
    name: "IEmbeddedSwitchPort",
    properties: {
        portId: "int",
        portState: "int",
        isInAppliance: "bool",
        applianceId: "string",
    }

}

export const IApplianceidDeviceidDetailsSchema = {
    name: "IApplianceidDeviceidDetails",
    embedded:true,
    properties: {
        deviceId: "string",
        applianceId: "string",
    }

}

export const IOnOffApplianceGroupPropertiesSchema = {
    name: "IOnOffApplianceGroupProperties",
    embedded:true,
    properties: {
        deviceList: "IApplianceidDeviceidDetails[]",
    }
}
export const IFanApplianceGroupPropertiesSchema = {
    name: "IFanApplianceGroupProperties",
    embedded:true,
    properties: {
        deviceList: "IApplianceidDeviceidDetails[]",
    }

}
export const ISingleDimmerApplianceGroupPropertiesSchema = {
    name: "ISingleDimmerApplianceGroupProperties",
    properties: {
        deviceList: "IApplianceidDeviceidDetails[]",
        fadeTime: "int",
        fadeDown: "int",
        fadeOff: "int",
        minValue: "int",
        maxValue: "int",
        defaultState: "int",
    }

}
export const IColorTunableApplianceGroupPropertiesSchema = {
    name: "IColorTunableApplianceGroupProperties",
    properties: {
        deviceList: "IApplianceidDeviceidDetails[]",
        fadeTime: "int",
        fadeOff: "int",
        fadeDown: "int",
        minValue: "int",
        maxValue: "int",
        defaultState: "int",
    }

}

export const IEmbeddedOnOffApplianceStateSchema = {
    name: "IEmbeddedOnOffApplianceState",
    properties: {
        switchState: "int",
    }

}

export const IEmbeddedOnOffAppliancePropertiesSchema = {
    name: "IEmbeddedOnOffApplianceProperties",
    properties: {
        portId: "int",
    }

}

export const IEmbeddedSingleDimmerApplianceStateSchema = {
    name: "IEmbeddedSingleDimmerApplianceState",
    properties: {
        switchState: "int",
    }

}

export const IEmbeddedSingleDimmerAppliancePropertiesSchema = {
    name: "IEmbeddedSingleDimmerApplianceProperties",
    properties: {
        portId: "int",
        fadeTime: "int",
        fadeDown: "int",
        fadeOff: "int",
        minValue: "int",
        maxValue: "int",
        defaultState: "int",
    }

}

export const IEmbeddedFanApplianceStateSchema = {
    name: "IEmbeddedFanApplianceState",
    properties: {
        fanState: "int",
    }

}

export const IEmbeddedFanAppliancePropertiesSchema = {
    name: "IEmbeddedFanApplianceProperties",
    properties: {
        portId: "int",
    }

}

export const IEmbeddedColorTunableApplianceStateSchema = {
    name: "IEmbeddedColorTunableApplianceState",
    properties: {
        lightState: "int",
        warmWhiteState: "int",
        coolWhiteState: "int",
    }

}

export const IEmbeddedColorTunableAppliancePropertiesSchema = {
    name: "IEmbeddedColorTunableApplianceProperties",
    properties: {
        warmWhitePort: "int",
        coolWhitePort: "int",
        fadeTime: "int",
        fadeDown: "int",
        fadeOff: "int",
        minValue: "int",
        maxValue: "int",
        defaultState: "int",
    }

}
export const IEmbeddedGroupOnOffApplianceActionSchema = {
    name: "IEmbeddedGroupOnOffApplianceAction",
    properties: {
        groupId: "int",
        roomId: "string",
        switchState: "int",
    }

}
export const IEmbeddedGroupSingleDimmerApplianceActionSchema = {
    name: "IEmbeddedGroupSingleDimmerApplianceAction",
    properties: {
        groupId: "int",
        roomId: "string",
        switchState: "int",
    }

}
export const IEmbeddedGroupFanApplianceActionSchema = {
    name: "IEmbeddedGroupFanApplianceAction",
    properties: {
        groupId: "int",
        roomId: "string",
        fanState: "int",
    }

}
export const IEmbeddedGroupColorTunableApplianceActionSchema = {
    name: "IEmbeddedGroupColorTunableApplianceAction",
    properties: {
        groupId: "int",
        roomId: "string",
        lightState: "number",
        warmWhiteState: "number",
        coolWhiteState: "number",
    }

}

export const IEmbeddedSwitchAppliancePropertiesSchema = {
    name: "IEmbeddedSwitchApplianceProperties",
    properties: {
        applianceId: "string",
    }

}
export const IEmbeddedSwitchGroupPropertiesSchema = {
    name: "IEmbeddedSwitchGroupProperties",
    properties: {
        groupId: "int",
        roomId: "string",
    }
}

export const IEmbeddedSwitchAcFanPropertiesSchema = {
    name: "IEmbeddedSwitchAcFanProperties",
    properties: {
        deviceId: "string",
    }

}
export const IEmbeddedSwitchDcFanPropertiesSchema = {
    name: "IEmbeddedSwitchDcFanProperties",
    properties: {
        deviceId: "string",
    }

}
export const appliancePropertiesCollectionschema = {
    name: "appliancePropertiesCollection",
    properties: {
        iEmbeddedColorTunableApplianceProperties: { type: "IEmbeddedColorTunableApplianceProperties", optional: true },
        iEmbeddedFanApplianceProperties: { type: "IEmbeddedFanApplianceProperties", optional: true },
        iEmbeddedSingleDimmerApplianceProperties: { type: "IEmbeddedSingleDimmerApplianceProperties", optional: true },
        iEmbeddedOnOffApplianceProperties: { type: "IEmbeddedOnOffApplianceProperties", optional: true },
    }
}
export const IEmbeddedApplianceSchema = {
    name: "IEmbeddedAppliance",
    properties: {
        applianceId: "string",
        applianceName: "string",
        applianceType: "int",
        applianceState: "applianceStateCollection",
        applianceProperties: "appliancePropertiesCollection",
        iconType: "int",
        defaultState: "applianceStateCollection",
        inGroup: "bool",
        groupId: "int",
        groupRoom: {type:"string",optional:true},
        lastUpdatedTime: "int",
        lastUpdatedBy: "string",
        lastUpdatedUser: {type:"string",optional:true},
        lastUpdatedSource: "string",
    }

}
export const switchAppliancePropertiesCollectionSchema = {
    name: "switchAppliancePropertiesCollection",
    properties: {
        iEmbeddedSwitchApplianceProperties: { type: "IEmbeddedSwitchApplianceProperties", optional: true },
        iEmbeddedSwitchGroupProperties: { type: "IEmbeddedSwitchGroupProperties", optional: true },
        iEmbeddedSwitchAcFanProperties: { type: "IEmbeddedSwitchAcFanProperties", optional: true },
        iEmbeddedSwitchDcFanProperties: { type: "IEmbeddedSwitchDcFanProperties", optional: true },
    }
}
export const IEmbeddedSwitchSchema = {
    name: "IEmbeddedSwitch",
    properties: {
        switchId: "int",
        switchType: "int",
        switchName: "string",
        switchProperties: "switchAppliancePropertiesCollection",
    }

}

export const IZigbeeEmbeddedSwitchPropertiesSchema = {
    name: "IZigbeeEmbeddedSwitchProperties",
    embedded:true,
    properties: {
        outputPorts: "IEmbeddedSwitchPort[]",
        appliance: "IEmbeddedAppliance[]",
        switch: "IEmbeddedSwitch[]",
        isAreaMaster: "mixed",
    }

}

export interface IZigbeeEmbeddedSwitchState { }
