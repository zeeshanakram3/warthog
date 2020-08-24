// This file has been auto-generated by Warthog.  Do not update directly as it
// will be re-written.  If you need to change this file, update models or add
// new TypeGraphQL objects
// @ts-ignore
import { DateResolver as Date } from "graphql-scalars";
// @ts-ignore
import { GraphQLID as ID } from "graphql";
// @ts-ignore
import {
  ArgsType,
  Field as TypeGraphQLField,
  Float,
  InputType as TypeGraphQLInputType,
  Int
} from "type-graphql";
// @ts-ignore
import { registerEnumType, GraphQLISODateTime as DateTime } from "type-graphql";

// @ts-ignore eslint-disable-next-line @typescript-eslint/no-var-requires
const { GraphQLJSONObject } = require("graphql-type-json");

// @ts-ignore
import {
  BaseWhereInput,
  JsonObject,
  PaginationArgs,
  DateOnlyString,
  DateTimeString
} from "../../../src";
import { StringEnum } from "../src/modules/user/user.model";
// @ts-ignore
import { User } from "../src/modules/user/user.model";

export enum UserOrderByEnum {
  createdAt_ASC = "createdAt_ASC",
  createdAt_DESC = "createdAt_DESC",

  updatedAt_ASC = "updatedAt_ASC",
  updatedAt_DESC = "updatedAt_DESC",

  deletedAt_ASC = "deletedAt_ASC",
  deletedAt_DESC = "deletedAt_DESC",

  booleanField_ASC = "booleanField_ASC",
  booleanField_DESC = "booleanField_DESC",

  dateField_ASC = "dateField_ASC",
  dateField_DESC = "dateField_DESC",

  dateOnlyField_ASC = "dateOnlyField_ASC",
  dateOnlyField_DESC = "dateOnlyField_DESC",

  dateTimeField_ASC = "dateTimeField_ASC",
  dateTimeField_DESC = "dateTimeField_DESC",

  emailField_ASC = "emailField_ASC",
  emailField_DESC = "emailField_DESC",

  enumField_ASC = "enumField_ASC",
  enumField_DESC = "enumField_DESC",

  floatField_ASC = "floatField_ASC",
  floatField_DESC = "floatField_DESC",

  realField_ASC = "realField_ASC",
  realField_DESC = "realField_DESC",

  idField_ASC = "idField_ASC",
  idField_DESC = "idField_DESC",

  intFieldDefault_ASC = "intFieldDefault_ASC",
  intFieldDefault_DESC = "intFieldDefault_DESC",

  smallIntField_ASC = "smallIntField_ASC",
  smallIntField_DESC = "smallIntField_DESC",

  bigIntField_ASC = "bigIntField_ASC",
  bigIntField_DESC = "bigIntField_DESC",

  stringField_ASC = "stringField_ASC",
  stringField_DESC = "stringField_DESC",

  noFilterField_ASC = "noFilterField_ASC",
  noFilterField_DESC = "noFilterField_DESC",

  numericField_ASC = "numericField_ASC",
  numericField_DESC = "numericField_DESC",

  numericFieldCustomPrecisionScale_ASC = "numericFieldCustomPrecisionScale_ASC",
  numericFieldCustomPrecisionScale_DESC = "numericFieldCustomPrecisionScale_DESC",

  charField_ASC = "charField_ASC",
  charField_DESC = "charField_DESC",

  characterField_ASC = "characterField_ASC",
  characterField_DESC = "characterField_DESC",

  characterVaryingField_ASC = "characterVaryingField_ASC",
  characterVaryingField_DESC = "characterVaryingField_DESC",

  textField_ASC = "textField_ASC",
  textField_DESC = "textField_DESC",

  varcharField_ASC = "varcharField_ASC",
  varcharField_DESC = "varcharField_DESC",

  intField_ASC = "intField_ASC",
  intField_DESC = "intField_DESC",

  integerField_ASC = "integerField_ASC",
  integerField_DESC = "integerField_DESC",

  int2Field_ASC = "int2Field_ASC",
  int2Field_DESC = "int2Field_DESC",

