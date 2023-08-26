import Footer from "@/features/data/common/modules/Footer";
import Navigation from "@/features/data/common/modules/Navigation";

const DefaultLayout  = ({children}) => {
    return (  
 <>
 <Navigation/>
 {children}
 <Footer/>
 <>TEST </>
 
 </>


    );
}
 
export default DefaultLayout;