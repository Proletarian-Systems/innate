import { Prisma } from "../../../../prismaClient";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { FieldAnnotationUpdateManyWithoutTableNestedInput } from "../inputs/FieldAnnotationUpdateManyWithoutTableNestedInput";
import { FieldUpdateManyWithoutTableNestedInput } from "../inputs/FieldUpdateManyWithoutTableNestedInput";
import { SchemaUpdateOneWithoutTablesNestedInput } from "../inputs/SchemaUpdateOneWithoutTablesNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class TableUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    modelName?: StringFieldUpdateOperationsInput | undefined;
    relations?: Prisma.InputJsonValue | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    fields?: FieldUpdateManyWithoutTableNestedInput | undefined;
    fieldAnnotations?: FieldAnnotationUpdateManyWithoutTableNestedInput | undefined;
    schema?: SchemaUpdateOneWithoutTablesNestedInput | undefined;
}
