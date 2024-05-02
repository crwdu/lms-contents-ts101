import { DEPLOYMENT_ENVS } from "../constants/config";

export const isDeployed = () => {
  const environment =
    process.env.VERCEL_ENV || process.env.NEXT_PUBLIC_VERCEL_ENV;

  return DEPLOYMENT_ENVS.includes(environment);
};
