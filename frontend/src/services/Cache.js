import AsyncStorage from '@react-native-async-storage/async-storage';

export function set(key, value) {
    AsyncStorage.setItem(key, JSON.stringify(value))
}

export function get(key) {
    return AsyncStorage.getItem(key) 
}

export function merge(key, value) {
    AsyncStorage.mergeItem(key, JSON.stringify(value))
}

export function rm(key) {
    AsyncStorage.removeItem(key) 
}