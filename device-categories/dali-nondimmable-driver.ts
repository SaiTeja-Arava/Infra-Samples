export const IDaliNonDimmableDriverPropertiesSchema = {
    name: "IDaliNonDimmableDriverProperties",
    properties: {
        fadeTime: "int",
        instantOff: "bool",
        isDriverPropertyUpdated: "bool",
    }


}

export const IDaliNonDimmableDriverStateSchema = {
    name: "IDaliNonDimmableDriverState",
    properties: {
        driverState: "int",
    }

}

export const IDaliNonDimmableActionSchema = {
    name: "IDaliNonDimmableAction",
    properties: {
        groupId: "int",
        roomId: "string",
        driverState: "int",
    }

}
