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
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItmObjectMethod.prototype, "parameters", {
        get: function () {
            return this._parameters;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItmObjectMethod.prototype, "methods", {
        get: function () {
            return this._methods;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItmObjectMethod.prototype, "action", {
        set: function (action) {
            this._action = action;
        },
        enumerable: true,
        configurable: true
    });
    ItmObjectMethod.prototype.toString = function () {
        var obj = {
            "parameters": this._parameters.toString(),
            "methods": this._methods.toString()
        };
        return this._name + JSON.stringify(obj);
    };
    return ItmObjectMethod;
}());
///<reference path='./itmobjectmethod.ts'/>
var ItmObjectMethods = /** @class */ (function () {
    function ItmObjectMethods() {
        this._methods = {};
        this._methods = {};
    }
    ItmObjectMethods.prototype.set = function (method) {
        this._methods[method.name] = method;
        return method;
    };
    ItmObjectMethods.prototype.get = function (method) {
        return this._methods[method];
    };
    ItmObjectMethods.prototype.exist = function (name) {
        if (name == undefined)
            return false;
        else
            return (name in this._methods);
    };
    ItmObjectMethods.prototype.toString = function () {
        var resultArray = [];
        var methodkeys = Object.keys(this._methods);
        var t = this;
        methodkeys.forEach(function (key) {
            resultArray.push(t.get(key).toString());
        });
        return resultArray.join(",");
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
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItmObjectProperty.prototype, "value", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            if (this.validate(value))
                this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItmObjectProperty.prototype, "validator", {
        get: function () {
            return this._validator;
        },
        set: function (validator) {
            this._validator = validator;
        },
        enumerable: true,
        configurable: true
    });
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
    ItmObjectProperty.prototype.toString = function () {
        var obj = {
            "validator": this.validator
        };
        return this._name + JSON.stringify(obj);
    };
    return ItmObjectProperty;
}());
///<reference path='./itmobjectproperty.ts'/>
var ItmObjectProperties = /** @class */ (function () {
    function ItmObjectProperties() {
        this._properties = {};
        this._properties = {};
    }
    ItmObjectProperties.prototype.set = function (property) {
        this._properties[property.name] = property;
        return property;
    };
    ItmObjectProperties.prototype.get = function (property) {
        return this._properties[property];
    };
    ItmObjectProperties.prototype.exist = function (name) {
        if (name == undefined)
            return false;
        else
            return (name in this._properties);
    };
    ItmObjectProperties.prototype.getValue = function (name) {
        if (this.exist(name)) {
            return this.get(name).value;
        }
        else {
            return "";
        }
    };
    ItmObjectProperties.prototype.setValue = function (name, value) {
        if (this.exist(name)) {
            this.get(name).value = value;
        }
        else {
            this.set(new ItmObjectProperty(name, value));
        }
        return this.getValue(name);
    };
    ItmObjectProperties.prototype.toString = function () {
        var resultArray = [];
        var propertykeys = Object.keys(this._properties);
        var t = this;
        propertykeys.forEach(function (key) {
            resultArray.push(t.get(key).toString());
        });
        return resultArray.join(",");
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
        this._properties.set(new ItmObjectProperty('_name', name));
        this._properties.set(new ItmObjectProperty('_className', 'itmobject'));
        this._properties.set(new ItmObjectProperty('_displayname', name));
        this._properties.set(new ItmObjectProperty('_description', ''));
        this._properties.set(new ItmObjectProperty('_status', 'ok'));
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
///<reference path='./class/itmobject.ts'/>
///<reference path='./class/test-itmobject.ts'/>
var obj = new ItmObject('test');
var testobj = new TestItmObject('test123');
obj.instances.set(testobj);
var method = new ItmObjectMethod('stop');
var methodA = new ItmObjectMethod('stopA');
var methodB = new ItmObjectMethod('stopB');
method.methods.set(methodA);
method.methods.set(methodB);
obj.methods.set(method);
//# sourceMappingURL=itmobjects.js.map