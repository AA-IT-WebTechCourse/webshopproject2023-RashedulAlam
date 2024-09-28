export type TLogin = {
  username: string;
  password: string;
};

export type TRegisterUser = {
  username: string;
  password: string;
  confirmPassword: string;
  email: string;
};

export type TUpdateUserAccount = {
  password: string;
  newPassword: string;
  newConfirmPassword: string;
};

export interface ILoginResponse {
  access: string;
}


export interface ICurrentUserDetails {
  username: string;
  email: string;
}