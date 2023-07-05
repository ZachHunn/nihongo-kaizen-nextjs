import { server } from './mswServer';
import { afterAll, afterEach, beforeAll } from 'vitest';

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
