'use server';

export async function serverConsole() {
  console.error('Hello, Server!');
}
export async function serverError() {
  throw new Error('Server Error!');
}
