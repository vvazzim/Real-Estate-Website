const PropertySingle = ({property}) => {
    console.log(property);
    return (  <><>TEST</></>);
}
 
export default PropertySingle;

export async function getServerSideProps(context){

    const property =require=("@/features/data/property");
    return{
props:{property}

    };
}