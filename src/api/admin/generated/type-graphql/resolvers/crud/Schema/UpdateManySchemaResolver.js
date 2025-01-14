"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManySchemaResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManySchemaArgs_1 = require("./args/UpdateManySchemaArgs");
const Schema_1 = require("../../../models/Schema");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManySchemaResolver = class UpdateManySchemaResolver {
    async updateManySchema(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).schema.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpdateManySchemaResolver = UpdateManySchemaResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManySchemaArgs_1.UpdateManySchemaArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManySchemaResolver.prototype, "updateManySchema", null);
exports.UpdateManySchemaResolver = UpdateManySchemaResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Schema_1.Schema)
], UpdateManySchemaResolver);