  int4Field_ASC = "int4Field_ASC",
  int4Field_DESC = "int4Field_DESC",

  int8Field_ASC = "int8Field_ASC",
  int8Field_DESC = "int8Field_DESC",

  float4Field_ASC = "float4Field_ASC",
  float4Field_DESC = "float4Field_DESC",

  float8Field_ASC = "float8Field_ASC",
  float8Field_DESC = "float8Field_DESC",

  doublePrecisionField_ASC = "doublePrecisionField_ASC",
  doublePrecisionField_DESC = "doublePrecisionField_DESC",

  readonlyField_ASC = "readonlyField_ASC",
  readonlyField_DESC = "readonlyField_DESC",

  apiOnlyField_ASC = "apiOnlyField_ASC",
  apiOnlyField_DESC = "apiOnlyField_DESC"
}

registerEnumType(UserOrderByEnum, {
  name: "UserOrderByInput"
});

@TypeGraphQLInputType()
export class UserWhereInput {
  @TypeGraphQLField(() => ID, { nullable: true })
  id_eq?: string;

  @TypeGraphQLField(() => [ID], { nullable: true })
  id_in?: string[];

  @TypeGraphQLField(() => DateTime, { nullable: true })
  createdAt_eq?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  createdAt_lt?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  createdAt_lte?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  createdAt_gt?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  createdAt_gte?: Date;

  @TypeGraphQLField(() => ID, { nullable: true })
  createdById_eq?: string;

  @TypeGraphQLField(() => [ID], { nullable: true })
  createdById_in?: string[];

  @TypeGraphQLField(() => DateTime, { nullable: true })
  updatedAt_eq?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  updatedAt_lt?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  updatedAt_lte?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  updatedAt_gt?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  updatedAt_gte?: Date;

  @TypeGraphQLField(() => ID, { nullable: true })
  updatedById_eq?: string;

  @TypeGraphQLField(() => [ID], { nullable: true })
  updatedById_in?: string[];

  @TypeGraphQLField({ nullable: true })
  deletedAt_all?: Boolean;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  deletedAt_eq?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  deletedAt_lt?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  deletedAt_lte?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  deletedAt_gt?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  deletedAt_gte?: Date;

  @TypeGraphQLField(() => ID, { nullable: true })
  deletedById_eq?: string;

  @TypeGraphQLField(() => [ID], { nullable: true })
  deletedById_in?: string[];

  @TypeGraphQLField(() => Boolean, { nullable: true })
  booleanField_eq?: Boolean;

  @TypeGraphQLField(() => [Boolean], { nullable: true })
  booleanField_in?: Boolean[];

  @TypeGraphQLField(() => DateTime, { nullable: true })
  dateField_eq?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  dateField_lt?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  dateField_lte?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  dateField_gt?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  dateField_gte?: Date;

  @TypeGraphQLField(() => Date, { nullable: true })
  dateOnlyField_eq?: DateOnlyString;

  @TypeGraphQLField(() => Date, { nullable: true })
  dateOnlyField_lt?: DateOnlyString;

  @TypeGraphQLField(() => Date, { nullable: true })
  dateOnlyField_lte?: DateOnlyString;

  @TypeGraphQLField(() => Date, { nullable: true })
  dateOnlyField_gt?: DateOnlyString;

  @TypeGraphQLField(() => Date, { nullable: true })
  dateOnlyField_gte?: DateOnlyString;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  dateTimeField_eq?: DateTimeString;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  dateTimeField_lt?: DateTimeString;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  dateTimeField_lte?: DateTimeString;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  dateTimeField_gt?: DateTimeString;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  dateTimeField_gte?: DateTimeString;

  @TypeGraphQLField({ nullable: true })
  emailField_eq?: string;

  @TypeGraphQLField({ nullable: true })
  emailField_contains?: string;

  @TypeGraphQLField({ nullable: true })
  emailField_startsWith?: string;

  @TypeGraphQLField({ nullable: true })
  emailField_endsWith?: string;

  @TypeGraphQLField(() => [String], { nullable: true })
  emailField_in?: string[];

