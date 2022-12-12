import { ScreenSize } from "./ScreenSize";

export function customSize(size) {
    return size / 375 * ScreenSize.width ;   
}