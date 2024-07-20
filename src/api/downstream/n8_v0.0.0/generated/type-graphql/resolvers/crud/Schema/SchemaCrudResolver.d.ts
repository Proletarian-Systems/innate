import type { GraphQLResolveInfo } from "graphql";
import { AggregateSchemaArgs } from "./args/AggregateSchemaArgs";
import { CreateManySchemaArgs } from "./args/CreateManySchemaArgs";
import { CreateOneSchemaArgs } from "./args/CreateOneSchemaArgs";
import { DeleteManySchemaArgs } from "./args/DeleteManySchemaArgs";
import { DeleteOneSchemaArgs } from "./args/DeleteOneSchemaArgs";
import { FindFirstSchemaArgs } from "./args/FindFirstSchemaArgs";
import { FindFirstSchemaOrThrowArgs } from "./args/FindFirstSchemaOrThrowArgs";
import { FindManySchemaArgs } from "./args/FindManySchemaArgs";
import { FindUniqueSchemaArgs } from "./args/FindUniqueSchemaArgs";
import { FindUniqueSchemaOrThrowArgs } from "./args/FindUniqueSchemaOrThrowArgs";
import { GroupBySchemaArgs } from "./args/GroupBySchemaArgs";
import { UpdateManySchemaArgs } from "./args/UpdateManySchemaArgs";
import { UpdateOneSchemaArgs } from "./args/UpdateOneSchemaArgs";
import { UpsertOneSchemaArgs } from "./args/UpsertOneSchemaArgs";
import { Schema } from "../../../models/Schema";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateSchema } from "../../outputs/AggregateSchema";
import { SchemaGroupBy } from "../../outputs/SchemaGroupBy";
export declare class SchemaCrudResolver {
    aggregateSchema(ctx: any, info: GraphQLResolveInfo, args: AggregateSchemaArgs): Promise<AggregateSchema>;
    createManySchema(ctx: any, info: GraphQLResolveInfo, args: CreateManySchemaArgs): Promise<AffectedRowsOutput>;
    createOneSchema(ctx: any, info: GraphQLResolveInfo, args: CreateOneSchemaArgs): Promise<Schema>;
    deleteManySchema(ctx: any, info: GraphQLResolveInfo, args: DeleteManySchemaArgs): Promise<AffectedRowsOutput>;
    deleteOneSchema(ctx: any, info: GraphQLResolveInfo, args: DeleteOneSchemaArgs): Promise<Schema | null>;
    findFirstSchema(ctx: any, info: GraphQLResolveInfo, args: FindFirstSchemaArgs): Promise<Schema | null>;
    findFirstSchemaOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstSchemaOrThrowArgs): Promise<Schema | null>;
    schemata(ctx: any, info: GraphQLResolveInfo, args: FindManySchemaArgs): Promise<Schema[]>;
    schema(ctx: any, info: GraphQLResolveInfo, args: FindUniqueSchemaArgs): Promise<Schema | null>;
    getSchema(ctx: any, info: GraphQLResolveInfo, args: FindUniqueSchemaOrThrowArgs): Promise<Schema | null>;
    groupBySchema(ctx: any, info: GraphQLResolveInfo, args: GroupBySchemaArgs): Promise<SchemaGroupBy[]>;
    updateManySchema(ctx: any, info: GraphQLResolveInfo, args: UpdateManySchemaArgs): Promise<AffectedRowsOutput>;
    updateOneSchema(ctx: any, info: GraphQLResolveInfo, args: UpdateOneSchemaArgs): Promise<Schema | null>;
    upsertOneSchema(ctx: any, info: GraphQLResolveInfo, args: UpsertOneSchemaArgs): Promise<Schema>;
}