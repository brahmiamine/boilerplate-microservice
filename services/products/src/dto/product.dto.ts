import { IsString, IsNumber, IsOptional } from "class-validator";

export class CreateProductDTO {
  @IsString()
  name!: string; // "!" indique à TypeScript que cette propriété sera assignée

  @IsString()
  description!: string;

  @IsNumber()
  price!: number;

  @IsOptional()
  @IsString()
  image?: string;
}
