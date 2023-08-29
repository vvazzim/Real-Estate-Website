import { Box ,Flex,Text,Image} from "@chakra-ui/react";
import {TbQuote} from "react-icons/tb"
const TestimonialsCard = ({name,image,company,testimonial}) => {
    return (
       <Box backgroundColor={"#ffffff"} 
            padding="3rem"
            display="flex"
            flexDirection={"column"}
            marginBottom={{base:"1rem",sm:"0"}}
            >
                <Box>
<TbQuote size="40" color="#4299e1" />

                </Box>
                <Text fontSize={"lg"}
                color="gray.500"
                marginY="1.8rem">{testimonial}
                </Text>
                <Flex>
                    <Image src={image} width={"6rem"} height={"6rem"} objectFit={"cover"} borderRadius={"full"} />
              <Box>by <Text as="span">{name}</Text></Box>
                <Text fontSize={"lg"} fontStyle={"italic"} fontWeight={"light"} color="gray.600"
                >Company - {company}</Text>
                </Flex>
       </Box>
);
};
 
export default TestimonialsCard;