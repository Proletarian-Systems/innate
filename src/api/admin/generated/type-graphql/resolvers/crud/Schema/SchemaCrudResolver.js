"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemaCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateSchemaArgs_1 = require("./args/AggregateSchemaArgs");
const CreateManySchemaArgs_1 = require("./args/CreateManySchemaArgs");
const CreateOneSchemaArgs_1 = require("./args/CreateOneSchemaArgs");
const DeleteManySchemaArgs_1 = require("./args/DeleteManySchemaArgs");
const DeleteOneSchemaArgs_1 = require("./args/DeleteOneSchemaArgs");
const FindFirstSchemaArgs_1 = require("./args/FindFirstSchemaArgs");
const FindFirstSchemaOrThrowArgs_1 = require("./args/FindFirstSchemaOrThrowArgs");
const FindManySchemaArgs_1 = require("./args/FindManySchemaArgs");
const FindUniqueSchemaArgs_1 = require("./args/FindUniqueSchemaArgs");
const FindUniqueSchemaOrThrowArgs_1 = require("./args/FindUniqueSchemaOrThrowArgs");
const GroupBySchemaArgs_1 = require("./args/GroupBySchemaArgs");
const UpdateManySchemaArgs_1 = require("./args/UpdateManySchemaArgs");
const UpdateOneSchemaArgs_1 = require("./args/UpdateOneSchemaArgs");
const UpsertOneSchemaArgs_1 = require("./args/UpsertOneSchemaArgs");
const helpers_1 = require("../../../helpers");
const Schema_1 = require("../../../models/Schema");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateSchema_1 = require("../../outputs/AggregateSchema");
const SchemaGroupBy_1 = require("../../outputs/SchemaGroupBy");
let SchemaCrudResolver = class SchemaCrudResolver {
    async aggregateSchema(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).schema.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManySchema(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).schema.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneSchema(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).schema.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManySchema(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).schema.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneSchema(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).schema.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstSchema(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).schema.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstSchemaOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).schema.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async schemata(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).schema.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async schema(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).schema.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getSchema(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).schema.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupBySchema(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).schema.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManySchema(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).schema.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneSchema(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).schema.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneSchema(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).schema.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.SchemaCrudResolver = SchemaCrudResolver;
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
], SchemaCrudResolver.prototype, "aggregateSchema", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManySchemaArgs_1.CreateManySchemaArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SchemaCrudResolver.prototype, "createManySchema", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Schema_1.Schema, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneSchemaArgs_1.CreateOneSchemaArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SchemaCrudResolver.prototype, "createOneSchema", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManySchemaArgs_1.DeleteManySchemaArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SchemaCrudResolver.prototype, "deleteManySchema", null);
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
], SchemaCrudResolver.prototype, "deleteOneSchema", null);
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
], SchemaCrudResolver.prototype, "findFirstSchema", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Schema_1.Schema, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstSchemaOrThrowArgs_1.FindFirstSchemaOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SchemaCrudResolver.prototype, "findFirstSchemaOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Schema_1.Schema], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManySchemaArgs_1.FindManySchemaArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SchemaCrudResolver.prototype, "schemata", null);
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
], SchemaCrudResolver.prototype, "schema", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Schema_1.Schema, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueSchemaOrThrowArgs_1.FindUniqueSchemaOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SchemaCrudResolver.prototype, "getSchema", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [SchemaGroupBy_1.SchemaGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupBySchemaArgs_1.GroupBySchemaArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SchemaCrudResolver.prototype, "groupBySchema", null);
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
], SchemaCrudResolver.prototype, "updateManySchema", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Schema_1.Schema, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneSchemaArgs_1.UpdateOneSchemaArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SchemaCrudResolver.prototype, "updateOneSchema", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Schema_1.Schema, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneSchemaArgs_1.UpsertOneSchemaArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SchemaCrudResolver.prototype, "upsertOneSchema", null);
exports.SchemaCrudResolver = SchemaCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Schema_1.Schema)
], SchemaCrudResolver);
