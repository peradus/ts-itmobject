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
    ItmObjectMethod.prototype.name = function () {
        return this._name;
    };
    ItmObjectMethod.prototype.setAction = function (f) {
        this._action = f;
        return this;
    };
    ItmObjectMethod.prototype.parameters = function (p) {
        this._parameters = p;
        return this;
    };
    ItmObjectMethod.prototype.methods = function (m) {
        return this;
    };
    return ItmObjectMethod;
}());
///<reference path='./itmobjectmethod.ts'/>
var ItmObjectMethods = /** @class */ (function () {
    function ItmObjectMethods() {
        this._methods = {};
        this._methods = {};
    }
    ItmObjectMethods.prototype.add = function (method) {
        this._methods[method.name()] = method;
        return method;
    };
    return ItmObjectMethods;
}());
var ItmObjectProperty = /** @class */ (function () {
    function ItmObjectProperty(name, value) {
        this._name = name;
        this._value = value;
        this._validator = "";
    }
    ItmObjectProperty.prototype.save = function () {
        return {
            "name": {
                "value": this._value,
                "validator": this._validator
            }
        };
    };
    ItmObjectProperty.prototype.load = function (o) {
    };
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
     * Set Property value, if regexpr match set- value will be checked and only set if match
     * @param value
     * returns true/false upon succesful set
     */
    ItmObjectProperty.prototype.setValue = function (value) {
        if (this.validate(value)) {
            this._value = value; // set value
        }
        return this._value;
    };
    ItmObjectProperty.prototype.getValue = function () {
        return this._value;
    };
    ItmObjectProperty.prototype.setValidator = function (value) {
        this._validator = value;
        return this;
    };
    ItmObjectProperty.prototype.name = function () {
        return this._name;
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
        this._properties[property.name()] = property;
        return property;
    };
    ItmObjectProperties.prototype.exist = function (name) {
        if (name == undefined)
            return false;
        else
            return (name in this._properties);
    };
    ItmObjectProperties.prototype.get = function (property) {
        return this._properties[property];
    };
    ItmObjectProperties.prototype.getValue = function (property) {
        if (this.exist(property)) {
            return this._properties[property].getValue();
        }
        return "";
    };
    ItmObjectProperties.prototype.setValue = function (property, value) {
        if (this.exist(property)) {
            return this._properties[property].setValue(value);
        }
        else {
            this.set(new ItmObjectProperty(property, value));
            return value;
        }
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
        this._properties.set(new ItmObjectProperty('_status', ''));
    }
    ItmObject.prototype.instances = function () {
        return this._instances;
    };
    // LOCAL ITMOBJECT METHODS
    ItmObject.prototype.getPropertyValue = function (property) {
        return this._properties.getValue(property);
    };
    ItmObject.prototype.setPropertyValue = function (property, value) {
        return this._properties.setValue(property, value);
    };
    ItmObject.prototype.getName = function () {
        return this.getPropertyValue('_name');
    };
    ItmObject.prototype.getClassName = function () {
        return this.getPropertyValue('_classname');
    };
    ItmObject.prototype.getDisplayName = function () {
        return this.getPropertyValue('_displayname');
    };
    ItmObject.prototype.getStatus = function () {
        return this.getPropertyValue('_status');
    };
    // INSTANCE REFERENCED METHODS
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
    ItmObject.prototype.getInstanceName = function (instance) {
        return this.getInstancePropertyValue(instance, '_name');
    };
    ItmObject.prototype.getInstanceClassName = function (instance) {
        return this.getInstancePropertyValue(instance, '_classname');
    };
    ItmObject.prototype.getInstanceDisplayName = function (instance) {
        return this.getInstancePropertyValue(instance, '_displayname');
    };
    ItmObject.prototype.getInstanceStatus = function (instance) {
        return this.getInstancePropertyValue(instance, '_status');
    };
    return ItmObject;
}());
///<reference path='./itmobject.ts'/>
var TestItmObject = /** @class */ (function (_super) {
    __extends(TestItmObject, _super);
    function TestItmObject(name) {
        return _super.call(this, name) || this;
    }
    return TestItmObject;
}(ItmObject));
///<reference path='./class/itmobject.ts'/>
///<reference path='./class/test-itmobject.ts'/>
var obj = new ItmObject('test');
var testobj = new TestItmObject('test123');
obj.instances().set(testobj);
//# sourceMappingURL=itmobjects.js.map