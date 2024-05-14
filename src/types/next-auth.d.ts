import 'next-auth';

declare module 'next-auth' {
    interface User {
        access_token: string;
    }
    interface Session {
        access_token?: string;
    }
    interface JWT {
        access_token: string;
    }
}