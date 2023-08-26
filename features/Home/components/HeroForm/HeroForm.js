import { Box, FormControl, Input, Text, Flex, Checkbox, Button } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

const HeroForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }, // Corrected variable name
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <Box
        width="100%"
        padding="2rem"
        borderRadius="sm"
        backgroundColor="white"
        color="gray.700"
      >
        <Text fontSize="xl" fontWeight="bold">
          Free PDF GUIDE
        </Text>
        <Text fontSize="lg">Complete the form below</Text>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl>
            <Input
              marginTop="1.3rem"
              id="name"
              type="text"
              placeholder="Name"
              {...register("name", { required: true })}
            />
            {errors.name && ( // Corrected variable name
              <Text fontSize="xs" color="red.400">
                {errors.name.type} {/* Changed errorToJSON to errors */}
              </Text>
            )}
            <Flex gap={{base:"0" ,sm:'1rem'}}
            flexDirection={{base:"column",sm:"row"}}>
              <Input
                marginTop="1.3rem"
                id="email"
                type="email"
                placeholder="Email"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <Text fontSize="xs" color="red.400">
                  {errors.email.type} {/* Changed errorToJSON to errors */}
                </Text>
              )}
              <Input
                marginTop="1.3rem"
                id="phone"
                type="text"
                placeholder="Phone"
                {...register("phone", { required: true })}
              />
              {errors.phone && (
                <Text fontSize="xs" color="red.400">
                  {errors.phone.type} {/* Changed errorToJSON to errors */}
                </Text>
              )}
            </Flex>
            <Checkbox marginTop='1.3rem' id='gdpr'
            type="checkbox" placeholder="GFPR" {...register('gdpr',{required:true})}>
                I consent to having this website store my info

            </Checkbox>
            {errors.gdpr && (
                 <Text fontSize="xs" color="red.400">
                 {errors.gdpr.type} {/* Changed errorToJSON to errors */}
               </Text>

            )}
          </FormControl>
          <Button type="submit" colorScheme="blue" 
                  width="100%" fontSize="xl" padding="2rem"
                  marginTop="2rem"
          >Submit</Button>
        </form>
      </Box>
    </>
  );
};

export default HeroForm;
