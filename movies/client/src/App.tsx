import { Provider } from 'react-redux';
import { Route,BrowserRouter} from 'react-router-dom'
import Layout from './pages/Layout';
import { store } from './redux/store';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/" component={Layout}></Route>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
