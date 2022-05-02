/* Database Error */

export const ERROR_DB_ENVIOURNMENT_NOT_DEFIND = `Please define MONGO_DB in .env.local
 file for that create account on mongodb and put cluster example like 
MONGO_DB=mongodb+srv://<name>:<password>@cluster0.m4huf.mongodb.net/myFirstDatabase?
retryWrites=true&w=majority in .env.local and please replace name and password with your own`;

export const ERROR_DB_CONNECTION_ERROR = "error during connecting to database";

/* Email Error */
export const ERROR_EMAIL_ALREADY_EXITS = "Email Already Exits";
export const ERROR_EMAIL_INVALID = "Invalid Email";
export const ERROR_EMAIL_REQUIRED = "Required Email";

/* Access */
export const ERROR_ACCESS_FORBIDDEN = "access forbidden";
export const ERROR_ACCESS_KEY_NOT_PROVIDED =
  "put SECRET_KEY_TOKEN enviornment variable in .env file";

/* Password Error */
export const ERROR_PASSWORD_MIN_LENGTH =
  "Minimum 6 Charector Required in Password";
export const ERROR_PASSWORD_REQUIRED = "Required Password";
export const ERROR_PASSWORD_DONT_MATCH = "password don't match";

/* user */
export const ERROR_USER_NOT_FOUND = "User Not Found";
