# Co-collect App

## Motivation

Recently in Germany were introduced some temporary restrictions, where owners of Restaurants, Bars, Barbershops etc. 
are obligatory to *collect* visitors information. 
This aims to keep track off contacts and can potentially help to localize spread of virus *Co*vid-19.

This Proof of concept shows, how to automate process of collecting personal information by contactless scanning and generating QR codes. 

## Stack
This example uses [React Native App](https://reactnative.dev/) together with [AWS Amplify](https://docs.amplify.aws/)

## 🚀 How to use

### Expo app
Install the CLI: 
```bash
npm i -g expo-cli`
```
Start app:
```bash
npm start
```
Publish app:
```bash
expo publish
```

#### 📝 Notes

- [Expo TypeScript guide](https://docs.expo.io/versions/latest/guides/typescript/)


### Amplify
Install cli tool:
```bash
npm install -g @aws-amplify/cli
```
Check status:
```bash
amplify status
```
Load current env:
```bash
amplify pull
```
Update infra:
```bash
amplify push
```
