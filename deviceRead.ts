let Realm2 = require('realm');
import { IDaliColorTunableDriverStateSchema, IDaliColorTunableDriverPropertiesSchema, IDaliColorTunableDriverGroupPropertiesSchema } from "./device-categories/dali-color-tunable-driver"
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
import { IKeusDeviceSchema, deviceStateSchema, devicePropertiesCollectionSchema, IKeusDeviceSyncInfoSchema, syncRequestParamsSchema } from './deviceSchema'; // Import the exported schemas

(async () => {
  // Measure execution time
  console.time('Execution time');

  // Start memory usage
  const startMemoryUsage = process.memoryUsage().heapUsed; // Record start time

  const realm = new Realm2({
    schema: [
      IKeusDeviceSchema, deviceStateSchema, devicePropertiesCollectionSchema, IKeusDeviceSyncInfoSchema, syncRequestParamsSchema,
      IDaliColorTunableDriverStateSchema, IDaliColorTunableDriverPropertiesSchema, IDaliColorTunableDriverGroupPropertiesSchema,
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

  // ... Rest of your code
  let devices = realm.objects('IKeusDevice')
  //const results = realm.objects('IKeusDevice').filtered('activityIdentifier != null');

  const endMemoryUsage = process.memoryUsage().heapUsed;
  const memoryConsumed = (endMemoryUsage - startMemoryUsage) / (1024 * 1024); // in kilobytes

  console.log('Memory consumed:', memoryConsumed.toFixed(2) + ' mb');

  // End execution time
  console.timeEnd('Execution time');
  //console.log(JSON.stringify(Array.from(devices)))
  console.log(Array.from(devices).length);
  realm.close();
})();
