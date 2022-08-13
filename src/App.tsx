import {ItemPreview} from "./components/screens/ItemPreview"
import {Provider} from "react-redux"
import {store} from "store";
import {Container} from "./components/Layouts/Container/Container";

export const App = () => {
  return (<Provider store={store}>
    <Container>
    <ItemPreview/>
    </Container>
  </Provider>)
}