import { Prisma } from "@prisma/client";
import { FieldAnnotationCreateNestedManyWithoutTableInput } from "../inputs/FieldAnnotationCreateNestedManyWithoutTableInput";
import { FieldCreateNestedManyWithoutTableInput } from "../inputs/FieldCreateNestedManyWithoutTableInput";
import { SchemaCreateNestedOneWithoutTablesInput } from "../inputs/SchemaCreateNestedOneWithoutTablesInput";
export declare class TableCreateInput {
    id?: string | undefined;
    name: string;
    modelName: string;
    relations?: Prisma.InputJsonValue | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    fields?: FieldCreateNestedManyWithoutTableInput | undefined;
    fieldAnnotations?: FieldAnnotationCreateNestedManyWithoutTableInput | undefined;
    schema?: SchemaCreateNestedOneWithoutTablesInput | undefined;
}
