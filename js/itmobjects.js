"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ItmObjectMethod = /** @class */ (function () {
    function ItmObjectMethod(name) {
        this._name = name;
        this._parameters = new ItmObjectProperties;
        this._methods = new ItmObjectMethods;
        this._action = function () { };
    }
    Object.defineProperty(ItmObjectMethod.prototype, "name", {
        /**
         * get ITMObject method name
         * @return name
         */
        get: function () {
            return this._name;
        },
        /**
         * set ITMObject method name
         * @param name - name of method
         */
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItmObjectMethod.prototype, "parameters", {
        /**
         * get ITMObject method parameters
         * @return ItmObjectProperties
         */
        get: function () {
            return this._parameters;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItmObjectMethod.prototype, "methods", {
        /**
         * get ITMObject method submethods
         * @return ItmObjectMethods
         */
        get: function () {
            return this._methods;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItmObjectMethod.prototype, "action", {
        /**
         * set ITMObject method action
         * @param action - function to be executed
         */
        set: function (action) {
            this._action = action;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * get ITMObject method data
     * @return object - method data
     * {
          "parameters":p.data(),
          "methods":m.data()
       }
     */
    ItmObjectMethod.prototype.data = function () {
        var n = this.name;
        var p = this._parameters;
        var m = this._methods;
        return {
            "parameters": p.data(),
            "methods": m.data()
        };
    };
    return ItmObjectMethod;
}());
///<reference path='./itmobjectmethod.ts'/>
var ItmObjectMethods = /** @class */ (function () {
    function ItmObjectMethods() {
        this._methods = {};
        this._methods = {};
    }
    /**
     * set ITMObject method
     * @param method - ItmObjectMethod
     * @return ItmObjectMethod
     */
    ItmObjectMethods.prototype.set = function (method) {
        this._methods[method.name] = method;
        return method;
    };
    /**
     * get ITMObject method
     * @param method - name of method
     * @return ItmObjectMethod
     */
    ItmObjectMethods.prototype.get = function (method) {
        return this._methods[method];
    };
    /**
     * does ITMObject method exist?
     * @param name - name of method
     * @return true/false
     */
    ItmObjectMethods.prototype.exist = function (name) {
        if (name == undefined)
            return false;
        else
            return (name in this._methods);
    };
    /**
    * get ITMObject methods
    * @return object - methods
    * {
         <method>:{
            "parameters":p.data(),
            "methods":m.data()
         },
         <method2>:{...}
      }
    */
    ItmObjectMethods.prototype.data = function () {
        var result = {};
        var methodkeys = Object.keys(this._methods);
        var t = this;
        methodkeys.forEach(function (key) {
            result[key] = t.get(key).data();
        });
        return result;
    };
    /**
     * get ITMObject methods as JSON string
     * @return json string - methods
     */
    ItmObjectMethods.prototype.toString = function () {
        return JSON.stringify(this.data());
    };
    return ItmObjectMethods;
}());
var ItmObjectProperty = /** @class */ (function () {
    function ItmObjectProperty(name, value, validator) {
        if (validator === void 0) { validator = ''; }
        this._name = name;
        this._value = value;
        this._validator = validator;
    }
    Object.defineProperty(ItmObjectProperty.prototype, "name", {
        /**
         * get ITMObject property name
         * @return property name
         */
        get: function () {
            return this._name;
        },
        /**
         * set ITMObject property name
         * @param name - name of property
         */
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItmObjectProperty.prototype, "value", {
        /**
         * get ITMObject property value
         * @param name - value of property
         */
        get: function () {
            return this._value;
        },
        /**
         * set ITMObject property value, validate before setting
         * @param value - value of property
         */
        set: function (value) {
            if (this.validate(value))
                this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItmObjectProperty.prototype, "validator", {
        /**
         * get ITMObject property validator
         * @return validator - regular expression, if set value must match when set
         */
        get: function () {
            return this._validator;
        },
        /**
         * set ITMObject property validator
         * @param validator - regular expression, if set value must match when set
         */
        set: function (validator) {
            this._validator = validator;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * validate value
     * @return true/false - if valid value, that can be set
     */
    ItmObjectProperty.prototype.validate = function (value) {
        if (this._validator !== "") { // if regexpr match set
            if (value.search(this._validator) !== -1) { // does match
                return true;
            }
            else {
                return false;
            }
        }
        else { // no regexpr match set, accept value
            return true;
        }
    };
    /**
    * get ITMObject property data
    * @return property data as JSONstring
    * {
            "validator":p.data()
         }
    */
    ItmObjectProperty.prototype.data = function () {
        var validator = this.validator;
        var obj = {
            "validator": validator
        };
        return obj;
    };
    return ItmObjectProperty;
}());
///<reference path='./itmobjectproperty.ts'/>
var ItmObjectProperties = /** @class */ (function () {
    function ItmObjectProperties() {
        this._properties = {};
        this._properties = {};
    }
    /**
     * set ITMObject property
     * @param property - ItmObjectProperty
     * @return ItmObjectProperty
     */
    ItmObjectProperties.prototype.set = function (property) {
        this._properties[property.name] = property;
        return property;
    };
    /**
     * get ITMObject property
     * @param name - name of property
     * @return ItmObjectProperty
     */
    ItmObjectProperties.prototype.get = function (name) {
        return this._properties[name];
    };
    /**
     * does ITMObject property exist?
     * @param name - name of property
     * @return true/false
     */
    ItmObjectProperties.prototype.exist = function (name) {
        if (name == undefined)
            return false;
        else
            return (name in this._properties);
    };
    /**
     * get ITMObject property value
     * @param name - name of property
     * @return string value or "" if not exist
     */
    ItmObjectProperties.prototype.getValue = function (name) {
        if (this.exist(name)) {
            return this.get(name).value;
        }
        else {
            return "";
        }
    };
    /**
     * set ITMObject property value, add if not exist
     * @param name - name of property
     * @param value - value of property
     * @return string value of property
     */
    ItmObjectProperties.prototype.addValue = function (name, value) {
        if (this.exist(name)) {
            this.get(name).value = value;
        }
        else {
            this.set(new ItmObjectProperty(name, value));
        }
        return this.getValue(name);
    };
    /**
     * set ITMObject property value, only! if exist
     * @param name - name of property
     * @param value - value of property
     * @return string value of property
     */
    ItmObjectProperties.prototype.setValue = function (name, value) {
        if (this.exist(name)) {
            this.get(name).value = value;
        }
        return this.getValue(name);
    };
    /**
     * get ITMObject property data
     * @return property data
     * * {
          <property>:{
             "validator":p.data(),
          },
          <property2>:{...}
       }
   
     */
    ItmObjectProperties.prototype.data = function () {
        var result = {};
        var propertykeys = Object.keys(this._properties);
        var t = this;
        propertykeys.forEach(function (key) {
            result[key] = t.get(key).data();
        });
        return result;
    };
    /**
     * get ITMObject property data
     * @return property data as JSONstring
     * * {
          <property>:{
             "validator":p.data(),
          },
          <property2>:{...}
       }
   
     */
    ItmObjectProperties.prototype.toString = function () {
        return JSON.stringify(this.data());
    };
    return ItmObjectProperties;
}());
///<reference path='./itmobject.ts'/>
var ItmObjectInstances = /** @class */ (function () {
    function ItmObjectInstances() {
        this._instances = {};
        this._instances = {};
    }
    ItmObjectInstances.prototype.set = function (itmobject) {
        this._instances[itmobject.getName()] = itmobject;
        return itmobject;
    };
    ItmObjectInstances.prototype.get = function (name) {
        if (name == undefined)
            return undefined;
        else
            return (this._instances[name]);
    };
    ItmObjectInstances.prototype.exist = function (name) {
        if (name == undefined)
            return false;
        else
            return (name in this._instances);
    };
    ItmObjectInstances.prototype.toString = function () {
        return Object.keys(this._instances).join(",");
    };
    return ItmObjectInstances;
}());
///<reference path='./itmobjectmethods.ts'/>
///<reference path='./itmobjectproperties.ts'/>
///<reference path='./itmobjectinstances.ts'/>
var ItmObject = /** @class */ (function () {
    function ItmObject(name) {
        this._methods = new ItmObjectMethods();
        this._properties = new ItmObjectProperties();
        this._instances = new ItmObjectInstances();
        this.setPropertyValue('_name', name);
        this.setPropertyValue('_className', 'itmobject');
        this.setPropertyValue('_displayname', name);
        this.setPropertyValue('_description', '');
        this.setPropertyValue('_status', 'ok');
    }
    Object.defineProperty(ItmObject.prototype, "instances", {
        get: function () {
            return this._instances;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItmObject.prototype, "properties", {
        get: function () {
            return this._properties;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItmObject.prototype, "methods", {
        get: function () {
            return this._methods;
        },
        enumerable: true,
        configurable: true
    });
    // LOCAL ITMOBJECT METHODS
    /**
     * Get ITMObject property value
     * @param property
     */
    ItmObject.prototype.getPropertyValue = function (property) {
        return this._properties.getValue(property);
    };
    /**
     * Set ITMObject property value
     * @param property - property to set
     * @param value    - value to set
     */
    ItmObject.prototype.setPropertyValue = function (property, value) {
        return this._properties.setValue(property, value);
    };
    /**
     * Get ITMObject name
     */
    ItmObject.prototype.getName = function () {
        return this.getPropertyValue('_name');
    };
    /**
     * Get ITMObject classname
     */
    ItmObject.prototype.getClassName = function () {
        return this.getPropertyValue('_classname');
    };
    /**
     * Get ITMObject displayname
     */
    ItmObject.prototype.getDisplayName = function () {
        return this.getPropertyValue('_displayname');
    };
    /**
     * Get ITMObject status
     */
    ItmObject.prototype.getStatus = function () {
        return this.getPropertyValue('_status');
    };
    /**
     * Get ITMObject description
     */
    ItmObject.prototype.getDescription = function () {
        return this.getPropertyValue('_description');
    };
    /**
     * Get ITMObject properties
     */
    ItmObject.prototype.getProperties = function () {
        return this._properties.toString();
    };
    /**
     * Get ITMObject methods, returns comma-separated method list
     */
    ItmObject.prototype.getMethods = function () {
        return this._methods.toString();
    };
    /**
     * Do ITMObject method, returns status after method execution
     * @param method
     */
    ItmObject.prototype.doMethod = function (method) {
        return "doMethod: result=[" + method + "]";
    };
    // INSTANCE REFERENCED METHODS
    /**
     * Get ITMObject instances, returns comma-separated instance list
     * @param instance - select instance
     */
    ItmObject.prototype.getInstances = function (instance) {
        if (instance === void 0) { instance = ""; }
        if (instance == "")
            return this._instances.toString();
        var instanceArray = instance.split('/');
        var findInstance = instanceArray.shift();
        var obj;
        obj = this._instances.get(findInstance);
        if (obj) {
            var nextInstance = instanceArray.join('/');
            return obj.getInstances(nextInstance);
        }
        return "";
    };
    /**
     * Get ITMObject selected instance property value
     * @param instance - instance select
     * @param property - property select
     */
    ItmObject.prototype.getInstancePropertyValue = function (instance, property) {
        if (instance == "")
            return this.getPropertyValue(property);
        var instanceArray = instance.split('/');
        var findInstance = instanceArray.shift();
        var obj;
        obj = this._instances.get(findInstance);
        if (obj) {
            var nextInstance = instanceArray.join('/');
            return obj.getInstancePropertyValue(nextInstance, property);
        }
        return "";
    };
    /**
     * Set ITMObject selected instance property value
     * @param instance - instance select
     * @param property - property select
     * @param value    - set value
     */
    ItmObject.prototype.setInstancePropertyValue = function (instance, property, value) {
        if (instance == "")
            return this.setPropertyValue(property, value);
        var instanceArray = instance.split('/');
        var findInstance = instanceArray.shift();
        var obj;
        obj = this._instances.get(findInstance);
        if (obj) {
            var nextInstance = instanceArray.join('/');
            return obj.setInstancePropertyValue(nextInstance, property, value);
        }
        return "";
    };
    /**
     * Get ITMObject selected instance properties
     * @param instance - instance select
     */
    ItmObject.prototype.getInstanceProperties = function (instance) {
        if (instance == "")
            return this.getProperties();
        var instanceArray = instance.split('/');
        var findInstance = instanceArray.shift();
        var obj;
        obj = this._instances.get(findInstance);
        if (obj) {
            var nextInstance = instanceArray.join('/');
            return obj.getInstanceProperties(nextInstance);
        }
        return "";
    };
    /**
     * Get ITMObject selected instance methods
     * @param instance - instance select
     */
    ItmObject.prototype.getInstanceMethods = function (instance) {
        if (instance == "")
            return this.getMethods();
        var instanceArray = instance.split('/');
        var findInstance = instanceArray.shift();
        var obj;
        obj = this._instances.get(findInstance);
        if (obj) {
            var nextInstance = instanceArray.join('/');
            return obj.getInstanceMethods(nextInstance);
        }
        return "";
    };
    /**
     * Do ITMObject method, returns result of method
     * @param instance - instance select
     * @param method - method select
     */
    ItmObject.prototype.doInstanceMethod = function (instance, method) {
        if (instance == "")
            return this.doMethod(method);
        var instanceArray = instance.split('/');
        var findInstance = instanceArray.shift();
        var obj;
        obj = this._instances.get(findInstance);
        if (obj) {
            var nextInstance = instanceArray.join('/');
            return obj.doInstanceMethod(nextInstance, method);
        }
        return "";
    };
    /**
     * Get ITMObject selected instance name
     * @param instance - instance select
     */
    ItmObject.prototype.getInstanceName = function (instance) {
        return this.getInstancePropertyValue(instance, '_name');
    };
    /**
     * Get ITMObject selected instance classname
     * @param instance - instance select
     */
    ItmObject.prototype.getInstanceClassName = function (instance) {
        return this.getInstancePropertyValue(instance, '_classname');
    };
    /**
     * Get ITMObject selected instance displayname
     * @param instance - instance select
     */
    ItmObject.prototype.getInstanceDisplayName = function (instance) {
        return this.getInstancePropertyValue(instance, '_displayname');
    };
    /**
     * Get ITMObject selected instance status
     * @param instance - instance select
     */
    ItmObject.prototype.getInstanceStatus = function (instance) {
        return this.getInstancePropertyValue(instance, '_status');
    };
    /**
     * Get ITMObject selected instance description
     * @param instance - instance select
     */
    ItmObject.prototype.getInstanceDescription = function (instance) {
        return this.getInstancePropertyValue(instance, '_description');
    };
    return ItmObject;
}());
// generic helper functions
function isFunction(x) { return typeof x == 'function'; }
function isObject(x) { return typeof x == 'object'; }
function isDefined(x) { return typeof x !== 'undefined'; }
function notDefined(x) { return typeof x == 'undefined'; }
;
function isString(x) { return typeof x === 'string'; }
function isArray(x) { return Array.isArray(x); }
function hasJQueryResults(x) { return x[0]; }
/**
 * Parse safely JSON data, if not valid return empty object
 * @param json - JSON data
 * @return {} - object
 */
function jsonParse(str) {
    var result = {};
    try {
        result = JSON.parse(str.trim());
    }
    catch (exception) {
        result = {};
    }
    return result;
}
/**
 * Return all ItmObjectFields
 */
function ALL_ITMOBJECT_FIELDS() {
    return [
        "className",
        "status",
        "name",
        "displayName",
        "description",
        "instances",
        "methods",
        "properties" // get instance properties
    ];
}
/**
 * Return all ItmObjectFields to be refreshed
 */
function REFRESH_ITMOBJECT_FIELDS() {
    return [
        //"instances",   // get instances
        "className",
        "status",
        "methods" // get instance methods
    ];
}
/**
 * Return all Instance ItmObjectFields
 */
function INSTANCE_ITMOBJECT_FIELDS() {
    return [
        "className",
        "status",
        "name",
        "displayName",
        "methods" // get instance methods
    ];
}
if (!String.prototype.format) {
    String.prototype.format = function () {
        var args = arguments;
        return this.replace(/{(\d+)}/g, function (match, number) {
            return typeof args[number] != 'undefined'
                ? args[number]
                : match;
        });
    };
}
///<reference path='./itmobject.ts'/>
///<reference path='./itmhelperfunctions.ts'/>
// https://stackoverflow.com/questions/14742194/declaring-an-htmlelement-typescript
var ItmView = /** @class */ (function () {
    /** construct an ItmView
     */
    function ItmView(id) {
        if (id === void 0) { id = ""; }
        this._debug = false;
        this._drawID = true;
        this._id = "";
        this._viewitems = [];
        this._timerToken = 0;
        this._autoRefreshInterval = 0;
        if (id == "") {
            this._id = this.uniqueID();
        }
        else {
            this._id = id;
        }
        this._parent = this;
        this._viewitems = [];
    }
    Object.defineProperty(ItmView.prototype, "debug", {
        get: function () {
            return this._debug;
        },
        set: function (enable) {
            this._debug = enable;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItmView.prototype, "element", {
        get: function () {
            return document.getElementById(this._id);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItmView.prototype, "drawID", {
        get: function () {
            return this._drawID;
        },
        set: function (enable) {
            this._drawID = enable;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItmView.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (newid) {
            this._id = newid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItmView.prototype, "parent", {
        get: function () {
            return this._parent;
        },
        set: function (p) {
            this._parent = p;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItmView.prototype, "viewItems", {
        get: function () {
            return this._viewitems;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItmView.prototype, "autoRefreshMs", {
        set: function (intervalMs) {
            var _this = this;
            this._autoRefreshInterval = intervalMs;
            if (intervalMs == 0) {
                clearTimeout(this._timerToken);
            }
            else {
                this._timerToken = setInterval(function () { return _this.autoRefresh(); }, intervalMs);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Generate Unique ID
     * @param addText - add additional text to unique id
     * @return uniqueID - like 'jgl9tsrq0.jttxkhan9s8'
     */
    ItmView.prototype.uniqueID = function (addText) {
        if (addText === void 0) { addText = ''; }
        return Date.now().toString(36) + Math.random().toString(36);
    };
    ItmView.prototype.addView = function (view) {
        view.parent = this;
        this._viewitems.push(view);
        return view;
    };
    ItmView.prototype.getViewIndex = function (id) {
        for (var i = 0; i++; i < this._viewitems.length) {
            var view = this._viewitems[i];
            if (view.id == id)
                return i;
        }
        return -1;
    };
    ItmView.prototype.removeViewId = function (id) {
        var idx;
        idx = this.getViewIndex(id);
        if (idx !== -1) {
            var view = this._viewitems[idx];
            view.parent = view;
            delete this._viewitems[idx];
            return view;
        }
        return null;
    };
    ItmView.prototype.removeViews = function () {
        while (this._viewitems.length > 0) {
            var view = void 0;
            view = this._viewitems[0];
            this.removeViewId(view.id);
        }
    };
    /**
     * @param s - debugging string
     * @return - returns string is debugging enabled
     */
    ItmView.prototype.drawDebug = function (s) {
        var rs = '';
        if (this.debug === true) {
            var ds = void 0;
            ds = "[{0}]".format(s);
            rs += ds;
        }
        return rs;
    };
    /**
     * draw begin of view
     * @param s - draw string stream
     * @return - returns begin string stream
     */
    ItmView.prototype.drawBegin = function () {
        var s = '';
        if (this.drawID) {
            s += "<span id=\"{0}\">".format(this.id);
        }
        s += this.drawDebug('drawBegin');
        return s;
    };
    /**
     * draw end of view
     * @param s - draw string stream
     * @return - returns begin string stream
     */
    ItmView.prototype.drawEnd = function () {
        var s = '';
        s += this.drawDebug('drawEnd');
        if (this.drawID) {
            s += "</span>";
        }
        return s;
    };
    ItmView.prototype.drawViewItemsBegin = function () {
        var s = '';
        return s;
    };
    ItmView.prototype.drawViewItemsEnd = function () {
        var s = '';
        return s;
    };
    ItmView.prototype.drawViewItems = function () {
        var s = '';
        var thisView = this;
        s += this.drawDebug('drawViewItems');
        s += this.drawViewItemsBegin();
        this._viewitems.forEach(function (view) {
            s += thisView.drawDebug('drawChild id=[{0}]'.format(view.id));
            s += view.draw();
        });
        s += this.drawViewItemsEnd();
        return s;
    };
    /**
     * draw main body of view
     * @param s - draw string stream
     * @return - returns begin string stream
     */
    ItmView.prototype.drawBody = function () {
        var s = '';
        s += this.drawDebug('drawBody');
        s += this.drawViewItems();
        return s;
    };
    /**
     * draw entire view
     * @param s - draw string stream
     * @return - returns begin string stream
     */
    ItmView.prototype.draw = function () {
        var s = '';
        s += this.drawBegin();
        s += this.drawBody();
        s += this.drawEnd();
        return s;
    };
    /**
     * rebuild view, after this redraw may happen
     * @return - true/false if redraw is needed
     */
    ItmView.prototype.rebuild = function () {
        // do nothing
        return true;
    };
    /**
     * redraw entire view, rebuild view before redrawing
     */
    ItmView.prototype.redraw = function () {
        if (this.rebuild()) {
            if (this.element) {
                this.element.outerHTML = this.draw();
            }
        }
    };
    ItmView.prototype.autoRefresh = function () {
        this.redraw();
    };
    return ItmView;
}());
///<reference path='./itmview.ts'/>
// https://stackoverflow.com/questions/14742194/declaring-an-htmlelement-typescript
var ItmViewBreadCrumb = /** @class */ (function (_super) {
    __extends(ItmViewBreadCrumb, _super);
    /** construct an ItmView from an ItmObject
     * @param itmObject - from which itmObject
     * @param selectedInstance - from which instance
     */
    function ItmViewBreadCrumb(name, target) {
        var _this = _super.call(this) || this;
        _this._name = name;
        _this._target = target;
        _this._active = true;
        _this.drawID = false;
        return _this;
    }
    Object.defineProperty(ItmViewBreadCrumb.prototype, "name", {
        /**
         * Get name for this breadcrumb
         */
        get: function () {
            return this._name;
        },
        /**
         * Set name for this breadcrumb
         * @param newname:string - new name for breadcrumb
         */
        set: function (newname) {
            this._name = newname;
        },
        enumerable: true,
        configurable: true
    });
    /* <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item"><a href="#">Library</a></li>
    <li class="breadcrumb-item active" aria-current="page">Data</li>
    */
    ItmViewBreadCrumb.prototype.drawBody = function () {
        var s = '';
        s += "<li class=\"breadcrumb-item\"><a href=\"{1}\">{0}</a></li>\n   ".format(this._name, this._target);
        return s;
    };
    return ItmViewBreadCrumb;
}(ItmView));
///<reference path='./itmview.ts'/>
///<reference path='./itmviewbreadcrumb.ts'/>
// https://stackoverflow.com/questions/14742194/declaring-an-htmlelement-typescript
var ItmViewBreadCrumbs = /** @class */ (function (_super) {
    __extends(ItmViewBreadCrumbs, _super);
    /** construct an ItmView from an ItmObject
     * @param itmObject - from which itmObject
     * @param selectedInstance - from which instance
     */
    function ItmViewBreadCrumbs() {
        var _this = _super.call(this) || this;
        _this._breadCrumbs = [];
        _this._breadCrumbs = [];
        return _this;
    }
    Object.defineProperty(ItmViewBreadCrumbs.prototype, "breadCrumbs", {
        get: function () {
            return this._breadCrumbs;
        },
        enumerable: true,
        configurable: true
    });
    ItmViewBreadCrumbs.prototype.setBreadCrumbs = function (crumbs) {
        this._breadCrumbs = crumbs;
        this.rebuild();
    };
    ItmViewBreadCrumbs.prototype.drawBegin = function () {
        var s = '';
        s += _super.prototype.drawBegin.call(this);
        s += "<nav aria-label=\"breadcrumb\">\n      ";
        return s;
    };
    ItmViewBreadCrumbs.prototype.drawEnd = function () {
        var s = '';
        s += "</nav>\n      ";
        s += _super.prototype.drawEnd.call(this);
        return s;
    };
    ItmViewBreadCrumbs.prototype.drawViewItemsBegin = function () {
        var s = '';
        s += "<ol class=\"breadcrumb\">\n      ";
        return s;
    };
    ItmViewBreadCrumbs.prototype.drawViewItemsEnd = function () {
        var s = '';
        s += "</ol>\n      ";
        return s;
    };
    ItmViewBreadCrumbs.prototype.rebuild = function () {
        this.removeViews();
        var thisView = this;
        var target = "";
        // add home breadcrumb
        thisView.addView(
        // add breadcrumb and target
        new ItmViewBreadCrumb("Home", target));
        this.breadCrumbs.forEach(function (name) {
            target = target + name;
            thisView.addView(
            // add breadcrumb and target
            new ItmViewBreadCrumb(name, target));
            target = target + "/";
        });
        return true;
    };
    return ItmViewBreadCrumbs;
}(ItmView));
///<reference path='./itmview.ts'/>
// https://stackoverflow.com/questions/14742194/declaring-an-htmlelement-typescript
var ItmViewTestAutoRefresh = /** @class */ (function (_super) {
    __extends(ItmViewTestAutoRefresh, _super);
    /** construct an ItmView from an ItmObject
     * @param itmObject - from which itmObject
     * @param selectedInstance - from which instance
     */
    function ItmViewTestAutoRefresh() {
        var _this = _super.call(this) || this;
        _this.autoRefreshMs = 1000;
        return _this;
    }
    ItmViewTestAutoRefresh.prototype.drawBody = function () {
        var s = '';
        s += new Date().toUTCString();
        s += _super.prototype.drawBody.call(this);
        return s;
    };
    return ItmViewTestAutoRefresh;
}(ItmView));
///<reference path='./class/itmobject.ts'/>
///<reference path='./class/itmview.ts'/>
///<reference path='./class/itmviewbreadcrumbs.ts'/>
///<reference path='./class/itmviewtestautorefresh.ts'/>
// ******************
// MAIN CODE START
//
// Create an ITMObject for test
var obj = new ItmObject('test');
// Create an instance
var testobj = new ItmObject('test123');
obj.instances.set(testobj);
var prop1 = new ItmObjectProperty("HOST", "123");
obj.properties.set(prop1);
var methodA = new ItmObjectMethod('stopA');
var methodB = new ItmObjectMethod('stopB');
var method = new ItmObjectMethod('stop');
method.methods.set(methodA);
method.methods.set(methodB);
obj.methods.set(method);
var method2 = new ItmObjectMethod('start');
method2.parameters.set(prop1);
obj.methods.set(method2);
///<reference path='./itmview.ts'/>
///<reference path='./itmviewbreadcrumbs.ts'/>
// https://stackoverflow.com/questions/14742194/declaring-an-htmlelement-typescript
var ItmViewItmObjectSelector = /** @class */ (function (_super) {
    __extends(ItmViewItmObjectSelector, _super);
    function ItmViewItmObjectSelector() {
        var _this = _super.call(this) || this;
        /** construct an ItmView from an ItmObject
         */
        _this._selectedItmObject = "";
        return _this;
    }
    Object.defineProperty(ItmViewItmObjectSelector.prototype, "selectedItmObject", {
        get: function () {
            return this._selectedItmObject;
        },
        /**
         * select ITMObject and update breadcrumbs
         * @param itmobject:string = '/a/b/c/d/e';
         */
        set: function (itmobject) {
            this._selectedItmObject = itmobject;
            // update breadcrumbs
            var crumbs = [];
            if (itmobject != "") {
                crumbs = itmobject.split('/');
            }
            this.setBreadCrumbs(crumbs);
        },
        enumerable: true,
        configurable: true
    });
    return ItmViewItmObjectSelector;
}(ItmViewBreadCrumbs));
///<reference path='./itmview.ts'/>
///<reference path='./itmviewitmobjectselector.ts'/>
///<reference path='./itmviewtestautorefresh.ts'/>
// https://stackoverflow.com/questions/14742194/declaring-an-htmlelement-typescript
var ItmViewMain = /** @class */ (function (_super) {
    __extends(ItmViewMain, _super);
    /** construct main Itmclient ItmView
     */
    function ItmViewMain() {
        var _this = _super.call(this, "main") || this;
        _this._itmObjectSelector = new ItmViewItmObjectSelector();
        _this._clock = new ItmViewTestAutoRefresh();
        _this.addView(_this._itmObjectSelector);
        _this.addView(_this._clock);
        return _this;
    }
    Object.defineProperty(ItmViewMain.prototype, "itmObjectSelector", {
        get: function () {
            return this._itmObjectSelector;
        },
        enumerable: true,
        configurable: true
    });
    return ItmViewMain;
}(ItmView));
///<reference path='./class/itmviewmain.ts'/>
/* ITMVIEW
 */
var main = new ItmViewMain();
// INIT CODE AFTER DOCUMENT LOAD
window.onload = function () {
    main.itmObjectSelector.selectedItmObject = "a/b/c/d/e/f";
    main.redraw();
};
///<reference path='./itmobject.ts'/>
var TestItmObject = /** @class */ (function (_super) {
    __extends(TestItmObject, _super);
    function TestItmObject(name) {
        var _this = _super.call(this, name) || this;
        _this._properties.setValue('_description', 'blablabka');
        return _this;
    }
    return TestItmObject;
}(ItmObject));
//# sourceMappingURL=itmobjects.js.map