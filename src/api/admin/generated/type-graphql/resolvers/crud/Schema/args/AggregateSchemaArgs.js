"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateSchemaArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SchemaOrderByWithRelationInput_1 = require("../../../inputs/SchemaOrderByWithRelationInput");
const SchemaWhereInput_1 = require("../../../inputs/SchemaWhereInput");
const SchemaWhereUniqueInput_1 = require("../../../inputs/SchemaWhereUniqueInput");
let AggregateSchemaArgs = class AggregateSchemaArgs {
    where;
    orderBy;
    cursor;
    take;
    skip;
};
exports.AggregateSchemaArgs = AggregateSchemaArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchemaWhereInput_1.SchemaWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SchemaWhereInput_1.SchemaWhereInput)
], AggregateSchemaArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SchemaOrderByWithRelationInput_1.SchemaOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateSchemaArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchemaWhereUniqueInput_1.SchemaWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SchemaWhereUniqueInput_1.SchemaWhereUniqueInput)
], AggregateSchemaArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateSchemaArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateSchemaArgs.prototype, "skip", void 0);
exports.AggregateSchemaArgs = AggregateSchemaArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateSchemaArgs);
