import { Box , Flex , Text } from "@chakra-ui/react";
import {HiHomeModern} from "react-icons/hi2"
import Link from "next/link";
import { navigationLinks } from "../../navigationConsts";
import { Button, ButtonGroup } from '@chakra-ui/react'
const NavigationDesktop = () => {
    return (
    <Box color="blue.600" paddingY="2rem" backgroundColor="white"
     display = {{base:"none" ,md:"block"}}>
       
<Box maxWidth="1280px" margin ="0 auto">
<Flex alignItems="center" justifyContent="space-between">
<Link href="/">
<Box display='flex' gap="2" alignItems="center">
<HiHomeModern size="30" />
<Text fontSize="2xl" fontWeight="black">
    HNC
</Text>
</Box>
</Link>
<Flex gap='12' alignItems="center" fontWeight="medium">




{navigationLinks.map((item) => (
<NavigationLink key ={item.title}{...item}/>

))} 
<Button paddingY='1.5rem' colorScheme="twitter" fontSize='0.8rem' fontWeight='medium'>Create Listing
</Button>
</Flex>

</Flex>
</Box>
</Box>
 );
}
 
export default NavigationDesktop;
const NavigationLink = ({title,link,icon}) => {

    return (
        <Link href={link}>
        <Flex alignItems="center"  gap="0.5">
            {icon}{title}
        </Flex>
        </Link>
    )
}
