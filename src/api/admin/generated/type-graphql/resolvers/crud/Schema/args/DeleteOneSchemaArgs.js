"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneSchemaArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SchemaWhereUniqueInput_1 = require("../../../inputs/SchemaWhereUniqueInput");
let DeleteOneSchemaArgs = class DeleteOneSchemaArgs {
    where;
};
exports.DeleteOneSchemaArgs = DeleteOneSchemaArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchemaWhereUniqueInput_1.SchemaWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SchemaWhereUniqueInput_1.SchemaWhereUniqueInput)
], DeleteOneSchemaArgs.prototype, "where", void 0);
exports.DeleteOneSchemaArgs = DeleteOneSchemaArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneSchemaArgs);
