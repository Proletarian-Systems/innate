"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneSchemaResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneSchemaArgs_1 = require("./args/DeleteOneSchemaArgs");
const Schema_1 = require("../../../models/Schema");
const helpers_1 = require("../../../helpers");
let DeleteOneSchemaResolver = class DeleteOneSchemaResolver {
    async deleteOneSchema(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).schema.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.DeleteOneSchemaResolver = DeleteOneSchemaResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Schema_1.Schema, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneSchemaArgs_1.DeleteOneSchemaArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneSchemaResolver.prototype, "deleteOneSchema", null);
exports.DeleteOneSchemaResolver = DeleteOneSchemaResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Schema_1.Schema)
], DeleteOneSchemaResolver);