  @TypeGraphQLField(() => StringEnum, { nullable: true })
  enumField_eq?: StringEnum;

  @TypeGraphQLField(() => [StringEnum], { nullable: true })
  enumField_in?: StringEnum[];

  @TypeGraphQLField(() => Float, { nullable: true })
  floatField_eq?: number;

  @TypeGraphQLField(() => Float, { nullable: true })
  floatField_gt?: number;

  @TypeGraphQLField(() => Float, { nullable: true })
  floatField_gte?: number;

  @TypeGraphQLField(() => Float, { nullable: true })
  floatField_lt?: number;

  @TypeGraphQLField(() => Float, { nullable: true })
  floatField_lte?: number;

  @TypeGraphQLField(() => [Float], { nullable: true })
  floatField_in?: number[];

  @TypeGraphQLField(() => Float, { nullable: true })
  realField_eq?: number;

  @TypeGraphQLField(() => Float, { nullable: true })
  realField_gt?: number;

  @TypeGraphQLField(() => Float, { nullable: true })
  realField_gte?: number;

  @TypeGraphQLField(() => Float, { nullable: true })
  realField_lt?: number;

  @TypeGraphQLField(() => Float, { nullable: true })
  realField_lte?: number;

  @TypeGraphQLField(() => [Float], { nullable: true })
  realField_in?: number[];

  @TypeGraphQLField(() => ID, { nullable: true })
  idField_eq?: string;

  @TypeGraphQLField(() => [ID], { nullable: true })
  idField_in?: string[];

  @TypeGraphQLField(() => Int, { nullable: true })
  intFieldDefault_eq?: number;

  @TypeGraphQLField(() => Int, { nullable: true })
  intFieldDefault_gt?: number;

  @TypeGraphQLField(() => Int, { nullable: true })
  intFieldDefault_gte?: number;

  @TypeGraphQLField(() => Int, { nullable: true })
  intFieldDefault_lt?: number;

  @TypeGraphQLField(() => Int, { nullable: true })
  intFieldDefault_lte?: number;

  @TypeGraphQLField(() => [Int], { nullable: true })
  intFieldDefault_in?: number[];

  @TypeGraphQLField(() => Int, { nullable: true })
  smallIntField_eq?: number;

  @TypeGraphQLField(() => Int, { nullable: true })
  smallIntField_gt?: number;

  @TypeGraphQLField(() => Int, { nullable: true })
  smallIntField_gte?: number;

  @TypeGraphQLField(() => Int, { nullable: true })
  smallIntField_lt?: number;

  @TypeGraphQLField(() => Int, { nullable: true })
  smallIntField_lte?: number;

  @TypeGraphQLField(() => [Int], { nullable: true })
  smallIntField_in?: number[];

  @TypeGraphQLField(() => Int, { nullable: true })
  bigIntField_eq?: number;

  @TypeGraphQLField(() => Int, { nullable: true })
  bigIntField_gt?: number;

  @TypeGraphQLField(() => Int, { nullable: true })
  bigIntField_gte?: number;

  @TypeGraphQLField(() => Int, { nullable: true })
  bigIntField_lt?: number;

  @TypeGraphQLField(() => Int, { nullable: true })
  bigIntField_lte?: number;

  @TypeGraphQLField(() => [Int], { nullable: true })
  bigIntField_in?: number[];

  @TypeGraphQLField(() => GraphQLJSONObject, { nullable: true })
  jsonField_json?: JsonObject;

  @TypeGraphQLField({ nullable: true })
  stringField_eq?: string;

  @TypeGraphQLField({ nullable: true })
  stringField_contains?: string;

  @TypeGraphQLField({ nullable: true })
  stringField_startsWith?: string;

  @TypeGraphQLField({ nullable: true })
  stringField_endsWith?: string;

  @TypeGraphQLField(() => [String], { nullable: true })
  stringField_in?: string[];

  @TypeGraphQLField({ nullable: true })
  noSortField_eq?: string;

  @TypeGraphQLField({ nullable: true })
  noSortField_contains?: string;

  @TypeGraphQLField({ nullable: true })
  noSortField_startsWith?: string;

