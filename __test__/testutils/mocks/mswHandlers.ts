import { rest } from 'msw';
import { EUri } from '../../../src/const/enums';

export const handlers = [
  rest.get(EUri.KANA, (_, res, ctx) => {
    return res(ctx.status(200));
  }),
];
