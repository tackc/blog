# Blog App - React Native

Basic Blog App bootstrapped with react-native
```
npx expo-cli init
```

App navigation with react-navigation
```
yarn add react-navigation
```

Using custom provider rather than Redux for global state management

### Persisting Data
Using json-server to persist data and ngrok to enable tunnel into local machine for testing

* To start the server, navigate to 'jsonserver' directory
```
  npm run db
```

* Then turn on the tunnel, open a separate terminal window (jsonserver directory)
```
  npm run tunnel
```