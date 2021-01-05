import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Layout, Button, ApplicationProvider} from '@ui-kitten/components';
import { default as theme } from './src/definitions/theme.json';
import * as eva from "@eva-design/eva";
import Test from "./src/components/Test"

export default function App() {
  return (
    <>
      <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
        <Test/>
        <StatusBar style="auto" />
      </ApplicationProvider>
    </>
  );
}

