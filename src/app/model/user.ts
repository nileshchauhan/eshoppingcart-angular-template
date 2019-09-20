export interface User {
    userId: number;
    userName: string;
    password: string;
    firstName: string;
    lastName: string;
    role: string;
    token?: string;
    access_token?: string;
}

export interface IdToken {
    accessToken: string;
    cognitoPoolId: string;
    email: string;
    id: string;
    idToken: string;
    isLoggedIn: boolean;
    Roles: string;
    userId: string;
    username: string;
    sub: string;
    iss: string;
}
