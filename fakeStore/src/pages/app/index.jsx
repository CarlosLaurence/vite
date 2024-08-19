import { useRoutes, BrowserRouter } from 'react-router-dom';
import Home from '../home'
import NotFound from '../notFound'
import Navbar from '../../components/layout/Navbar';
import Layout from '../../components/layout/Layout';

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/clothes', element: <Home /> },
    { path: '/electronics', element: <Home /> },
    { path: '/*', element: <NotFound /> },
  ]);
  return routes;
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <AppRoutes />
      </Layout>
      <Navbar />
    </BrowserRouter>
    
  )
}
