import React from 'react';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'

import { store, persistor } from './app/store'

import { StyleSheet, Text, View } from 'react-native';
import { Topics } from './app/components/Topics'


export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Topics/>
            </PersistGate>
            </Provider>
        )
    }
}
