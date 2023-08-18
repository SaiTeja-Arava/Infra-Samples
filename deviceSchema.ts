

//console.log(IDaliColorTunableDriverPropertiesSchema.name)
export const devicePropertiesCollectionSchema = {
    name: "devicePropertiesCollection",
    embedded:true,
    properties: {
        iDaliColorTunableDriverProperties: { type:"object",objectType:"IDaliColorTunableDriverProperties", optional: true },
        iDaliColorTunableDriverGroupProperties: { type: "IDaliColorTunableDriverGroupProperties", optional: true },
        iDaliDimmableDriverProperties: { type: "IDaliDimmableDriverProperties", optional: true },
        iDaliNonDimmableDriverProperties: { type: "IDaliNonDimmableDriverProperties", optional: true },
        iKeusIRACRemoteProperties: { type: "IKeusIRACRemoteProperties", optional: true },
        iKeusIRTVRemoteProperties: { type: "IKeusIRTVRemoteProperties", optional: true },
        iKeusIRAMPRemoteProperties: { type: "IKeusIRAMPRemoteProperties", optional: true },
        iKeusIRPRRemoteProperties: { type: "IKeusIRPRRemoteProperties", optional: true },
        iKeusIRFANRemoteProperties: { type: "IKeusIRFANRemoteProperties", optional: true },
        iKeusSceneWizardProperties: { type: "IKeusSceneWizardProperties", optional: true },
        iKeusSmartConsoleProperties: { type: "IKeusSmartConsoleProperties", optional: true },
        iZigbeeEmbeddedSwitchProperties:{type:"IZigbeeEmbeddedSwitchProperties",optional:true},
        iZigbeeIRBlasterProperties:{type:"IZigbeeIRBlasterProperties",optional:true}
        

    }
}
export const IKeusDeviceSchema = {
    name: "IKeusDevice",
    properties: {
        deviceId: "string",
        masterId: "string",
        deviceType: "string",
        deviceCategory: "string",
        deviceName: "string",
        deviceSection: "string",
        deviceRoom: "string",
        deviceLocation: "string",
        deviceControlType: "string",
        deviceParent: "string",
        firmwareVersion: "string",
        isHidden: "bool",
        isConfigured: "bool",
        manufacturerName: "string",
        deviceTypeDisplayName: "string",
        deviceTypeName: "string",
        inGroup: "bool",
        deviceGroup: "int",
        groupRoom: "string",
        deviceState: "deviceState",
        deviceProperties: "devicePropertiesCollection",
        lastUpdateTime: "int",
        lastUpdateBy: "string",
        lastUpdateUser: { type: "string", optional: true },
        lastUpdateSource: "string",
        deviceSyncInfo: "IKeusDeviceSyncInfo",
        markedForDelete: "int",
        registeredAt: { type: "int", optional: true }
    }
}
export const deviceStateSchema = {
    name: "deviceState",
    properties: {

    }
}

export const IKeusDeviceSyncInfoSchema = {
    name: "IKeusDeviceSyncInfo",
    embedded: true,
    properties: {
        syncStatus: "int",
        syncRequestType: "int",
        syncRequestId: "string",
        syncRequestTime: "int",
        syncRequestParams: "syncRequestParams",
        jobTypeName: { type: "int", optional: true },
        jobMessage: { type: "string", optional: true }
    }
}
export const syncRequestParamsSchema = {
    name: "syncRequestParams",
    properties: {

    }
}