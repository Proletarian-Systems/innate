"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneSchemaArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SchemaCreateInput_1 = require("../../../inputs/SchemaCreateInput");
let CreateOneSchemaArgs = class CreateOneSchemaArgs {
    data;
};
exports.CreateOneSchemaArgs = CreateOneSchemaArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchemaCreateInput_1.SchemaCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SchemaCreateInput_1.SchemaCreateInput)
], CreateOneSchemaArgs.prototype, "data", void 0);
exports.CreateOneSchemaArgs = CreateOneSchemaArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneSchemaArgs);
