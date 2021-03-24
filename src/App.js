import './App.scss';
import MainScreen from './containers/MainScreen';
import Layout from './Layout/Layout';

function App() {
  return (
    <div className="App">
      <Layout>
      <MainScreen/>
      </Layout>
    </div>
  );
}

export default App;
