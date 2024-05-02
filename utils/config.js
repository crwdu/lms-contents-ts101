import { VERCEL_ENVS } from "../constants/config";

export const isLocalEnv = (env) => {
  return !VERCEL_ENVS.includes(env);
};
