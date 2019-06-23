// This file has been auto-generated by Warthog.  Do not update directly as it
// will be re-written.  If you need to change this file, update models or add
// new TypeGraphQL objects
import {
  ArgsType,
  Field as TypeGraphQLField,
  Float,
  ID,
  InputType as TypeGraphQLInputType,
  Int
} from "type-graphql";
import { registerEnumType } from "type-graphql";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { GraphQLJSONObject } = require("graphql-type-json");

import { BaseWhereInput, PaginationArgs } from "../../../src";
import { User } from "../src/join-with-metadata/user.model";
import { UserRole } from "../src/join-with-metadata/user-role.model";
import { Role } from "../src/join-with-metadata/role.model";
import { Post } from "../src/simple-join-table/post.model";
import { Author } from "../src/simple-join-table/author.model";

export enum UserOrderByEnum {
  createdAt_ASC = "createdAt_ASC",
  createdAt_DESC = "createdAt_DESC",

  updatedAt_ASC = "updatedAt_ASC",
  updatedAt_DESC = "updatedAt_DESC",

  deletedAt_ASC = "deletedAt_ASC",
  deletedAt_DESC = "deletedAt_DESC",

  firstName_ASC = "firstName_ASC",
  firstName_DESC = "firstName_DESC"
}

registerEnumType(UserOrderByEnum, {
  name: "UserOrderByInput"
});

@TypeGraphQLInputType()
export class UserWhereInput extends BaseWhereInput {
  @TypeGraphQLField({ nullable: true })
  firstName_eq?: string;

  @TypeGraphQLField({ nullable: true })
  firstName_contains?: string;

  @TypeGraphQLField({ nullable: true })
  firstName_startsWith?: string;

  @TypeGraphQLField({ nullable: true })
  firstName_endsWith?: string;

  @TypeGraphQLField(() => [String], { nullable: true })
  firstName_in?: string[];
}

@TypeGraphQLInputType()
export class UserWhereUniqueInput {
  @TypeGraphQLField(() => String)
  id?: string;
}

@TypeGraphQLInputType()
export class UserCreateInput {
  @TypeGraphQLField()
  firstName!: string;
}

@TypeGraphQLInputType()
export class UserUpdateInput {
  @TypeGraphQLField({ nullable: true })
  firstName?: string;
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

export enum UserRoleOrderByEnum {
  createdAt_ASC = "createdAt_ASC",
  createdAt_DESC = "createdAt_DESC",

  updatedAt_ASC = "updatedAt_ASC",
  updatedAt_DESC = "updatedAt_DESC",

  deletedAt_ASC = "deletedAt_ASC",
  deletedAt_DESC = "deletedAt_DESC",

  userId_ASC = "userId_ASC",
  userId_DESC = "userId_DESC",

  roleId_ASC = "roleId_ASC",
  roleId_DESC = "roleId_DESC",

  otherMetadata_ASC = "otherMetadata_ASC",
  otherMetadata_DESC = "otherMetadata_DESC"
}

registerEnumType(UserRoleOrderByEnum, {
  name: "UserRoleOrderByInput"
});

@TypeGraphQLInputType()
export class UserRoleWhereInput extends BaseWhereInput {
  @TypeGraphQLField(() => ID, { nullable: true })
  userId_eq?: string;

  @TypeGraphQLField(() => [ID], { nullable: true })
  userId_in?: string[];

  @TypeGraphQLField(() => ID, { nullable: true })
  roleId_eq?: string;

  @TypeGraphQLField(() => [ID], { nullable: true })
  roleId_in?: string[];

  @TypeGraphQLField({ nullable: true })
  otherMetadata_eq?: string;

  @TypeGraphQLField({ nullable: true })
  otherMetadata_contains?: string;

  @TypeGraphQLField({ nullable: true })
  otherMetadata_startsWith?: string;

  @TypeGraphQLField({ nullable: true })
  otherMetadata_endsWith?: string;

