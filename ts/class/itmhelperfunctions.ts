// generic helper functions
function isFunction(x:any)        { return typeof x == 'function';	}
function isObject(x:any)          { return typeof x == 'object'; }
function isDefined(x:any)         { return typeof x !== 'undefined'; }
function notDefined(x:any)        { return typeof x == 'undefined';} ;
function isString(x:any)          { return typeof x === 'string'; }
function isArray(x:any)           { return Array.isArray(x) }
function hasJQueryResults(x:any)  { return x[0]; }

/**
 * Parse safely JSON data, if not valid return empty object
 * @param json - JSON data
 * @return {} - object
 */
function jsonParse(str:string) {
   var result={};
   try {
      result=JSON.parse(str.trim());
   }
   catch(exception) {
      result={}
   }
   return result;
}

/**
 * Return all ItmObjectFields
 */
function ALL_ITMOBJECT_FIELDS() {
   return [
      "className",   // get instance classname
      "status",      // get instance status
      "name",        // get instance name
      "displayName", // get instance displayname
      "description", // get instance description
      "instances",   // get instances
      "methods",     // get instance methods
      "properties"   // get instance properties
   ];
}

/**
 * Return all ItmObjectFields to be refreshed
 */
function REFRESH_ITMOBJECT_FIELDS() {
   return [
   //"instances",   // get instances
   "className",   // get instance classname
   "status",      // get instance status
   "methods"      // get instance methods
   ];
}

/**
 * Return all Instance ItmObjectFields
 */
function INSTANCE_ITMOBJECT_FIELDS() {
   return [
   "className",   // get instance classname
   "status",      // get instance status
   "name",        // get instance name
   "displayName", // get instance displayname
   "methods"      // get instance methods
   ];
}

interface String {
   format(...replacements: string[]): string;
}

if (!String.prototype.format) {
 String.prototype.format = function() {
   var args = arguments;
   return this.replace(/{(\d+)}/g, function(match, number) { 
     return typeof args[number] != 'undefined'
       ? args[number]
       : match
     ;
   });
 };
}

function uniqueID(addText:string='') {
   return Date.now().toString(36)+Math.random().toString(36);
}