  @TypeGraphQLField({ nullable: true })
  noSortField_endsWith?: string;

  @TypeGraphQLField(() => [String], { nullable: true })
  noSortField_in?: string[];

  @TypeGraphQLField(() => Float, { nullable: true })
  numericField_eq?: number;

  @TypeGraphQLField(() => Float, { nullable: true })
  numericField_gt?: number;

  @TypeGraphQLField(() => Float, { nullable: true })
  numericField_gte?: number;

  @TypeGraphQLField(() => Float, { nullable: true })
  numericField_lt?: number;

  @TypeGraphQLField(() => Float, { nullable: true })
  numericField_lte?: number;

  @TypeGraphQLField(() => [Float], { nullable: true })
  numericField_in?: number[];

  @TypeGraphQLField(() => Float, { nullable: true })
  numericFieldCustomPrecisionScale_eq?: number;

  @TypeGraphQLField(() => Float, { nullable: true })
  numericFieldCustomPrecisionScale_gt?: number;

  @TypeGraphQLField(() => Float, { nullable: true })
  numericFieldCustomPrecisionScale_gte?: number;

  @TypeGraphQLField(() => Float, { nullable: true })
  numericFieldCustomPrecisionScale_lt?: number;

  @TypeGraphQLField(() => Float, { nullable: true })
  numericFieldCustomPrecisionScale_lte?: number;

  @TypeGraphQLField(() => [Float], { nullable: true })
  numericFieldCustomPrecisionScale_in?: number[];

  @TypeGraphQLField({ nullable: true })
  charField_eq?: string;

  @TypeGraphQLField({ nullable: true })
  charField_contains?: string;

  @TypeGraphQLField({ nullable: true })
  charField_startsWith?: string;

  @TypeGraphQLField({ nullable: true })
  charField_endsWith?: string;

  @TypeGraphQLField(() => [String], { nullable: true })
  charField_in?: string[];

  @TypeGraphQLField({ nullable: true })
  characterField_eq?: string;

  @TypeGraphQLField({ nullable: true })
  characterField_contains?: string;

  @TypeGraphQLField({ nullable: true })
  characterField_startsWith?: string;

  @TypeGraphQLField({ nullable: true })
  characterField_endsWith?: string;

  @TypeGraphQLField(() => [String], { nullable: true })
  characterField_in?: string[];

  @TypeGraphQLField({ nullable: true })
  characterVaryingField_eq?: string;

  @TypeGraphQLField({ nullable: true })
  characterVaryingField_contains?: string;

  @TypeGraphQLField({ nullable: true })
  characterVaryingField_startsWith?: string;

  @TypeGraphQLField({ nullable: true })
  characterVaryingField_endsWith?: string;

  @TypeGraphQLField(() => [String], { nullable: true })
  characterVaryingField_in?: string[];

  @TypeGraphQLField({ nullable: true })
  textField_eq?: string;

  @TypeGraphQLField({ nullable: true })
  textField_contains?: string;

  @TypeGraphQLField({ nullable: true })
  textField_startsWith?: string;

  @TypeGraphQLField({ nullable: true })
  textField_endsWith?: string;

  @TypeGraphQLField(() => [String], { nullable: true })
  textField_in?: string[];

  @TypeGraphQLField({ nullable: true })
  varcharField_eq?: string;

  @TypeGraphQLField({ nullable: true })
  varcharField_contains?: string;

  @TypeGraphQLField({ nullable: true })
  varcharField_startsWith?: string;

  @TypeGraphQLField({ nullable: true })
  varcharField_endsWith?: string;

  @TypeGraphQLField(() => [String], { nullable: true })
  varcharField_in?: string[];

  @TypeGraphQLField(() => Int, { nullable: true })
  intField_eq?: number;

  @TypeGraphQLField(() => Int, { nullable: true })
  intField_gt?: number;

  @TypeGraphQLField(() => Int, { nullable: true })
  intField_gte?: number;

  @TypeGraphQLField(() => Int, { nullable: true })
  intField_lt?: number;

  @TypeGraphQLField(() => Int, { nullable: true })
  intField_lte?: number;

