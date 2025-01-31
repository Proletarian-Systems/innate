"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstSchemaResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstSchemaArgs_1 = require("./args/FindFirstSchemaArgs");
const Schema_1 = require("../../../models/Schema");
const helpers_1 = require("../../../helpers");
let FindFirstSchemaResolver = class FindFirstSchemaResolver {
    async findFirstSchema(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).schema.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindFirstSchemaResolver = FindFirstSchemaResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Schema_1.Schema, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstSchemaArgs_1.FindFirstSchemaArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstSchemaResolver.prototype, "findFirstSchema", null);
exports.FindFirstSchemaResolver = FindFirstSchemaResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Schema_1.Schema)
], FindFirstSchemaResolver);
