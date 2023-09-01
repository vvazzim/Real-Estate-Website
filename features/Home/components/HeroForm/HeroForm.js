import { useState } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
  Select,
  Checkbox
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import axios from "axios";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";



const HeroForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const closeSuccessAlert = () => {
    setIsSuccess(false);
  };

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    country: "",
    state: "",
    profession: "",
    financing_type: "",
    housing_type: "",
    gdpr: false,
  });

  const onSubmit = async (data) => {
    // Mise à jour de l'état local avec les données du formulaire
    console.log(data);
    setFormData(data);
    setIsModalOpen(false);
    try {
      // Envoyer les données du formulaire au backend
      const response = await axios.post("http://localhost:8081/appointment", data); // Utilisez l'URL appropriée pour votre backend

      // Traitez la réponse du backend ici si nécessaire
      console.log("Backend Response:", response.data);

      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
      }, 4000);

      // Réinitialisez les champs du formulaire manuellement
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        country: "",
        state: "",
        profession: "",
        financing_type: "",
        housing_type: "",
        gdpr: false,
      });
    } catch (error) {
      console.error("API Error:", error);
    }
  };

  return (
      <>
        <Button onClick={openModal} colorScheme="blue" fontSize="xl" marginTop="2rem">
          Prendre un RDV
        </Button>

        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Prendre un RDV</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl isInvalid={errors.first_name}>
                  <FormLabel htmlFor="first_name">First Name</FormLabel>
                  <Input
                      id="first_name"
                      type="text"
                      placeholder="First Name"
                      {...register("first_name", { required: true })}
                  />
                  <FormErrorMessage>
                    {errors.first_name && "First Name is required"}
                  </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.last_name}>
                  <FormLabel htmlFor="last_name">Last Name</FormLabel>
                  <Input
                      id="last_name"
                      type="text"
                      placeholder="Last Name"
                      {...register("last_name", { required: true })}
                  />
                  <FormErrorMessage>
                    {errors.last_name && "Last Name is required"}
                  </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.country}>
                  <FormLabel htmlFor="country">Country</FormLabel>
                  <Select
                      id="country"
                      placeholder="Select Country"
                      {...register("country", { required: true })}
                  >
                    <option value="Algeria">Algeria</option>
                    {/* Ajoutez d'autres options de pays ici */}
                  </Select>
                  <FormErrorMessage>
                    {errors.country && "Country is required"}
                  </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={errors.state}>
                  <FormLabel htmlFor="state">State</FormLabel>
                  <Select
                      id="state"
                      placeholder="Select State"
                      {...register("state", { required: true })}
                  >
                    <option value="Alger">Alger</option>
                    {/* Ajoutez d'autres options d'état ici */}
                  </Select>
                  <FormErrorMessage>
                    {errors.state && "State is required"}
                  </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={errors.profession}>
                  <FormLabel htmlFor="profession">Profession</FormLabel>
                  <Input
                      id="profession"
                      type="text"
                      placeholder="Profession"
                      {...register("profession", { required: true })}
                  />
                  <FormErrorMessage>
                    {errors.profession && "Profession is required"}
                  </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={errors.financing_type}>
                  <FormLabel htmlFor="financing_type">Finance Type</FormLabel>
                  <Select
                      id="financing_type"
                      placeholder="Select Financing Type"
                      {...register("financing_type", { required: true })}
                  >
                    <option value="Cash">Cash</option>
                    <option value="Credit Bancaire">Credit Bancaire</option>
                  </Select>
                  <FormErrorMessage>
                    {errors.financing_type && "Financing Type is required"}
                  </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={errors.housing_type}>
                  <FormLabel htmlFor="housing_type">Housing Type</FormLabel>
                  <Select
                      id="housing_type"
                      placeholder="Select Housing Type"
                      {...register("housing_type", { required: true })}
                  >
                    <option value="F2">F2</option>
                    <option value="F3">F3</option>
                    <option value="F4">F4</option>
                    <option value="Penthouse">Penthouse</option>
                  </Select>
                  <FormErrorMessage>
                    {errors.housing_type && "Housing Type is required"}
                  </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={errors.email}>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input
                      id="email"
                      type="email"
                      placeholder="Email"
                      {...register("email", { required: true })}
                  />
                  <FormErrorMessage>
                    {errors.email && "Email is required"}
                  </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={errors.phone}>
                  <FormLabel htmlFor="phone">Phone</FormLabel>
                  <Input
                      id="phone"
                      type="text"
                      placeholder="Phone"
                      {...register("phone", { required: true })}
                  />
                  <FormErrorMessage>
                    {errors.phone && "Phone is required"}
                  </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={errors.gdpr}>
                  <Checkbox
                      id="gdpr"
                      {...register("gdpr", { required: true })}
                  >
                    I consent to having this website store my info
                  </Checkbox>
                  <FormErrorMessage>
                    {errors.gdpr && "You must consent to GDPR"}
                  </FormErrorMessage>
                </FormControl>

                <Button type="submit" colorScheme="blue" marginTop="2rem">
                  Submit
                </Button>
              </form>
            </ModalBody>
          </ModalContent>
        </Modal>

        {/*{isSuccess && (*/}
        {/*    <Alert*/}
        {/*        status="success"*/}
        {/*        variant="subtle"*/}
        {/*        flexDirection="column"*/}
        {/*        alignItems="center"*/}
        {/*        justifyContent="center"*/}
        {/*        textAlign="center"*/}
        {/*        height="200px"*/}
        {/*        onClose={closeSuccessAlert}*/}
        {/*        style={{*/}
        {/*          position: "fixed",*/}
        {/*          top: "0",*/}
        {/*          left: "0",*/}
        {/*          right: "0",*/}
        {/*          backgroundColor: "green",*/}
        {/*          zIndex: "9999",*/}
        {/*        }}*/}
        {/*    >*/}
        {/*      <AlertIcon boxSize="40px" mr={0} />*/}
        {/*      <AlertTitle mt={4} mb={1} fontSize="lg">*/}
        {/*        Application submitted!*/}
        {/*      </AlertTitle>*/}
        {/*      <AlertDescription maxWidth="sm">*/}
        {/*        Thanks for submitting your application. Our team will get back to*/}
        {/*        you soon.*/}
        {/*      </AlertDescription>*/}
        {/*    </Alert>*/}
        {/*)}*/}
      </>
  );
};

export default HeroForm;
