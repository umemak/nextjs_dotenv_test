import 'dotenv/config'

export async function GET() {
  const serverEnvVar = process.env.SERVER_ENV_VAR;
  console.log("serverEnvVar: ", serverEnvVar);
  return Response.json({ serverEnvVar });
}
