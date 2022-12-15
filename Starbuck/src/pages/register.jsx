import {
    Text,
    Flex,
    Box,
    Heading,
    Button,
    Card,
    Input,
    Stack,
    CardBody,
    InputGroup,
    InputRightElement,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    FormHelperText,
    FormControl,
    FormLabel,
    Checkbox,
    Link,
    Spinner,
  } from "@chakra-ui/react";
  import { useRef, useState } from "react";
  import { BiHide } from "react-icons/bi";
  import { BiShow } from "react-icons/bi";
  import { ExternalLinkIcon } from "@chakra-ui/icons";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
  
  let Register = () => {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);
    const [disabledButton, setDissableButton] = useState(false);
    const [message, setMessage] = useState("");

  const username = useRef();
  const email = useRef();
  const password = useRef();

  let onSubmit = async () => {
    try {
      let inputUsername = username.current.value;
      let inputEmail = email.current.value;
      let inputPassword = password.current.value;

      if (
        inputEmail.length === 0 ||
        inputPassword.length === 0 ||
        inputUsername.length === 0
      )
        throw { message: "Inputan Belum Lengkap" };
      if (inputPassword.length < 8) throw { message: "Password Invalid" };

      let character = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;
      if (!character.test(inputPassword))
        throw { message: "Password must contain number" };

      setDissableButton(true);
      let checkEmail = await axios.get(
        `http://localhost:5000/users?email=${inputEmail}`
      );
      let checkUsername = await axios.get(
        `http://localhost:5000/users?username=${inputUsername}`
      );

      if (checkEmail.data.length === 0 && checkUsername.data.length === 0) {
        await axios.post('http://localhost:5000/users', {username: inputUsername, email: inputEmail, password: inputPassword})
                username.current.value = ''
                password.current.value = ''
                email.current.value = ''
        toast.success("Your account already register.");
        setMessage("");
      } else {
        throw { message: "Email already register" };
      }
    } catch (error) {
      setMessage(error.message);
    } finally {
      setDissableButton(false);
    }
  };
    return (
      <>
        <Flex
          align="center"
          justifyContent="center"
          mt="150px"
          flexDirection="column"
        >
          <Box>
            <Heading textAlign="center">Create an account</Heading>
            <Heading size="small" mt="30px" color="gray.600" textAlign="center">
              PURWADHIKA® REWARDS
            </Heading>
            <Text textAlign="center" w="450px" mt="20px" fontSize="small">
              Join Purwadhika Rewards to earn Stars for free food and drinks, any
              way you pay. Get access to mobile ordering, a birthday Reward, and
              more.
            </Text>
          </Box>
          <Card mt="50px" w="530px" shadow="2xl" h={"1550px"}>
            <FormControl>
              <FormLabel
                htmlFor="first-name"
                fontWeight={"normal"}
                mt="30px"
                ml="70px"
              >
                * indicates required field
              </FormLabel>
            </FormControl>
            <CardBody ml={"50px"} mr={"50px"}>
              <Heading size="md" mb="5">
                Personal Information
              </Heading>
              <FormControl>
                <Stack spacing={"40px"}>
                  <Input ref={username} placeholder="* First Name" size="lg" />
                  <Input placeholder="* Last Name" size="lg" />
                </Stack>
              </FormControl>
              <Heading size="md" mb="5" mt="70px">
                Account Security
              </Heading>
              <FormControl>
                <Input ref={email} placeholder="* Email Address" size="lg" />
                <FormHelperText ml={"20px"} mb={"30px"}>
                  This will be your username
                </FormHelperText>
                <InputGroup size="lg">
                  <Input
                    ref={password}
                    pr="4.5rem"
                    type={show ? "text" : "password"}
                    placeholder="* Enter password"
                  />
                  <InputRightElement width="4.5rem">
                    <Button
                      h="1.75rem"
                      size="lg"
                      onClick={handleClick}
                      colorScheme="none"
                      variant="ghost"
                    >
                      {show ? BiShow() : BiHide()}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText
                  ml={"20px"}
                  mb={"50px"}
                  mr={"20px"}
                  maxW={"300px"}
                >
                  Create a password 8 to 25 characters long that includes at least
                  1 uppercase and 1 lowercase letter, 1 number and 1 special
                  character like an exclamation point or asterisk.
                </FormHelperText>
              </FormControl>
              <Accordion defaultIndex={[0]} allowMultiple borderColor="white">
                <AccordionItem>
                  <AccordionButton textColor={"green.700"} fontWeight="extrabold">
                    <Text as="u">Already have a Purwadhika gift card?</Text>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    Add your gift card to earn Stars when you pay and order ahead.
                    <FormControl mt={"30px"}>
                      <Input placeholder="Card number(16 digits)" size="lg" />
                      <FormHelperText ml={"20px"} mb={"30px"}>
                        No spaces or dashes
                      </FormHelperText>
                      <Input placeholder="Security code" size="lg" />
                      <FormHelperText ml={"20px"}>
                        Scratch to reveal 8-digit code
                      </FormHelperText>
                    </FormControl>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
              <Heading size="small" mt="30px" color="gray.600" textAlign="left">
                COLLECT MORE STARS & EARN REWARDS
              </Heading>
              <Text textAlign="left" w="300px" mt="20px" fontSize="medium">
                Email is a great way to know about offers and whats new from
                Purwadhika.
              </Text>
              <FormControl mt={"30px"}>
                <Checkbox
                  colorScheme={"green"}
                  defaultChecked
                  display={"flex"}
                  alignItems={"start"}
                >
                  Yes, Id like email from Purwadhika
                  <FormHelperText maxW={"320px"} fontSize={"medium"}>
                    Know about initiatives, announcements and product offers.
                  </FormHelperText>
                </Checkbox>
              </FormControl>
              <Heading size="small" mt="50px" color="gray.600" textAlign="left">
                TERMS OF USE
              </Heading>
              <FormControl mt={"30px"}>
                <Checkbox
                  colorScheme={"green"}
                  defaultChecked
                  display={"flex"}
                  alignItems={"start"}
                >
                  I agree to the{" "}
                  <Link
                    href="https://www.starbucks.com/rewards/terms/"
                    isExternal
                    textColor={"green.600"}
                    fontWeight={"semibold"}
                  >
                    Purwadhika® Rewards Terms <ExternalLinkIcon mx="2px" />
                  </Link>{" "}
                  and the{" "}
                  <Link
                    href="https://www.starbucks.com/terms/manage-gift-cards/"
                    isExternal
                    textColor={"green.600"}
                    fontWeight={"semibold"}
                  >
                    Purwadhika Card Terms <ExternalLinkIcon mx="2px" />
                  </Link>{" "}
                  and have read the{" "}
                  <Link
                    href="https://www.starbucks.com/terms/privacy-policy/#notice-of-financial-incentive"
                    isExternal
                    textColor={"green.600"}
                    fontWeight={"semibold"}
                  >
                    Purwadhika Privacy Statement <ExternalLinkIcon mx="2px" />
                  </Link>
                  .
                </Checkbox>
              </FormControl>
              <Flex mt={"60px"} justifyContent={"end"}>
                <Button
                  borderRadius="full"
                  bg="blue.300"
                  size="lg"
                  textColor="white"
                  _hover={{ bg: "grey" }}
                  fontWeight={"bold"}
                  display={"flex"}
                  alignItems={"center"}
                  disabled={disabledButton}
                  onClick={onSubmit}
                >
                 {disabledButton ? <Spinner size={'lg'} color='blue.300'/> : 'Create account'}
                </Button>
              </Flex>
            </CardBody>
          </Card>
          <Toaster />
        </Flex>

      </>
    );
  };
  
  export default Register;
  