  @TypeGraphQLField(() => [Int], { nullable: true })
  intField_in?: number[];

  @TypeGraphQLField(() => Int, { nullable: true })
  integerField_eq?: number;

  @TypeGraphQLField(() => Int, { nullable: true })
  integerField_gt?: number;

  @TypeGraphQLField(() => Int, { nullable: true })
  integerField_gte?: number;

  @TypeGraphQLField(() => Int, { nullable: true })
  integerField_lt?: number;

  @TypeGraphQLField(() => Int, { nullable: true })
  integerField_lte?: number;

  @TypeGraphQLField(() => [Int], { nullable: true })
  integerField_in?: number[];

  @TypeGraphQLField(() => Int, { nullable: true })
  int2Field_eq?: number;

  @TypeGraphQLField(() => Int, { nullable: true })
  int2Field_gt?: number;

  @TypeGraphQLField(() => Int, { nullable: true })
  int2Field_gte?: number;

  @TypeGraphQLField(() => Int, { nullable: true })
  int2Field_lt?: number;

  @TypeGraphQLField(() => Int, { nullable: true })
  int2Field_lte?: number;

  @TypeGraphQLField(() => [Int], { nullable: true })
  int2Field_in?: number[];

  @TypeGraphQLField(() => Int, { nullable: true })
  int4Field_eq?: number;

  @TypeGraphQLField(() => Int, { nullable: true })
  int4Field_gt?: number;

  @TypeGraphQLField(() => Int, { nullable: true })
  int4Field_gte?: number;

  @TypeGraphQLField(() => Int, { nullable: true })
  int4Field_lt?: number;

  @TypeGraphQLField(() => Int, { nullable: true })
  int4Field_lte?: number;

  @TypeGraphQLField(() => [Int], { nullable: true })
  int4Field_in?: number[];

  @TypeGraphQLField(() => Int, { nullable: true })
  int8Field_eq?: number;

  @TypeGraphQLField(() => Int, { nullable: true })
  int8Field_gt?: number;

  @TypeGraphQLField(() => Int, { nullable: true })
  int8Field_gte?: number;

  @TypeGraphQLField(() => Int, { nullable: true })
  int8Field_lt?: number;

  @TypeGraphQLField(() => Int, { nullable: true })
  int8Field_lte?: number;

  @TypeGraphQLField(() => [Int], { nullable: true })
  int8Field_in?: number[];

  @TypeGraphQLField(() => Float, { nullable: true })
  float4Field_eq?: number;

  @TypeGraphQLField(() => Float, { nullable: true })
  float4Field_gt?: number;

  @TypeGraphQLField(() => Float, { nullable: true })
  float4Field_gte?: number;

  @TypeGraphQLField(() => Float, { nullable: true })
  float4Field_lt?: number;

  @TypeGraphQLField(() => Float, { nullable: true })
  float4Field_lte?: number;

  @TypeGraphQLField(() => [Float], { nullable: true })
  float4Field_in?: number[];

  @TypeGraphQLField(() => Float, { nullable: true })
  float8Field_eq?: number;

  @TypeGraphQLField(() => Float, { nullable: true })
  float8Field_gt?: number;

  @TypeGraphQLField(() => Float, { nullable: true })
  float8Field_gte?: number;

  @TypeGraphQLField(() => Float, { nullable: true })
  float8Field_lt?: number;

  @TypeGraphQLField(() => Float, { nullable: true })
  float8Field_lte?: number;

  @TypeGraphQLField(() => [Float], { nullable: true })
  float8Field_in?: number[];

  @TypeGraphQLField(() => Float, { nullable: true })
  doublePrecisionField_eq?: number;

  @TypeGraphQLField(() => Float, { nullable: true })
  doublePrecisionField_gt?: number;

  @TypeGraphQLField(() => Float, { nullable: true })
  doublePrecisionField_gte?: number;

  @TypeGraphQLField(() => Float, { nullable: true })
  doublePrecisionField_lt?: number;

  @TypeGraphQLField(() => Float, { nullable: true })
  doublePrecisionField_lte?: number;

