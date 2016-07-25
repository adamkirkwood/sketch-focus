var codeToRun = "\
if(!loadFramework()) return;\
PLUGIN_NAME.loadWindow();\
function loadFramework() {\
    if(NSClassFromString('PLUGIN_NAME') != null) return true;\
    var appSupportPath = NSFileManager.defaultManager().URLsForDirectory_inDomains(NSApplicationSupportDirectory,NSUserDomainMask).firstObject().path();\
    var pluginFolderPath = appSupportPath.stringByAppendingPathComponent('com.bohemiancoding.sketch3/Plugins/PLUGIN_NAME.sketchplugin');\
    var resourcesPath = pluginFolderPath.stringByAppendingPathComponent('Contents/Resources');\
    var mocha = Mocha.sharedRuntime();\
    return mocha.loadFrameworkWithName_inDirectory('PLUGIN_NAME',resourcesPath);\
}";

COScript.app("SKETCH_NAME").delegate().runPluginScript_name(codeToRun, "PLUGIN_NAME");