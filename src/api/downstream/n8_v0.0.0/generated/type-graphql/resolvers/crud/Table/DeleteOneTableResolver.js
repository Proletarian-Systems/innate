"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneTableResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneTableArgs_1 = require("./args/DeleteOneTableArgs");
const Table_1 = require("../../../models/Table");
const helpers_1 = require("../../../helpers");
let DeleteOneTableResolver = class DeleteOneTableResolver {
    async deleteOneTable(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).table.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.DeleteOneTableResolver = DeleteOneTableResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Table_1.Table, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneTableArgs_1.DeleteOneTableArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneTableResolver.prototype, "deleteOneTable", null);
exports.DeleteOneTableResolver = DeleteOneTableResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Table_1.Table)
], DeleteOneTableResolver);
