/**
 * following function also will trigger the local network permission dialog if it never show up
 * when the permission wasn't granted, the false result will return soon
 * but when the permission was granted, we only can wait for some seconds and assume it is positive result
 */
export declare const checkLocalNetworkAccess: (timeoutSeconds?: number | undefined) => Promise<boolean>;
