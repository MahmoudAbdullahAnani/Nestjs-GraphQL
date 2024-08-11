import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsOptional, IsPhoneNumber } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field()
  name: string;
  @Field()
  @IsEmail({}, { message: 'Email Not Valid' })
  email: string;
  @Field({ nullable: true })
  @IsOptional()
  @IsPhoneNumber('EG', { message: 'phoneNumber Not Valid' })
  phoneNumber: string;
}