  @TypeGraphQLField(() => [Float], { nullable: true })
  doublePrecisionField_in?: number[];

  @TypeGraphQLField({ nullable: true })
  readonlyField_eq?: string;

  @TypeGraphQLField({ nullable: true })
  readonlyField_contains?: string;

  @TypeGraphQLField({ nullable: true })
  readonlyField_startsWith?: string;

  @TypeGraphQLField({ nullable: true })
  readonlyField_endsWith?: string;

  @TypeGraphQLField(() => [String], { nullable: true })
  readonlyField_in?: string[];

  @TypeGraphQLField({ nullable: true })
  apiOnlyField_eq?: string;

  @TypeGraphQLField({ nullable: true })
  apiOnlyField_contains?: string;

  @TypeGraphQLField({ nullable: true })
  apiOnlyField_startsWith?: string;

  @TypeGraphQLField({ nullable: true })
  apiOnlyField_endsWith?: string;

  @TypeGraphQLField(() => [String], { nullable: true })
  apiOnlyField_in?: string[];
}

@TypeGraphQLInputType()
export class UserWhereUniqueInput {
  @TypeGraphQLField(() => ID, { nullable: true })
  id?: string;

  @TypeGraphQLField(() => String, { nullable: true })
  emailField?: string;

  @TypeGraphQLField(() => StringEnum, { nullable: true })
  enumField?: StringEnum;

  @TypeGraphQLField(() => String, { nullable: true })
  stringField?: string;
}

@TypeGraphQLInputType()
export class UserCreateInput {
  @TypeGraphQLField({ nullable: true })
  booleanField?: boolean;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  dateField?: Date;

  @TypeGraphQLField(() => Date, { nullable: true })
  dateOnlyField?: DateOnlyString;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  dateTimeField?: DateTimeString;

  @TypeGraphQLField({ nullable: true })
  emailField?: string;

  @TypeGraphQLField(() => StringEnum, { nullable: true })
  enumField?: StringEnum;

  @TypeGraphQLField({ nullable: true })
  floatField?: number;

  @TypeGraphQLField({ nullable: true })
  realField?: number;

  @TypeGraphQLField(() => ID, { nullable: true })
  idField?: string;

  @TypeGraphQLField({ nullable: true })
  intFieldDefault?: number;

  @TypeGraphQLField({ nullable: true })
  smallIntField?: number;

  @TypeGraphQLField({ nullable: true })
  bigIntField?: number;

  @TypeGraphQLField(() => GraphQLJSONObject, { nullable: true })
  jsonField?: JsonObject;

  @TypeGraphQLField(() => GraphQLJSONObject, { nullable: true })
  jsonFieldNoFilter?: JsonObject;

  @TypeGraphQLField()
  stringField!: string;

  @TypeGraphQLField({ nullable: true })
  noFilterField?: string;

  @TypeGraphQLField({ nullable: true })
  noSortField?: string;

  @TypeGraphQLField({ nullable: true })
  noFilterOrSortField?: string;

  @TypeGraphQLField({ nullable: true })
  numericField?: number;

  @TypeGraphQLField({ nullable: true })
  numericFieldCustomPrecisionScale?: number;

  @TypeGraphQLField({ nullable: true })
  charField?: string;

  @TypeGraphQLField({ nullable: true })
  characterField?: string;

  @TypeGraphQLField({ nullable: true })
  characterVaryingField?: string;

  @TypeGraphQLField({ nullable: true })
  textField?: string;

  @TypeGraphQLField({ nullable: true })
  varcharField?: string;

  @TypeGraphQLField(() => GraphQLJSONObject, { nullable: true })
  geometryField?: JsonObject;

  @TypeGraphQLField({ nullable: true })
  intField?: number;

  @TypeGraphQLField({ nullable: true })
  integerField?: number;

  @TypeGraphQLField({ nullable: true })
  int2Field?: number;

  @TypeGraphQLField({ nullable: true })
  int4Field?: number;

  @TypeGraphQLField({ nullable: true })
  int8Field?: number;

  @TypeGraphQLField({ nullable: true })
  float4Field?: number;

