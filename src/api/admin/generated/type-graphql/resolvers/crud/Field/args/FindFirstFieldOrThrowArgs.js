"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstFieldOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FieldOrderByWithRelationInput_1 = require("../../../inputs/FieldOrderByWithRelationInput");
const FieldWhereInput_1 = require("../../../inputs/FieldWhereInput");
const FieldWhereUniqueInput_1 = require("../../../inputs/FieldWhereUniqueInput");
const FieldScalarFieldEnum_1 = require("../../../../enums/FieldScalarFieldEnum");
let FindFirstFieldOrThrowArgs = class FindFirstFieldOrThrowArgs {
    where;
    orderBy;
    cursor;
    take;
    skip;
    distinct;
};
exports.FindFirstFieldOrThrowArgs = FindFirstFieldOrThrowArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldWhereInput_1.FieldWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldWhereInput_1.FieldWhereInput)
], FindFirstFieldOrThrowArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FieldOrderByWithRelationInput_1.FieldOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstFieldOrThrowArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldWhereUniqueInput_1.FieldWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldWhereUniqueInput_1.FieldWhereUniqueInput)
], FindFirstFieldOrThrowArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstFieldOrThrowArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstFieldOrThrowArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FieldScalarFieldEnum_1.FieldScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstFieldOrThrowArgs.prototype, "distinct", void 0);
exports.FindFirstFieldOrThrowArgs = FindFirstFieldOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstFieldOrThrowArgs);