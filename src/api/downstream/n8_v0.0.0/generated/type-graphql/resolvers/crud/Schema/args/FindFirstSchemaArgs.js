"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstSchemaArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SchemaOrderByWithRelationInput_1 = require("../../../inputs/SchemaOrderByWithRelationInput");
const SchemaWhereInput_1 = require("../../../inputs/SchemaWhereInput");
const SchemaWhereUniqueInput_1 = require("../../../inputs/SchemaWhereUniqueInput");
const SchemaScalarFieldEnum_1 = require("../../../../enums/SchemaScalarFieldEnum");
let FindFirstSchemaArgs = class FindFirstSchemaArgs {
    where;
    orderBy;
    cursor;
    take;
    skip;
    distinct;
};
exports.FindFirstSchemaArgs = FindFirstSchemaArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchemaWhereInput_1.SchemaWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SchemaWhereInput_1.SchemaWhereInput)
], FindFirstSchemaArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SchemaOrderByWithRelationInput_1.SchemaOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstSchemaArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchemaWhereUniqueInput_1.SchemaWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SchemaWhereUniqueInput_1.SchemaWhereUniqueInput)
], FindFirstSchemaArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstSchemaArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstSchemaArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SchemaScalarFieldEnum_1.SchemaScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstSchemaArgs.prototype, "distinct", void 0);
exports.FindFirstSchemaArgs = FindFirstSchemaArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstSchemaArgs);
