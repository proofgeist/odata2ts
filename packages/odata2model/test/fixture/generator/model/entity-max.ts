// @ts-nocheck
import type {
  GuidString,
  TimeOfDayString,
  DateString,
  DateTimeOffsetString,
  BinaryString,
} from "@odata2ts/odata-query-objects";

export interface Book {
  id: GuidString;
  requiredOption: boolean;
  time?: TimeOfDayString;
  optionalDate?: DateString;
  dateTimeOffset?: DateTimeOffsetString;
  TestDecimal?: number;
  testBinary?: BinaryString;
  testAny?: string;
  multipleStrings?: Array<string>;
  multipleNumbers?: Array<number>;
  multipleBooleans?: Array<boolean>;
}