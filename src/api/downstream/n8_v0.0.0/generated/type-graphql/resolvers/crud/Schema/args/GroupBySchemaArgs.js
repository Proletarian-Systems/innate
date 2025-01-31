"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupBySchemaArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SchemaOrderByWithAggregationInput_1 = require("../../../inputs/SchemaOrderByWithAggregationInput");
const SchemaScalarWhereWithAggregatesInput_1 = require("../../../inputs/SchemaScalarWhereWithAggregatesInput");
const SchemaWhereInput_1 = require("../../../inputs/SchemaWhereInput");
const SchemaScalarFieldEnum_1 = require("../../../../enums/SchemaScalarFieldEnum");
let GroupBySchemaArgs = class GroupBySchemaArgs {
    where;
    orderBy;
    by;
    having;
    take;
    skip;
};
exports.GroupBySchemaArgs = GroupBySchemaArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchemaWhereInput_1.SchemaWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SchemaWhereInput_1.SchemaWhereInput)
], GroupBySchemaArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SchemaOrderByWithAggregationInput_1.SchemaOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupBySchemaArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SchemaScalarFieldEnum_1.SchemaScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupBySchemaArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchemaScalarWhereWithAggregatesInput_1.SchemaScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SchemaScalarWhereWithAggregatesInput_1.SchemaScalarWhereWithAggregatesInput)
], GroupBySchemaArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupBySchemaArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupBySchemaArgs.prototype, "skip", void 0);
exports.GroupBySchemaArgs = GroupBySchemaArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupBySchemaArgs);
