export const IDaliColorTunableDriverStateSchema = {
    name: "IDaliColorTunableDriverState",
    properties: {
        driverState: "int",
        colorTemperature: "int",
        lastUpdateBy: "string",
        lastUpdateTime: "int",
        lastUpdateUser: "string",
        lastUpdateSource: "string",
    }
}

export const IDaliColorTunableDriverPropertiesSchema = {
    name: "IDaliColorTunableDriverProperties",
    properties: {
        fadeTime: "int",
        instantOff: "bool",
        maxValue: "int",
        minValue: "int",
        defaultState: "IDaliColorTunableDriverState",
        isDriverPropertyUpdated: "bool",
        minTemperature: "int",
        maxTemperature: "int",
    }

};

export const IDaliColorTunableDriverGroupPropertiesSchema = {
    name: "IDaliColorTunableDriverGroupProperties",
    properties: {
        fadeTime: "int",
        instantOff: "bool",
        maxValue: "int",
        minValue: "int",
        defaultState: "IDaliColorTunableDriverState",
        deviceVoiceName: "string",
        minTemperature: "int",
        maxTemperature: "int",
    }

};

export const IDaliColorTunableDriverGroupSceneActionSchema = {
    name: "IDaliColorTunableDriverGroupSceneAction",
    properties: {
        groupId: "int",
        roomId: "string",
        driverState: "IDaliColorTunableDriverState",
    }

}


export const IDaliColorTunableDriverGroupScheculeActionSchema = {
    name: "IDaliColorTunableDriverGroupScheculeAction",
    properties: {
        groupId: "int",
        roomId: "string",
        driverState: "IDaliColorTunableDriverState",
    }

}


export const IDaliColorTunableDriverGroupActivitySchema = {
    name: "IDaliColorTunableDriverGroupActivity",
    properties: {
        groupId: "int",
        groupRoom: "string",
        roomId: "string",
        roomName: "string",
        floorId: "string",
        floorName: "string",
        sectionId: "string",
        sectionName: "string",
        driverState: "IDaliColorTunableDriverState",
    }

}





