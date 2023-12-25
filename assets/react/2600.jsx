"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const Svg2600 = (props) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" width="1em" height="1em" {...props}>
    <path fill="#FFAC33" d="M16 2s0-2 2-2 2 2 2 2v2s0 2-2 2-2-2-2-2zm18 14s2 0 2 2-2 2-2 2h-2s-2 0-2-2 2-2 2-2zM4 16s2 0 2 2-2 2-2 2H2s-2 0-2-2 2-2 2-2zm5.121-8.707s1.414 1.414 0 2.828-2.828 0-2.828 0L4.878 8.708s-1.414-1.414 0-2.829c1.415-1.414 2.829 0 2.829 0zm21 21s1.414 1.414 0 2.828-2.828 0-2.828 0l-1.414-1.414s-1.414-1.414 0-2.828 2.828 0 2.828 0zm-.413-18.172s-1.414 1.414-2.828 0 0-2.828 0-2.828l1.414-1.414s1.414-1.414 2.828 0 0 2.828 0 2.828zm-21 21s-1.414 1.414-2.828 0 0-2.828 0-2.828l1.414-1.414s1.414-1.414 2.828 0 0 2.828 0 2.828zM16 32s0-2 2-2 2 2 2 2v2s0 2-2 2-2-2-2-2z"/>
    <circle cx={18} cy={18} r={10} fill="#FFAC33"/>
  </svg>);
exports.default = Svg2600;
