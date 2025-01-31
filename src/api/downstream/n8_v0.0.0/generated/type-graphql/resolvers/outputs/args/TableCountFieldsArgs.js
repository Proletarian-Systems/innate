"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableCountFieldsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FieldWhereInput_1 = require("../../inputs/FieldWhereInput");
let TableCountFieldsArgs = class TableCountFieldsArgs {
    where;
};
exports.TableCountFieldsArgs = TableCountFieldsArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldWhereInput_1.FieldWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldWhereInput_1.FieldWhereInput)
], TableCountFieldsArgs.prototype, "where", void 0);
exports.TableCountFieldsArgs = TableCountFieldsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], TableCountFieldsArgs);
