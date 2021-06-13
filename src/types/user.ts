export type UserRole = 'admin' | 'user'

export interface UserType {
  name: string;
  role: UserRole;
}