import Footer from "@/features/common/modules/Footer";
import Navigation from "@/features/common/modules/Navigation";

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