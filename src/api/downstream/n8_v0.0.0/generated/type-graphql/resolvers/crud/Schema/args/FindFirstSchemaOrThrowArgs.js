"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstSchemaOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SchemaOrderByWithRelationInput_1 = require("../../../inputs/SchemaOrderByWithRelationInput");
const SchemaWhereInput_1 = require("../../../inputs/SchemaWhereInput");
const SchemaWhereUniqueInput_1 = require("../../../inputs/SchemaWhereUniqueInput");
const SchemaScalarFieldEnum_1 = require("../../../../enums/SchemaScalarFieldEnum");
let FindFirstSchemaOrThrowArgs = class FindFirstSchemaOrThrowArgs {
    where;
    orderBy;
    cursor;
    take;
    skip;
    distinct;
};
exports.FindFirstSchemaOrThrowArgs = FindFirstSchemaOrThrowArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchemaWhereInput_1.SchemaWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SchemaWhereInput_1.SchemaWhereInput)
], FindFirstSchemaOrThrowArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SchemaOrderByWithRelationInput_1.SchemaOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstSchemaOrThrowArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchemaWhereUniqueInput_1.SchemaWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SchemaWhereUniqueInput_1.SchemaWhereUniqueInput)
], FindFirstSchemaOrThrowArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstSchemaOrThrowArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstSchemaOrThrowArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SchemaScalarFieldEnum_1.SchemaScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstSchemaOrThrowArgs.prototype, "distinct", void 0);
exports.FindFirstSchemaOrThrowArgs = FindFirstSchemaOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstSchemaOrThrowArgs);
