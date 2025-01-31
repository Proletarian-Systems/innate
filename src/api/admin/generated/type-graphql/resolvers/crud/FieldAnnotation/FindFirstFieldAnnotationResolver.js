"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstFieldAnnotationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstFieldAnnotationArgs_1 = require("./args/FindFirstFieldAnnotationArgs");
const FieldAnnotation_1 = require("../../../models/FieldAnnotation");
const helpers_1 = require("../../../helpers");
let FindFirstFieldAnnotationResolver = class FindFirstFieldAnnotationResolver {
    async findFirstFieldAnnotation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).fieldAnnotation.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindFirstFieldAnnotationResolver = FindFirstFieldAnnotationResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => FieldAnnotation_1.FieldAnnotation, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstFieldAnnotationArgs_1.FindFirstFieldAnnotationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstFieldAnnotationResolver.prototype, "findFirstFieldAnnotation", null);
exports.FindFirstFieldAnnotationResolver = FindFirstFieldAnnotationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => FieldAnnotation_1.FieldAnnotation)
], FindFirstFieldAnnotationResolver);
