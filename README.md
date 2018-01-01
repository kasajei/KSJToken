# Welcome to KSJToken's repository!!

KSJToken is a [@kasajei](http://twitter.com/kasajei)'s token.

## Instrattion

```
npm install -g truffle
npm install
```

## Compile & Deveply

### on Local

```
truffle compile
truffle truffle develop # 
```

### on Development(ex: Ganache)

A development port is 7545 (see [truffle.js](truffle.js)). [Ganache](http://truffleframework.com/ganache/)'s  default port is 7545.

```
truffle migrate --network development
truffle console --network development
```

### on Ropsten

You need mnemonic and [infura](https://infura.io) API Key (see [truffle.js](truffle.js)).

```
export ROPSTEN_MNEMONIC = "mnemonic here"
export INFURA_ACCESS_TOKEN = "infura api key here"
```

```
truffle migrate --network development
truffle console --network development
```