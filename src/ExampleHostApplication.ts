import {
  EXTENSION_POINT_1,
  type ExtensionPoint1,
} from "@flowscripter/example-plugin-api";
import {
  DefaultPluginManager,
  type ExtensionInfo,
  UrlListPluginRepository,
} from "@flowscripter/dynamic-plugin-framework";
import * as log from "@std/log";

/**
 * Searches for an extension, instantiates it and invokes it.
 */
export async function exampleHostApplication(): Promise<void> {
  const pluginRepository = new UrlListPluginRepository(
    new Set(["https://deno.land/x/flowscripter_example_plugin@v1.0.3/mod.ts"]),
  );

  const pluginManager = new DefaultPluginManager([pluginRepository]);

  log.info(`Registering extensions for ${EXTENSION_POINT_1} extension point`);

  await pluginManager.registerExtensions(EXTENSION_POINT_1);

  log.info("Registered extensions:");

  const extensionInfos = await pluginManager.getRegisteredExtensions(
    EXTENSION_POINT_1,
  );

  extensionInfos.forEach((extensionInfo: ExtensionInfo) => {
    let extensionInfoString =
      `extensionHandle: ${extensionInfo.extensionHandle}\n`;

    if (extensionInfo.extensionData) {
      extensionInfoString += `extensionData:\n`;
      for (const entry of extensionInfo.extensionData.entries()) {
        extensionInfoString += `\t${entry[0]} => ${entry[1]}\n`;
      }
    }
    if (extensionInfo.pluginData) {
      extensionInfoString += `pluginData:\n`;
      for (const entry of extensionInfo.pluginData.entries()) {
        extensionInfoString += `\t${entry[0]} => ${entry[1]}\n`;
      }
    }

    log.info(extensionInfoString);
  });

  if (extensionInfos.length > 0) {
    log.info("Instantiating first extension");

    const extension = await pluginManager.instantiate(
      extensionInfos[0].extensionHandle,
      new Map([[
        "host_foo",
        "host_bar",
      ]]),
    ) as ExtensionPoint1;

    log.info("Invoking extension");

    extension.sayHello();
  }
}
