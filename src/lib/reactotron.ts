import Reactotron from "reactotron-react-native"

export const reactotron = Reactotron.configure({ name: "Klocka RN App" }).useReactNative().connect()

export default reactotron
