import { ItemPreview } from "./components/screens/ItemPreview/ItemPreview"
import {Provider} from "react-redux"
import {store} from "store";

export const App = () => {
  return (<Provider store={store}>
    <ItemPreview/>
  </Provider>)
}