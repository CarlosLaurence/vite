import { useRoutes, BrowserRouter } from 'react-router-dom';
import Home from '../home'
import NotFound from '../notFound'
import Navbar from '../../components/layout/Navbar';
import Layout from '../../components/layout/Layout';
import { ShopiProvider } from '../../components/context';
import CheckOutSideMenu from '../../components/utilidades/CheckOutSideMenu';
import AppRoutes from '../../components/layout/AppRoutes';



export default function App() {
  return (
    <ShopiProvider>
      <BrowserRouter>
        <Layout>
          <AppRoutes />
        </Layout>
        <Navbar />
        <CheckOutSideMenu />
      </BrowserRouter>
    </ShopiProvider>

    
  )
}
