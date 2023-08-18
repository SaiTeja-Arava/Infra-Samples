export const IZigbeeIRBlasterPropertiesSchema= {
    name:"IZigbeeIRBlasterProperties",
    properties:{
        blastSignalDelay: "int",
    }

}

export interface IZigbeeIRBlasterState {}

export const IZigbeeIRBlasterActionSchema= {
    name:"IZigbeeIRBlasterAction",
    properties:{
        remoteId: "string",
        remoteType: "int",
        irDevice: "string",
        irBlastAction: "object",
    }

}
