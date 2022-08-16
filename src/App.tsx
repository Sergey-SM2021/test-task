import { memo } from 'react';
import { Provider } from 'react-redux';
import { ItemPreview } from './components/screens/ItemPreview';
import { store } from 'store';
import { Container } from './components/Layouts/Container/Container';

export const App = memo(() => {
  return (<Provider store={store}>
    <Container>
      <ItemPreview />
    </Container>
  </Provider>)
})