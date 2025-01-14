"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateSchemaResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateSchemaArgs_1 = require("./args/AggregateSchemaArgs");
const Schema_1 = require("../../../models/Schema");
const AggregateSchema_1 = require("../../outputs/AggregateSchema");
const helpers_1 = require("../../../helpers");
let AggregateSchemaResolver = class AggregateSchemaResolver {
    async aggregateSchema(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).schema.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
exports.AggregateSchemaResolver = AggregateSchemaResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateSchema_1.AggregateSchema, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateSchemaArgs_1.AggregateSchemaArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateSchemaResolver.prototype, "aggregateSchema", null);
exports.AggregateSchemaResolver = AggregateSchemaResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Schema_1.Schema)
], AggregateSchemaResolver);
