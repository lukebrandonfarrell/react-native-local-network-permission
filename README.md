# React Native Local Network Permission

A temporary lib to handle the local network permission after iOS 14

## Getting started

`$ npm install react-native-local-network-permission`
`$ yarn add react-native-local-network-permission`

## Usage

```javascript
import { checkLocalNetworkAccess, requestLocalNetworkAccess } from 'react-native-local-network-permission';

//you need to make sure the local network permission dialog popup once
const result = await requestLocalNetworkAccess();

//then use checkLocalNetworkAccess when you need
const result = await checkLocalNetworkAccess();
//here run the code depends local network access
```
