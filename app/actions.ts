'use server';

export async function serverConsole() {
  console.log('Hello, Server!');
}
export async function serverError() {
  throw new Error('Server Error!');
}
