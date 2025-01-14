"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneSchemaArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SchemaUpdateInput_1 = require("../../../inputs/SchemaUpdateInput");
const SchemaWhereUniqueInput_1 = require("../../../inputs/SchemaWhereUniqueInput");
let UpdateOneSchemaArgs = class UpdateOneSchemaArgs {
    data;
    where;
};
exports.UpdateOneSchemaArgs = UpdateOneSchemaArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchemaUpdateInput_1.SchemaUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SchemaUpdateInput_1.SchemaUpdateInput)
], UpdateOneSchemaArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchemaWhereUniqueInput_1.SchemaWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SchemaWhereUniqueInput_1.SchemaWhereUniqueInput)
], UpdateOneSchemaArgs.prototype, "where", void 0);
exports.UpdateOneSchemaArgs = UpdateOneSchemaArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneSchemaArgs);
