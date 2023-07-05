import { TypeOf, ZodType } from 'zod';

export function withValidation<T extends ZodType<any>>(
  schema: T,
  data: unknown
): TypeOf<T> {
  const validatedData = schema.parse(data);
  return data;
}
