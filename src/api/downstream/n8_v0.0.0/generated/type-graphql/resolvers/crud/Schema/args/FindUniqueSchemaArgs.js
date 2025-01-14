"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueSchemaArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SchemaWhereUniqueInput_1 = require("../../../inputs/SchemaWhereUniqueInput");
let FindUniqueSchemaArgs = class FindUniqueSchemaArgs {
    where;
};
exports.FindUniqueSchemaArgs = FindUniqueSchemaArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchemaWhereUniqueInput_1.SchemaWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SchemaWhereUniqueInput_1.SchemaWhereUniqueInput)
], FindUniqueSchemaArgs.prototype, "where", void 0);
exports.FindUniqueSchemaArgs = FindUniqueSchemaArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueSchemaArgs);
