export interface emailVerifyResponse {
    success: boolean;
    message: string;
    password_reset_token: string;
  }
  
  export interface forgotPasswordResponse {
    success: boolean;
    message: string;
  }
  
  export interface resetPasswordResponse {
    success: boolean;
    message: string;
  }
  
  export interface resetPasswordForm {
    password: string;
    confirm_password: string;
  }
  
  export interface RefreshTokenResponse {
    access_token: string;
    roles:[]
  }
  
  