export const IKeusSmartConsoleButtonSchema = {
    name: "IKeusSmartConsoleButton",
    properties: {
        buttonId: "int",
        buttonType: "int",
        buttonProperties: "buttonPropertiesCollection",
    }

}
export const buttonPropertiesCollectionSchema = {
    name: "buttonPropertiesCollection",
    properties: {
        iSmartConsoleGroupButtonProperties: { type: "ISmartConsoleGroupButtonProperties", optional: true },
        iSmartConsoleSceneButtonProperties: { type: "ISmartConsoleSceneButtonProperties", optional: true },
        iSmartConsoleCurtainButtonProperties: { type: "ISmartConsoleCurtainButtonProperties", optional: true },
        iSmartConsoleRelayButtonProperties: { type: "ISmartConsoleRelayButtonProperties", optional: true },
        iSmartConsoleRemoteRelayButtonProperties: { type: "ISmartConsoleRemoteRelayButtonProperties", optional: true },
        iSmartConsoleFanButtonProperties: { type: "ISmartConsoleFanButtonProperties", optional: true },
        iSmartConsoleNoPropsButtonProperties: { type: "ISmartConsoleNoPropsButtonProperties", optional: true },

    }
}

export const IKeusSmartConsoleRelaySchema = {
    name: "IKeusSmartConsoleRelay",
    properties: {
        relayId: "int",
        relayName: "string",
        relayState: "int",
        applianceType: "int",
        isHighPower: "bool",
        lastUpdateTime: "int",
        lastUpdateBy: "string",
        lastUpdateUser: {type:"string",optional:true},
        lastUpdateSource: "string",
        isAssigned: {type:"bool",optional:true}
    }

}

export const IKeusSmartConsolePropertiesSchema = {
    name: "IKeusSmartConsoleProperties",
    properties: {
        buttons: "IKeusSmartConsoleButton[]",
        relays: "IKeusSmartConsoleRelay[]",
        defaultFan: {type:"string",optional:true},
        defaultSceneId: "int",
        defaultSceneRoom: {type:"string",optional:true},
        sceneStepSize: "int",
        isAreaMaster: "bool",
        isDaliMaster: "bool",
        identifyStatus: "bool",
        interactionMode: {type:"int",optional:true}
    }

}

export const ISmartConsoleRelayActionSchema = {
    name: "ISmartConsoleRelayAction",
    properties: {
        deviceId: "string",
        relayId: "int",
        relayState: "int",
    }

}

export interface IKeusSmartConsoleState { }

//Button Types
export const ISmartConsoleGroupButtonPropertiesSchema = {
    name: "ISmartConsoleGroupButtonProperties",
    properties: {
        groupId: "int",
        roomId: "string",
    }

}

export const ISmartConsoleSceneButtonPropertiesSchema = {
    name: "ISmartConsoleSceneButtonProperties",
    properties: {
        sceneId: "int",
        roomId: "string",
    }
}


export const ISmartConsoleCurtainButtonPropertiesSchema = {
    name: "ISmartConsoleCurtainButtonProperties",
    properties: {
        deviceIds: "string[]",
        applianceIds: "string[]",
    }
}


export const ISmartConsoleRelayButtonPropertiesSchema= {
    name:"ISmartConsoleRelayButtonProperties",
    properties:{
        relayId: "int",
    }

}

export const ISmartConsoleRemoteRelayButtonPropertiesSchema= {
    name:"ISmartConsoleRemoteRelayButtonProperties",
    properties:{
        deviceId: "string",
        relayId: "int",
    }

}

export const ISmartConsoleFanButtonPropertiesSchema= {
    name:"ISmartConsoleFanButtonProperties",
    properties:{
        deviceId: "string",
    }

}

export const ISmartConsoleNoPropsButtonPropertiesSchema= {
    name:"ISmartConsoleNoPropsButtonProperties",
    properties:{

    }
 }
