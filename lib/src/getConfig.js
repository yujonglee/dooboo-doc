"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dooboo_doc_config_1 = __importDefault(require("../dooboo-doc.config"));
var getConfig = function () {
    var target = dooboo_doc_config_1.default.target;
    return { path: target };
};
exports.default = getConfig;
