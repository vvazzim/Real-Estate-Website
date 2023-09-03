import DefaultLayout from '@/features/Layouts/DefaultLayout';
import PropertyCard from '@/features/common/modules/PropertyCard';
import { Box , SimpleGrid} from '@chakra-ui/react';

const Properties = ({properties}) => {
    return ( 
<DefaultLayout>
<Box backgroundColor={"#f7f8f9"} 
padding="3rem">
<Box  maxWidth={"1280px"} 
margin="0 auto"></Box>
    <SimpleGrid columns={{ base: 1, sm: 2 }} gap={{ base: '0', sm: '2rem' }}>
        {properties.map((property) => (
            <PropertyCard key={property.id} {...property} />
        ))}
    </SimpleGrid>


</Box>

</DefaultLayout>


    );
}
 
export default Properties;

export async function getStaticProps(){
    const {hits} = require('@/features/data/properties');
    return{
      props:{properties:hits}
    };
    }