import { Flex, Box, Button, Image, Text, Spacer } from "@chakra-ui/react";
import Logo from "../Assets/logo.png";
import Map from "../Assets/loc1.png";
import { Link, useLocation } from "react-router-dom";
import {CgProfile} from 'react-icons/cg'

let Navbar = (props) => {
  const location = useLocation();
  return (
    <>
    {location.pathname === '/'  || location.pathname ===  '/menu'? (
      <Box position={'fixed'} top='0' w={'100vw'} zIndex='3' bg={'white'}>
      <Flex
        alignItems="center"
        h="100px"
        borderBlockEndWidth="1px"
        borderColor="black" px={'40px'}
      >
        <Box>
          <Link to='/'>
            <Button colorScheme="none">
              <Image src={Logo} alt="logo" w="60px" h="60px" />
            </Button>
          </Link>
        </Box>
        {location.pathname === '/'  || location.pathname ===  '/menu' ? (
          <>
            <Box pl={"40px"}>
              <Link to='/menu'>
              <Button
                colorScheme="none"
                variant="ghost"
                _hover={{ textColor: "green" }}
              >
                <Text fontWeight="bold">ORDER</Text>
              </Button>
              </Link>
            </Box>
            <Box ml={"25px"}>
              <Link to='/cart'>
              <Button
                colorScheme="none"
                variant="ghost"
                _hover={{ textColor: "green" }}
              >
                <Text fontWeight="bold">CART</Text>
              </Button>
              </Link>
            </Box>
            <Box ml={"25px"}>
              <Button
                colorScheme="none"
                variant="ghost"
                _hover={{ textColor: "green" }}
              >
                <Text fontWeight="bold">GIFT</Text>
              </Button>
            </Box>
          </>
        ) : null }
        <Spacer />
        {location.pathname === '/' || location.pathname === '/menu' ? (
          <>
            <Box m={10} display="flex">
              <Button
                colorScheme="none"
                variant="ghost"
                _hover={{ textColor: "green" }}
              >
                <Image src={Map} alt="loc" w="20px" h="20px" />
                <Text ml={5}>Find a store</Text>
              </Button>
            </Box>
            {
              props.data.username?
              <Button onClick={props.myFunc.onLogout} >
                 <Box mr={'5px'}>{props.data.username}</Box>   <CgProfile />

                </Button>
                :
                <>
                <Box m={5}>
              <Link to='/login'>
              <Button
                borderRadius="full"
                borderColor="black"
                size="md"
                variant="outline"
              >
                Sign in
              </Button>
              </Link>
            </Box>
            <Box m={5}>
             <Link to='/register'>
             <Button
                borderRadius="full"
                bg="black"
                size="md"
                textColor="white"
                _hover={{ bg: "grey" }}
              >
                <b>Join now</b>
              </Button>
             </Link>
            </Box>
                </>
            }
          </>
        ) : null }
      </Flex>
    </Box>) : 
    
    <Box  top='0' bg={'white'}>
      <Flex
        alignItems="center"
        h="100px"
        borderBlockEndWidth="1px"
        borderColor="black" px={'40px'}
      >
        <Box>
          <Link to='/'>
            <Button colorScheme="none">
              <Image src={Logo} alt="logo" w="60px" h="60px" />
            </Button>
          </Link>
        </Box>
        {location.pathname === '/'  || location.pathname ===  '/menu' ? (
          <>
            <Box pl={"40px"}>
              <Link to='/menu'>
              <Button
                colorScheme="none"
                variant="ghost"
                _hover={{ textColor: "green" }}
              >
                <Text fontWeight="bold">ORDER</Text>
              </Button>
              </Link>
            </Box>
            <Box ml={"25px"}>
              <Link to='/cart'>
              <Button
                colorScheme="none"
                variant="ghost"
                _hover={{ textColor: "green" }}
              >
                <Text fontWeight="bold">CART</Text>
              </Button>
              </Link>
            </Box>
            <Box ml={"25px"}>
              <Button
                colorScheme="none"
                variant="ghost"
                _hover={{ textColor: "green" }}
              >
                <Text fontWeight="bold">GIFT</Text>
              </Button>
            </Box>
          </>
        ) : null }
        <Spacer />
        {location.pathname === '/' || location.pathname === '/menu'? (
          <>
            <Box m={10} display="flex">
              <Button
                colorScheme="none"
                variant="ghost"
                _hover={{ textColor: "green" }}
              >
                <Image src={Map} alt="loc" w="20px" h="20px" />
                <Text ml={5}>Find a store</Text>
              </Button>
            </Box>
            {
              props.data.username?
                <Button>
                  props.data.username  <CgProfile onClick={props.myFunc.onLogout}/>

                </Button>
                :
                <>
                <Box m={5}>
              <Link to='/login'>
              <Button
                borderRadius="full"
                borderColor="black"
                size="md"
                variant="outline"
              >
                Sign in
              </Button>
              </Link>
            </Box>
            <Box m={5}>
             <Link to='/register'>
             <Button
                borderRadius="full"
                bg="black"
                size="md"
                textColor="white"
                _hover={{ bg: "grey" }}
              >
                <b>Join now</b>
              </Button>
             </Link>
            </Box>
                </>
            }
          </>
        ) : null }
      </Flex>
    </Box> }

    </>
    
    );
  };
      
    

export default Navbar;
