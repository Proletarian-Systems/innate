"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldNullableRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FieldWhereInput_1 = require("../inputs/FieldWhereInput");
let FieldNullableRelationFilter = class FieldNullableRelationFilter {
    is;
    isNot;
};
exports.FieldNullableRelationFilter = FieldNullableRelationFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldWhereInput_1.FieldWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldWhereInput_1.FieldWhereInput)
], FieldNullableRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldWhereInput_1.FieldWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldWhereInput_1.FieldWhereInput)
], FieldNullableRelationFilter.prototype, "isNot", void 0);
exports.FieldNullableRelationFilter = FieldNullableRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("FieldNullableRelationFilter", {})
], FieldNullableRelationFilter);
