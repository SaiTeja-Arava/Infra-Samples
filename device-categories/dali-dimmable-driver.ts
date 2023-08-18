export const IDaliDimmableDriverPropertiesSchema = {
    name: "IDaliDimmableDriverProperties",
    properties: {
        fadeTime: "int",
        instantOff: "bool",
        maxValue: "int",
        minValue: "int",
        defaultState: "int",
        isDriverPropertyUpdated: "bool",
    }


}

export const IDaliDimmableDriverStateSchema = {
    name: "IDaliDimmableDriverState",
    properties: {
        driverState: "int",
    }

}

export const IDaliDimmableActionSchema = {
    name: "IDaliDimmableAction",
    properties: {
        groupId: "int",
        roomId: "string",
        driverState: "int",
    }

}
