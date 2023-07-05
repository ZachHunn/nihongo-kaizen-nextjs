import { z } from 'zod';
import { NextRequest, NextResponse } from 'next/server';
import { AppError, MethodNotAllowedError } from '@/Middleware/ErrorHandling';

export const GET = async (req: NextRequest) => {
  const { method } = req;

  if (method !== 'GET') {
    throw new MethodNotAllowedError();
  }
};
