"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueSchemaResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueSchemaArgs_1 = require("./args/FindUniqueSchemaArgs");
const Schema_1 = require("../../../models/Schema");
const helpers_1 = require("../../../helpers");
let FindUniqueSchemaResolver = class FindUniqueSchemaResolver {
    async schema(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).schema.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindUniqueSchemaResolver = FindUniqueSchemaResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Schema_1.Schema, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueSchemaArgs_1.FindUniqueSchemaArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueSchemaResolver.prototype, "schema", null);
exports.FindUniqueSchemaResolver = FindUniqueSchemaResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Schema_1.Schema)
], FindUniqueSchemaResolver);
