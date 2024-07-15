import { Prisma } from "@prisma/client";
export declare class TableCreateManySchemaInput {
    id?: string | undefined;
    name: string;
    modelName: string;
    relations?: Prisma.InputJsonValue | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}