export interface IUser {
  email: string,
  password : string,
}

export interface Response extends Object{
  success: boolean
  token: string
}