  @TypeGraphQLField({ nullable: true })
  float8Field?: number;

  @TypeGraphQLField({ nullable: true })
  doublePrecisionField?: number;

  @TypeGraphQLField({ nullable: true })
  password?: string;

  @TypeGraphQLField({ nullable: true })
  writeonlyField?: string;

  @TypeGraphQLField({ nullable: true })
  apiOnlyField?: string;
}

@TypeGraphQLInputType()
export class UserUpdateInput {
  @TypeGraphQLField({ nullable: true })
  booleanField?: boolean;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  dateField?: Date;

  @TypeGraphQLField(() => Date, { nullable: true })
  dateOnlyField?: DateOnlyString;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  dateTimeField?: DateTimeString;

  @TypeGraphQLField({ nullable: true })
  emailField?: string;

  @TypeGraphQLField(() => StringEnum, { nullable: true })
  enumField?: StringEnum;

  @TypeGraphQLField({ nullable: true })
  floatField?: number;

  @TypeGraphQLField({ nullable: true })
  realField?: number;

  @TypeGraphQLField(() => ID, { nullable: true })
  idField?: string;

  @TypeGraphQLField({ nullable: true })
  intFieldDefault?: number;

  @TypeGraphQLField({ nullable: true })
  smallIntField?: number;

  @TypeGraphQLField({ nullable: true })
  bigIntField?: number;

  @TypeGraphQLField(() => GraphQLJSONObject, { nullable: true })
  jsonField?: JsonObject;

  @TypeGraphQLField(() => GraphQLJSONObject, { nullable: true })
  jsonFieldNoFilter?: JsonObject;

  @TypeGraphQLField({ nullable: true })
  stringField?: string;

  @TypeGraphQLField({ nullable: true })
  noFilterField?: string;

  @TypeGraphQLField({ nullable: true })
  noSortField?: string;

  @TypeGraphQLField({ nullable: true })
  noFilterOrSortField?: string;

  @TypeGraphQLField({ nullable: true })
  numericField?: number;

  @TypeGraphQLField({ nullable: true })
  numericFieldCustomPrecisionScale?: number;

  @TypeGraphQLField({ nullable: true })
  charField?: string;

  @TypeGraphQLField({ nullable: true })
  characterField?: string;

  @TypeGraphQLField({ nullable: true })
  characterVaryingField?: string;

  @TypeGraphQLField({ nullable: true })
  textField?: string;

  @TypeGraphQLField({ nullable: true })
  varcharField?: string;

  @TypeGraphQLField(() => GraphQLJSONObject, { nullable: true })
  geometryField?: JsonObject;

  @TypeGraphQLField({ nullable: true })
  intField?: number;

  @TypeGraphQLField({ nullable: true })
  integerField?: number;

  @TypeGraphQLField({ nullable: true })
  int2Field?: number;

  @TypeGraphQLField({ nullable: true })
  int4Field?: number;

  @TypeGraphQLField({ nullable: true })
  int8Field?: number;

  @TypeGraphQLField({ nullable: true })
  float4Field?: number;

  @TypeGraphQLField({ nullable: true })
  float8Field?: number;

  @TypeGraphQLField({ nullable: true })
  doublePrecisionField?: number;

  @TypeGraphQLField({ nullable: true })
  password?: string;

  @TypeGraphQLField({ nullable: true })
  writeonlyField?: string;

  @TypeGraphQLField({ nullable: true })
  apiOnlyField?: string;
}

@ArgsType()
export class UserWhereArgs extends PaginationArgs {
  @TypeGraphQLField(() => UserWhereInput, { nullable: true })
  where?: UserWhereInput;

  @TypeGraphQLField(() => UserOrderByEnum, { nullable: true })
  orderBy?: UserOrderByEnum;
}

@ArgsType()
export class UserCreateManyArgs {
  @TypeGraphQLField(() => [UserCreateInput])
  data!: UserCreateInput[];
}

@ArgsType()
export class UserUpdateArgs {
  @TypeGraphQLField() data!: UserUpdateInput;
  @TypeGraphQLField() where!: UserWhereUniqueInput;
}
