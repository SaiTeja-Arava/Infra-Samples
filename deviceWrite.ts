let Realm3 = require('realm');
import Realm from "realm";
import {data} from "./result2"
import { IDaliColorTunableDriverStateSchema,IDaliColorTunableDriverPropertiesSchema, IDaliColorTunableDriverGroupPropertiesSchema } from "./device-categories/dali-color-tunable-driver"
import { IDaliDimmableDriverPropertiesSchema } from "./device-categories/dali-dimmable-driver"
import { IDaliNonDimmableDriverPropertiesSchema } from "./device-categories/dali-nondimmable-driver"
import { IKeusIRACRemotePropertiesSchema, IKeusIRTVRemotePropertiesSchema, IKeusIRAMPRemotePropertiesSchema, IKeusIRPRRemotePropertiesSchema, IKeusIRFANRemotePropertiesSchema } from "./device-categories/keus-ir-remote"
import { IKeusSceneWizardPropertiesSchema } from "./device-categories/keus-scene-wizard";
import { buttonPropertiesCollectionSchema, IKeusSmartConsoleRelaySchema, IKeusSmartConsolePropertiesSchema, ISmartConsoleGroupButtonPropertiesSchema, ISmartConsoleSceneButtonPropertiesSchema, ISmartConsoleCurtainButtonPropertiesSchema, ISmartConsoleRelayButtonPropertiesSchema, ISmartConsoleRemoteRelayButtonPropertiesSchema, ISmartConsoleFanButtonPropertiesSchema, ISmartConsoleNoPropsButtonPropertiesSchema, IKeusSmartConsoleButtonSchema } from "./device-categories/keus-smart-console"
import {
    applianceStateCollectionSchema, IOnOffApplianceGroupPropertiesSchema, IFanApplianceGroupPropertiesSchema, ISingleDimmerApplianceGroupPropertiesSchema, IColorTunableApplianceGroupPropertiesSchema, IEmbeddedOnOffAppliancePropertiesSchema, IEmbeddedSingleDimmerAppliancePropertiesSchema, IEmbeddedFanAppliancePropertiesSchema, IEmbeddedColorTunableAppliancePropertiesSchema, IEmbeddedSwitchAppliancePropertiesSchema, IEmbeddedSwitchGroupPropertiesSchema, IEmbeddedSwitchAcFanPropertiesSchema, IEmbeddedSwitchDcFanPropertiesSchema, appliancePropertiesCollectionschema, switchAppliancePropertiesCollectionSchema, IZigbeeEmbeddedSwitchPropertiesSchema, IEmbeddedSwitchPortSchema, IEmbeddedApplianceSchema, IEmbeddedSwitchSchema, IApplianceidDeviceidDetailsSchema,
    IEmbeddedOnOffApplianceStateSchema,
    IEmbeddedSingleDimmerApplianceStateSchema,
    IEmbeddedFanApplianceStateSchema,
    IEmbeddedColorTunableApplianceStateSchema
} from "./device-categories/zigbee-embedded-switch"
import {IZigbeeIRBlasterPropertiesSchema} from "./device-categories/zigbee-ir-blaster"
import {IKeusDeviceSchema,deviceStateSchema,devicePropertiesCollectionSchema,IKeusDeviceSyncInfoSchema,syncRequestParamsSchema} from './deviceSchema'; // Import the exported schemas

