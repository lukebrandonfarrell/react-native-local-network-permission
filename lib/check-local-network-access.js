import { NativeModules, Platform } from 'react-native';
const { RNLocalNetworkPermission } = NativeModules;
const DEFAULT_TIMEOUT_WAITING_FOR_LOCAL_NETWORK_CHECKING = 1;
/**
 * following function also will trigger the local network permission dialog if it never show up
 * when the permission wasn't granted, the false result will return soon
 * but when the permission was granted, we only can wait for some seconds and assume it is positive result
 */
export const checkLocalNetworkAccess = (timeoutSeconds) => {
    if (Platform.OS === 'ios') {
        return RNLocalNetworkPermission.check(timeoutSeconds !== null && timeoutSeconds !== void 0 ? timeoutSeconds : DEFAULT_TIMEOUT_WAITING_FOR_LOCAL_NETWORK_CHECKING);
    }
    return Promise.resolve(true);
};