  @TypeGraphQLField(() => [String], { nullable: true })
  otherMetadata_in?: string[];
}

@TypeGraphQLInputType()
export class UserRoleWhereUniqueInput {
  @TypeGraphQLField(() => String)
  id?: string;
}

@TypeGraphQLInputType()
export class UserRoleCreateInput {
  @TypeGraphQLField()
  userId!: string;

  @TypeGraphQLField()
  roleId!: string;

  @TypeGraphQLField({ nullable: true })
  otherMetadata?: string;
}

@TypeGraphQLInputType()
export class UserRoleUpdateInput {
  @TypeGraphQLField({ nullable: true })
  userId?: string;

  @TypeGraphQLField({ nullable: true })
  roleId?: string;

  @TypeGraphQLField({ nullable: true })
  otherMetadata?: string;
}

@ArgsType()
export class UserRoleWhereArgs extends PaginationArgs {
  @TypeGraphQLField(() => UserRoleWhereInput, { nullable: true })
  where?: UserRoleWhereInput;

  @TypeGraphQLField(() => UserRoleOrderByEnum, { nullable: true })
  orderBy?: UserRoleOrderByEnum;
}

@ArgsType()
export class UserRoleCreateManyArgs {
  @TypeGraphQLField(() => [UserRoleCreateInput])
  data!: UserRoleCreateInput[];
}

@ArgsType()
export class UserRoleUpdateArgs {
  @TypeGraphQLField() data!: UserRoleUpdateInput;
  @TypeGraphQLField() where!: UserRoleWhereUniqueInput;
}

export enum RoleOrderByEnum {
  createdAt_ASC = "createdAt_ASC",
  createdAt_DESC = "createdAt_DESC",

  updatedAt_ASC = "updatedAt_ASC",
  updatedAt_DESC = "updatedAt_DESC",

  deletedAt_ASC = "deletedAt_ASC",
  deletedAt_DESC = "deletedAt_DESC",

  name_ASC = "name_ASC",
  name_DESC = "name_DESC"
}

registerEnumType(RoleOrderByEnum, {
  name: "RoleOrderByInput"
});

@TypeGraphQLInputType()
export class RoleWhereInput extends BaseWhereInput {
  @TypeGraphQLField({ nullable: true })
  name_eq?: string;

  @TypeGraphQLField({ nullable: true })
  name_contains?: string;

  @TypeGraphQLField({ nullable: true })
  name_startsWith?: string;

  @TypeGraphQLField({ nullable: true })
  name_endsWith?: string;

  @TypeGraphQLField(() => [String], { nullable: true })
  name_in?: string[];
}

@TypeGraphQLInputType()
export class RoleWhereUniqueInput {
  @TypeGraphQLField(() => String)
  id?: string;
}

@TypeGraphQLInputType()
export class RoleCreateInput {
  @TypeGraphQLField()
  name!: string;
}

@TypeGraphQLInputType()
export class RoleUpdateInput {
  @TypeGraphQLField({ nullable: true })
  name?: string;
}

@ArgsType()
export class RoleWhereArgs extends PaginationArgs {
  @TypeGraphQLField(() => RoleWhereInput, { nullable: true })
  where?: RoleWhereInput;

  @TypeGraphQLField(() => RoleOrderByEnum, { nullable: true })
  orderBy?: RoleOrderByEnum;
}

@ArgsType()
export class RoleCreateManyArgs {
  @TypeGraphQLField(() => [RoleCreateInput])
  data!: RoleCreateInput[];
}

@ArgsType()
export class RoleUpdateArgs {
  @TypeGraphQLField() data!: RoleUpdateInput;
  @TypeGraphQLField() where!: RoleWhereUniqueInput;
}

export enum PostOrderByEnum {
  createdAt_ASC = "createdAt_ASC",
  createdAt_DESC = "createdAt_DESC",

  updatedAt_ASC = "updatedAt_ASC",
  updatedAt_DESC = "updatedAt_DESC",

  deletedAt_ASC = "deletedAt_ASC",
  deletedAt_DESC = "deletedAt_DESC",

