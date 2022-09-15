import 'dotenv/config';

const PORT = process.env.PORT || 4040;

export const WELCOME_MESSAGE = `Welcome to Med-Search App API! \n Access our Endpoint at http://localhost:${PORT}/api/v2`
export const DEBUG_MESSAGE = "Server is running on port";
export const DEBUG_ERROR_MESSAGE = "Error occurred:"

