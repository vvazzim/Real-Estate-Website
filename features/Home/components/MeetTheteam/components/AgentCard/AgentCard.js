import { Box, Image ,Text} from "@chakra-ui/react";

const AgentCard = ({name,image,description,title}) => {
    return (
<Box backgroundColor={"white"}
     padding="2rem"
     display={'flex'}
     flexDirection={'column'}
     justifyContent={'center'} 
     alignItems={"center"}
     textAlign={"center"}
     marginBottom={{base:"1rem",sm:'0'}}  
        >
<Image
src={image} width="10rem" height={"10rem"}
objectFit="cover"
TbBorderRadius="full"
marginBottom={'2rem'}
shadpw="md"
/>
<Text color="blue.400"
fontSize={"xl"}
fontWeight={"bold"}>{name}</Text>
<Text fontSize={"lg"}
color="blackAlpha.600"> {title}</Text>
<Text fontSize={'md'}
fontWeight={'light'}
noOfLines={"4"}
marginto="1rem"
color="gray.600"
>{description}
</Text>
</Box>

     );
}
 
export default AgentCard ;