import React, { useState } from "react";
import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    Textarea,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import axios from "axios";

const FeedbackForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const onSubmit = async (data) => {
        try {
            // Envoyer les données du formulaire au backend
            const response = await axios.post("http://localhost:8081/feedback", data); // Utilisez l'URL appropriée pour votre backend

            // Traitez la réponse du backend ici si nécessaire
            console.log("Backend Response:", response.data);

            setIsSuccess(true);
            setTimeout(() => {
                setIsSuccess(false);
            }, 4000);

            // Réinitialisez les champs du formulaire manuellement
            reset({
                first_name: "",
                last_name: "",
                email: "",
                phone: "",
                request_type: "",
                message: "",
            });
        } catch (error) {
            // Gérez les erreurs de l'API ici
            console.error("API Error:", error);
        }
    };

    return (
        <>
            <Button onClick={openModal} colorScheme="blue" fontSize="xl" marginTop="2rem">
                Écrivez-nous
            </Button>

            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Écrivez-nous</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <FormControl isInvalid={errors.first_name}>
                                <FormLabel htmlFor="first_name">Prénom</FormLabel>
                                <Input
                                    id="first_name"
                                    type="text"
                                    placeholder="Prénom"
                                    {...register("first_name", { required: true })}
                                />
                                <FormErrorMessage>
                                    {errors.first_name && "Le prénom est requis"}
                                </FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={errors.last_name}>
                                <FormLabel htmlFor="last_name">Nom</FormLabel>
                                <Input
                                    id="last_name"
                                    type="text"
                                    placeholder="Nom"
                                    {...register("last_name", { required: true })}
                                />
                                <FormErrorMessage>
                                    {errors.last_name && "Le nom est requis"}
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
                                    {errors.email && "L'email est requis"}
                                </FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={errors.phone}>
                                <FormLabel htmlFor="phone">Téléphone</FormLabel>
                                <Input
                                    id="phone"
                                    type="text"
                                    placeholder="Téléphone"
                                    {...register("phone", { required: true })}
                                />
                                <FormErrorMessage>
                                    {errors.phone && "Le téléphone est requis"}
                                </FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={errors.request_type}>
                                <FormLabel htmlFor="request_type">Type de demande</FormLabel>
                                <Input
                                    id="request_type"
                                    type="text"
                                    placeholder="Type de demande"
                                    {...register("request_type", { required: true })}
                                />
                                <FormErrorMessage>
                                    {errors.request_type && "Le type de demande est requis"}
                                </FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={errors.message}>
                                <FormLabel htmlFor="message">Message</FormLabel>
                                <Textarea
                                    id="message"
                                    placeholder="Message"
                                    {...register("message", { required: true })}
                                />
                                <FormErrorMessage>
                                    {errors.message && "Le message est requis"}
                                </FormErrorMessage>
                            </FormControl>
                            <Button type="submit" colorScheme="blue" marginTop="2rem">
                                Envoyer
                            </Button>
                        </form>
                    </ModalBody>
                </ModalContent>
            </Modal>

            {isSuccess && (
                <Alert
                    status="success"
                    variant="subtle"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    textAlign="center"
                    height="200px"
                    marginTop="2rem"
                >
                    <AlertIcon boxSize="40px" mr={0} />
                    <AlertTitle mt={4} mb={1} fontSize="lg">
                        Soumission réussie!
                    </AlertTitle>
                    <AlertDescription maxWidth="sm">
                        Merci d'avoir soumis votre demande. Notre équipe vous répondra bientôt.
                    </AlertDescription>
                </Alert>
            )}
        </>
    );
};

export default FeedbackForm;