  name_ASC = "name_ASC",
  name_DESC = "name_DESC"
}

registerEnumType(PostOrderByEnum, {
  name: "PostOrderByInput"
});

@TypeGraphQLInputType()
export class PostWhereInput extends BaseWhereInput {
  @TypeGraphQLField({ nullable: true })
  name_eq?: string;

  @TypeGraphQLField({ nullable: true })
  name_contains?: string;

  @TypeGraphQLField({ nullable: true })
  name_startsWith?: string;

  @TypeGraphQLField({ nullable: true })
  name_endsWith?: string;

  @TypeGraphQLField(() => [String], { nullable: true })
  name_in?: string[];
}

@TypeGraphQLInputType()
export class PostWhereUniqueInput {
  @TypeGraphQLField(() => String)
  id?: string;
}

@TypeGraphQLInputType()
export class PostCreateInput {
  @TypeGraphQLField()
  name!: string;
}

@TypeGraphQLInputType()
export class PostUpdateInput {
  @TypeGraphQLField({ nullable: true })
  name?: string;
}

@ArgsType()
export class PostWhereArgs extends PaginationArgs {
  @TypeGraphQLField(() => PostWhereInput, { nullable: true })
  where?: PostWhereInput;

  @TypeGraphQLField(() => PostOrderByEnum, { nullable: true })
  orderBy?: PostOrderByEnum;
}

@ArgsType()
export class PostCreateManyArgs {
  @TypeGraphQLField(() => [PostCreateInput])
  data!: PostCreateInput[];
}

@ArgsType()
export class PostUpdateArgs {
  @TypeGraphQLField() data!: PostUpdateInput;
  @TypeGraphQLField() where!: PostWhereUniqueInput;
}

export enum AuthorOrderByEnum {
  createdAt_ASC = "createdAt_ASC",
  createdAt_DESC = "createdAt_DESC",

  updatedAt_ASC = "updatedAt_ASC",
  updatedAt_DESC = "updatedAt_DESC",

  deletedAt_ASC = "deletedAt_ASC",
  deletedAt_DESC = "deletedAt_DESC",

  firstName_ASC = "firstName_ASC",
  firstName_DESC = "firstName_DESC"
}

registerEnumType(AuthorOrderByEnum, {
  name: "AuthorOrderByInput"
});

@TypeGraphQLInputType()
export class AuthorWhereInput extends BaseWhereInput {
  @TypeGraphQLField({ nullable: true })
  firstName_eq?: string;

  @TypeGraphQLField({ nullable: true })
  firstName_contains?: string;

  @TypeGraphQLField({ nullable: true })
  firstName_startsWith?: string;

  @TypeGraphQLField({ nullable: true })
  firstName_endsWith?: string;

  @TypeGraphQLField(() => [String], { nullable: true })
  firstName_in?: string[];
}

@TypeGraphQLInputType()
export class AuthorWhereUniqueInput {
  @TypeGraphQLField(() => String)
  id?: string;
}

@TypeGraphQLInputType()
export class AuthorCreateInput {
  @TypeGraphQLField()
  firstName!: string;
}

@TypeGraphQLInputType()
export class AuthorUpdateInput {
  @TypeGraphQLField({ nullable: true })
  firstName?: string;
}

@ArgsType()
export class AuthorWhereArgs extends PaginationArgs {
  @TypeGraphQLField(() => AuthorWhereInput, { nullable: true })
  where?: AuthorWhereInput;

  @TypeGraphQLField(() => AuthorOrderByEnum, { nullable: true })
  orderBy?: AuthorOrderByEnum;
}

@ArgsType()
export class AuthorCreateManyArgs {
  @TypeGraphQLField(() => [AuthorCreateInput])
  data!: AuthorCreateInput[];
}

@ArgsType()
export class AuthorUpdateArgs {
  @TypeGraphQLField() data!: AuthorUpdateInput;
  @TypeGraphQLField() where!: AuthorWhereUniqueInput;
}