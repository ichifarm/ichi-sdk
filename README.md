# ichi-sdk
🛠 An SDK for building applications on top of ichi

[![Unit Tests](https://github.com/ichifarm/ichi-sdk/actions/workflows/unit-test.yml/badge.svg)](https://github.com/ichifarm/ichi-sdk/actions/workflows/unit-test.yml)

### What does this do?
Provides all the address of the OneTokenFactory, modules, and oneTokens on Mainnet and testnet.

### Install in your project
``` 
npm i @ichi.org/sdk
```

### Usage
```
import { ChainId, oneTokenFactory } from '@ichi.org/sdk'
const factoryAddress = oneTokenFactory[ChainId.MAINNET]
```

## Development
### Install
```
yarn install
```
### Tests
```
yarn test
```
