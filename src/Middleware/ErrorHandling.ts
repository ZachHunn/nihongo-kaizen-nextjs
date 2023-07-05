export class NotFoundError extends Error {
  readonly status: number;
  readonly name: string;
  readonly message: string;
  constructor(message?: string) {
    super('ApiError');
    this.status = 404;
    this.message = message ?? 'This request entity could not be found';
    this.name = 'NotFoundError';
  }
}

export class PermissionsError extends Error {
  readonly status: number;
  readonly name: string;
  readonly message: string;
  constructor(message?: string) {
    super('PermissionError');
    this.status = 403;
    this.message =
      message ?? 'You do not have the permissions to perform this action';
    this.name = 'PermissionError';
  }
}

export class BadRequestError extends Error {
  readonly status: number;
  readonly name: string;
  readonly message: string;

  constructor(message?: string) {
    super('BadRequestError');
    this.status = 400;
    this.name = 'BadRequestError';
    this.message = message ?? 'The URI is incorrect';
  }
}

export class MethodNotAllowedError extends Error {
  readonly status: number;
  readonly name: string;
  readonly message: string;

  constructor(message?: string) {
    super('MethodNotAllowedError');
    this.status = 405;
    this.name = 'MethodNotAllowed';
    this.message = message ?? 'This method is not allowed';
  }
}

export class AppError extends Error {
  readonly status: number;
  readonly name: string;
  readonly message: string;

  constructor(status: number, message: string) {
    super('App Error');
    this.status = status;
    this.name = 'AppError';
    this.message = message;
  }
}
