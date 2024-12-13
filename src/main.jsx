import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import ProductCategorySection from './Components/ProductCategorySection'
import ProductSection from './Components/ProductSection'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Header></Header>
   <ProductCategorySection></ProductCategorySection>
   <ProductSection></ProductSection>
   <Footer></Footer>
  </StrictMode>,
)