(async () => {
    //const realm = new Realm({ schema: [FwHealthSchema, AppliancePropertiesSchema, ApplianceStateSchema, ApplianceSchema, SwitchPropertiesSchema, SwitchSchema, DevicePropertiesSchema, FwInfoSchema, DeviceSchema] });
    const realm = new Realm3({
        schema: [
            IKeusDeviceSchema,deviceStateSchema,devicePropertiesCollectionSchema,IKeusDeviceSyncInfoSchema,syncRequestParamsSchema,
            IDaliColorTunableDriverStateSchema,IDaliColorTunableDriverPropertiesSchema,IDaliColorTunableDriverGroupPropertiesSchema,
        IDaliDimmableDriverPropertiesSchema,
        IDaliNonDimmableDriverPropertiesSchema,
        IKeusIRACRemotePropertiesSchema, IKeusIRTVRemotePropertiesSchema, IKeusIRAMPRemotePropertiesSchema, IKeusIRPRRemotePropertiesSchema, IKeusIRFANRemotePropertiesSchema,
        IKeusSceneWizardPropertiesSchema,
        buttonPropertiesCollectionSchema, IKeusSmartConsoleRelaySchema, IKeusSmartConsolePropertiesSchema, ISmartConsoleGroupButtonPropertiesSchema, ISmartConsoleSceneButtonPropertiesSchema, ISmartConsoleCurtainButtonPropertiesSchema, ISmartConsoleRelayButtonPropertiesSchema, ISmartConsoleRemoteRelayButtonPropertiesSchema, ISmartConsoleFanButtonPropertiesSchema, ISmartConsoleNoPropsButtonPropertiesSchema, IKeusSmartConsoleButtonSchema,
        applianceStateCollectionSchema, IOnOffApplianceGroupPropertiesSchema, IFanApplianceGroupPropertiesSchema, ISingleDimmerApplianceGroupPropertiesSchema, IColorTunableApplianceGroupPropertiesSchema, IEmbeddedOnOffAppliancePropertiesSchema, IEmbeddedSingleDimmerAppliancePropertiesSchema, IEmbeddedFanAppliancePropertiesSchema, IEmbeddedColorTunableAppliancePropertiesSchema, IEmbeddedSwitchAppliancePropertiesSchema, IEmbeddedSwitchGroupPropertiesSchema, IEmbeddedSwitchAcFanPropertiesSchema, IEmbeddedSwitchDcFanPropertiesSchema, appliancePropertiesCollectionschema, switchAppliancePropertiesCollectionSchema, IZigbeeEmbeddedSwitchPropertiesSchema, IEmbeddedSwitchPortSchema, IEmbeddedApplianceSchema, IEmbeddedSwitchSchema, IApplianceidDeviceidDetailsSchema,
        IEmbeddedOnOffApplianceStateSchema,
        IEmbeddedSingleDimmerApplianceStateSchema,
        IEmbeddedFanApplianceStateSchema,
        IEmbeddedColorTunableApplianceStateSchema,
        IZigbeeIRBlasterPropertiesSchema
        ],

    });
    const MongoClient = require('mongodb').MongoClient;

    const uri = 'mongodb://172.20.176.1:27017/keus';
    const dbName = 'keus';
    const collectionName = 'devices';


    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const result = await collection.find({}).toArray();
    let deviceProperties:any ={
        KZES:"iZigbeeEmbeddedSwitchProperties",
        KZSC:"iKeusSmartConsoleProperties",
        KZSW:"iKeusSceneWizardProperties",
        KZIRB:"iZigbeeIRBlasterProperties",

    }
    realm.write(() => {
        result.forEach((doc: any) => {
            console.log(doc._id)
            let devicePropertyName="";
            const realmActivity = realm.create('IKeusDevice', {
                deviceId: doc.deviceId,
                masterId: doc.masterId,
                deviceType: doc.deviceType,
                deviceCategory: doc.deviceCategory,
                deviceName: doc.deviceName,
                deviceSection: doc.deviceSection,
                deviceRoom: doc.deviceRoom,
                deviceLocation: doc.deviceLocation,
                deviceControlType: doc.deviceControlType,
                deviceParent: doc.deviceParent,
                firmwareVersion: doc.firmwareVersion,
                isHidden: doc.isHidden,
                isConfigured: doc.isConfigured,
                manufacturerName: doc.manufacturerName,
                deviceTypeDisplayName: doc.deviceTypeDisplayName,
                deviceTypeName: doc.deviceTypeName,
                inGroup: doc.inGroup,
                deviceGroup: doc.deviceGroup,
                groupRoom: doc.groupRoom,
                deviceState: doc.deviceState,
                deviceProperties:{
                    [deviceProperties[doc.deviceCategory]]:doc.deviceProperties
                },
                lastUpdateTime: doc.lastUpdateTime,
                lastUpdateBy: doc.lastUpdateBy,
                lastUpdateUser: doc.lastUpdateUser,
                lastUpdateSource: doc.lastUpdateSource,
                deviceSyncInfo: doc.deviceSyncInfo,
                markedForDelete: doc.markedForDelete,
                registeredAt: doc.registeredAt,
            })
            console.log(realmActivity)
        })
    })
    // realm.write(() => {
    //     // Delete all objects of the 'MyObject' schema
    //     const allObjects = realm.objects('IKeusDevice');
    //     realm.delete(allObjects);
    //   });
    // let activities = realm.objects('IKeusDevice')
    // console.log(Array.from(activities).length)
    realm.close();
    client.close();


})();