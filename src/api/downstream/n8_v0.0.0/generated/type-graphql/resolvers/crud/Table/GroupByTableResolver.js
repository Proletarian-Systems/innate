"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByTableResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByTableArgs_1 = require("./args/GroupByTableArgs");
const Table_1 = require("../../../models/Table");
const TableGroupBy_1 = require("../../outputs/TableGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByTableResolver = class GroupByTableResolver {
    async groupByTable(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).table.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
exports.GroupByTableResolver = GroupByTableResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [TableGroupBy_1.TableGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByTableArgs_1.GroupByTableArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByTableResolver.prototype, "groupByTable", null);
exports.GroupByTableResolver = GroupByTableResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Table_1.Table)
], GroupByTableResolver);
