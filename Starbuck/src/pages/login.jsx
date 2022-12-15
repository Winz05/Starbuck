import {
  Card,
  CardBody,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  InputGroup,
  Button,
  InputRightElement,
  Checkbox,
  Center,
  Text,
  Box,
  Spacer,
} from "@chakra-ui/react";
import { BiHide } from "react-icons/bi";
import { BiShow } from "react-icons/bi";
import React, { useRef, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { auth } from "../firebase";
import { GoogleAuthProvider } from "firebase/auth";
const provider = new GoogleAuthProvider()

export default function Login(props) {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const initRef = React.useRef();

  const username = useRef();
  const password = useRef();

  if (props.isRedirect.redirect) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <Flex
        alignItems={"center"}
        justifyContent="center"
        flexDirection="column"
        mt={"100px"}
      >
        <Heading py={"48px"} fontSize="xx-large">
          Sign in or create an account
        </Heading>
        <Card w={"500px"} h="515px">
          <FormControl>
            <FormLabel mt={"33px"} ml="32px">
              *indicates required field
            </FormLabel>
          </FormControl>
          <CardBody px={"32px"}>
            <FormControl>
              <Stack spacing={"32px"}>
                <Input
                  ref={username}
                  placeholder="* Username or Email Address"
                  h={"49px"}
                ></Input>
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
                <Checkbox colorScheme={"green"} defaultChecked size={"xl"}>
                  Keep me signed in. <b className=" text-green-700">Details</b>
                </Checkbox>
              </Stack>
              <Text
                pt={"32px"}
                pb="9px"
                fontWeight={"bold"}
                textColor="green.700"
              >
                Forgot your username?
              </Text>
              <Text fontWeight={"bold"} textColor="green.700">
                Forgot your password?
              </Text>
            </FormControl>
            <Flex mt={"60px"} justifyContent={"end"} alignItems='center'>
              <Button onClick={() => props.myFunc1.onLogInWithGoogle(












                
              )} w={"full"} borderRadius='3xl' borderColor={'gray'} variant={"outline"} leftIcon={<FcGoogle />} mr='10px'>
                <Center>
                  <Text>Sign in with Google</Text>
                </Center>
              </Button>

              <Button
                borderRadius="full"
                bg="green.700"
                size="lg"
                textColor="white"
                _hover={{ bg: "grey" }}
                fontWeight={"bold"}
                display={"flex"}
                onClick={() =>
                  props.myFunc.onLogin(
                    username.current.value,
                    password.current.value
                  )
                }
              >
                Sign in
              </Button>
            </Flex>
          </CardBody>
        </Card>
        <Box mt={"48px"}>
          <Card bgColor="gray.100" w="500px" h={"216px"} alignItems="center">
            <Heading
              size="small"
              mt="30px"
              color="gray.600"
              textAlign="center"
              textColor={"green.700"}
            >
              JOIN PURWADHIKA® REWARDS
            </Heading>
            <Text textAlign="center" w="450px" mt="20px" fontSize="md">
              Join Purwadhika Rewards to earn free food and drinks, get free
              refills, pay and order with your phone, and more.
            </Text>
            <Link to="/register">
              <Button
                borderRadius="full"
                borderColor="green"
                size="md"
                variant="outline"
                mt={"16px"}
                textColor="green.700"
              >
                Join Now
              </Button>
            </Link>
          </Card>
        </Box>
        <Toaster />
      </Flex>
    </>
  );
}
