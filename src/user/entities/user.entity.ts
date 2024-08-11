import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field({ description: 'id on this user' })
  id: string;
  @Field()
  name: string;
  @Field()
  email: string;
  @Field({ nullable: true })
  phoneNumber: string;
}

// getUsers
@ObjectType()
export class Users {
  @Field(() => Int)
  statue: number;
  @Field(() => [User])
  data: User[];
  @Field(() => Int)
  count: number;
}
