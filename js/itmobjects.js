"use strict";
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
    function ItmObjectProperty(name) {
        this._name = name;
        this._value = "";
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
        return this;
    };
    ItmObjectProperty.prototype.getValue = function (value) {
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
    ItmObjectProperties.prototype.add = function (property) {
        this._properties[property.name()] = property;
        return property;
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
        return (this._instances[name]);
    };
    ItmObjectInstances.prototype.exist = function (name) {
        return (name in this._instances);
    };
    return ItmObjectInstances;
}());
///<reference path='./itmobjectmethods.ts'/>
///<reference path='./itmobjectproperties.ts'/>
///<reference path='./itmobjectinstances.ts'/>
var ItmObject = /** @class */ (function () {
    function ItmObject(name) {
        this._name = name;
        this._classname = "itmobject";
        this._displayname = this._name;
        this._description = "";
        this._methods = new ItmObjectMethods();
        this._properties = new ItmObjectProperties();
        this._instances = new ItmObjectInstances();
        this._properties.set(new ItmObjectProperty('className').setValue('itmobjectclass'));
    }
    ItmObject.prototype.getName = function () {
        return this._name;
    };
    ItmObject.prototype.getInstanceName = function (instance) {
        if (instance == "")
            return this.getName();
        if (instance.slice(-1) != "/")
            instance = instance + "/";
        return "";
    };
    return ItmObject;
}());
///<reference path='./class/itmobject.ts'/>
var obj = new ItmObject('test');
//# sourceMappingURL=itmobjects.js.map