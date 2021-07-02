import { checkLocalNetworkAccess } from "./check-local-network-access";
/**
 * following function also will trigger the local network permission dialog if it never show up
 */
export const requestLocalNetworkAccess = () => {
    return checkLocalNetworkAccess()
        .then((value) => Promise.resolve(value))
        .catch((error) => Promise.reject(error));
};
