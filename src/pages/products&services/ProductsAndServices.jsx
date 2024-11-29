import ProductSpecs from "pages/sitehome/productspecs/productspecs";
import { 
  productSpecificationTitle,
  productSpecificationList,
} from 'data/sitehome';
import ServiceOfferings from "pages/sitehome/serviceofferings/serviceofferings";
import ParticleBg from "pages/ui/particlebg";

const ProductsAndServices = () => {
  return (
    <div>
      <ServiceOfferings fromWhere='upperNav' />
      <ProductSpecs fromWhere='upperNav' productsTitle={productSpecificationTitle} productsList={productSpecificationList}/>
    </div>
  );
}

export default ProductsAndServices;