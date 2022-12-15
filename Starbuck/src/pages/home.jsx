import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Button,
  ButtonGroup,
  Flex,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { SiSpotify} from 'react-icons/si'
import { BsFacebook} from 'react-icons/bs'
import { FaInstagramSquare} from 'react-icons/fa'
import { FaYoutube} from 'react-icons/fa'
import { AiFillTwitterCircle } from 'react-icons/ai'

export default function Home() {
  return (
    <>
      <Flex mt="100px">
        <Box
          display={"flex"}
          w={"50vw"}
          h="100vh"
          justifyContent={"center"}
          alignItems="center"
        >
          <Box display={"flex"} position="fixed">
            <Heading mr={"20px"} fontSize="xx-large">
              Merry sipping ⛄️
            </Heading>
          </Box>
        </Box>
        <Box borderLeft={'2px'} borderColor='gray' h='2150px'>
          <Box maxH={"427px"}>
            <Flex>
              <Card maxW="xs">
                <CardBody>
                  <Image
                    src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/digitalcontent.starbucks.com/udp/us/en/assets/rewards-carousel-1_tcm121-77064.jpg"
                    alt="Burger and Drink"
                    borderRadius="lg"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">Living room Sofa</Heading>
                    <Text>
                      Let us treat you—earn and redeem Stars for free drinks,
                      food and more.
                    </Text>
                  </Stack>
                </CardBody>
              </Card>
              <Card maxW="xs">
                <CardBody>
                  <Image
                    src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/digitalcontent.starbucks.com/udp/us/en/assets/rewards-carousel-2_tcm121-77065.jpg"
                    alt="Burger and Drink"
                    borderRadius="lg"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">Living room Sofa</Heading>
                    <Text>
                      Customize your order in the app and pick it up when it’s
                      ready.
                    </Text>
                  </Stack>
                </CardBody>
              </Card>
              <Card maxW="xs">
                <CardBody>
                  <Image
                    src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/digitalcontent.starbucks.com/udp/us/en/assets/rewards-carousel-3_tcm121-77066.jpg"
                    alt="Burger and Drink"
                    borderRadius="lg"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">Living room Sofa</Heading>
                    <Text>
                      Stop in on your birthday for a special treat on the house.
                    </Text>
                  </Stack>
                </CardBody>
              </Card>
            </Flex>
            <ButtonGroup py={"20px"} spacing="14px">
              <Button
                variant="solid"
                borderRadius="full"
                bg="black"
                size="md"
                textColor="white"
                _hover={{ bg: "grey" }}
                ml="40px"
              >
                Join now
              </Button>
              <Button
                borderRadius="full"
                borderColor="black"
                size="md"
                variant="outline"
              >
                Learn More
              </Button>
            </ButtonGroup>
          </Box>

          <Box bg={"gray.100"}>
            <Box display={"flex"} justifyContent={"center"} alignItems="center">
              <Card
                justifyContent={"center"}
                alignItems="center"
                maxW={"500px"}
                maxH="409px"
                bg={"white"}
                mt="48px"
              >
                <CardBody>
                  <Heading size={"xl"} maxH="110px">
                    Answer a few questions to find something new
                  </Heading>
                  <Text pt={"33px"} pb="16px">
                    What type of drink are you looking for?
                  </Text>
                  <Box>
                    <Button
                      w={"465px"}
                      display="flex"
                      borderRadius={"md"}
                      flexDirection="column"
                      h={"105px"}
                      justifyContent="center"
                      alignItems={"flex-start"}
                      mb="20px"
                    >
                      <Text fontWeight={"bold"} fontSize="19px">
                        Iced
                      </Text>
                      <Text fontSize={"19px"}>Cool off and uplift</Text>
                      {/* <Image src="https://app.starbucks.com/weblx/images/drink-finder/iced_drink.png"/> */}
                    </Button>
                    <Button
                      w={"465px"}
                      display="flex"
                      borderRadius={"md"}
                      flexDirection="column"
                      h={"105px"}
                      justifyContent="center"
                      alignItems={"flex-start"}
                    >
                      <Text fontWeight={"bold"} fontSize="19px">
                        Hot
                      </Text>
                      <Text fontSize={"19px"}>Warm up and get going</Text>
                      {/* <Image src="https://app.starbucks.com/weblx/images/drink-finder/hot_drink.png"/> */}
                    </Button>
                  </Box>
                </CardBody>
              </Card>
            </Box>
            <Flex justifyContent={"center"} alignItems="center" mt={"24px"}>
              <Card
                borderRadius={"md"}
                h="514"
                maxW={"500px"}
                bg="white"
                mb={"122px"}
              >
                <Image
                  src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/digitalcontent.starbucks.com/udp/us/en/assets/FY23DeltaHolidayUnauthAppIMAGE_tcm121-81975.jpg"
                  h={"306px"}
                  w="500px"
                />
                <CardBody display={"flex"} flexDirection="column">
                  <Heading mt={"20px"} fontSize="19px" mb={"8px"}>
                    Closer to moments that matter
                  </Heading>
                  <Text mb={"16px"}>
                    Add extra cheer this holiday season by joining Starbucks®
                    Rewards, linking it to Delta SkyMiles® to unlock 1 mile per
                    $1 spent at Starbucks (excludes taxes & tips).
                  </Text>
                  <Box
                    display={"flex"}
                    justifyContent={"flex-end"}
                    alignItems="flex-end"
                  >
                    <Button
                      borderRadius="full"
                      bg="blue.300"
                      size="md"
                      textColor="white"
                      _hover={{ bg: "grey" }}
                      maxW={"135px"}
                      h={"35px"}
                      alignItems="center"
                    >
                      <b>Sign up + link</b>
                    </Button>
                  </Box>
                </CardBody>
              </Card>
            </Flex>
          </Box>
          <Flex bottom={"40px"} right="40px" zIndex="3" position={"fixed"}>
            <Link to="/menu">
              <Button
                h={"66px"}
                w="174px"
                borderRadius={"full"}
                bg="blue.300"
                size={"md"}
                textColor="white"
                _hover={{ bg: "grey" }}
                fontSize="xl"
              >
                Start an order
              </Button>
            </Link>
          </Flex>
          <Box h={"412px"} >
            <Accordion
              allowMultiple
              allowToggle
              pt={"64px"}
              borderColor="white"
            >
              <AccordionItem>
                <Heading>
                  <AccordionButton pb={"32px"}>
                    <Box flex={"1"} textAlign="left" pl={"25px"} fontSize="xl">
                      About Us
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </Heading>
                <AccordionPanel pl={"40px"} pb={"8px"}>
                  <Link to="https://www.starbucks.com/about-us/">
                    Our Company
                  </Link>{" "}
                </AccordionPanel>
                <AccordionPanel pl={"40px"} pb={"8px"}>
                  <Link to="https://www.starbucks.com/coffee/">
                    Our Coffe
                  </Link>{" "}
                </AccordionPanel>
                <AccordionPanel pl={"40px"} pb={"8px"}>
                  <Link to="https://stories.starbucks.com/">
                    Stories and News
                  </Link>{" "}
                </AccordionPanel>
                <AccordionPanel pl={"40px"} pb={"8px"}>
                  <Link to="https://archive.starbucks.com/">
                    Starbucks Archive
                  </Link>{" "}
                </AccordionPanel>
                <AccordionPanel pl={"40px"} pb={"8px"}>
                  <Link to="https://investor.starbucks.com/ir-home/default.aspx">
                    Investor Relations
                  </Link>{" "}
                </AccordionPanel>
                <AccordionPanel pl={"40px"} pb={"8px"}>
                  <Link to="https://customerservice.starbucks.com/">
                    Customer Service
                  </Link>{" "}
                </AccordionPanel>
              </AccordionItem>
              {/*  */}
              <AccordionItem>
                <Heading>
                  <AccordionButton pb={"32px"}>
                    <Box flex={"1"} textAlign="left" pl={"25px"} fontSize="xl">
                      Carrers
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </Heading>
                <AccordionPanel pl={"40px"} pb={"8px"}>
                  <Link to="https://www.starbucks.com/careers/working-at-starbucks/culture-and-values/">
                    Culture and Values
                  </Link>{" "}
                </AccordionPanel>
                <AccordionPanel pl={"40px"} pb={"8px"}>
                  <Link to="https://stories.starbucks.com/stories/inclusion-diversity/">
                    Inclusion, Diversity and Equity
                  </Link>{" "}
                </AccordionPanel>
                <AccordionPanel pl={"40px"} pb={"8px"}>
                  <Link to="https://www.starbucks.com/careers/working-at-starbucks/education/">
                    College Achievment Plan
                  </Link>{" "}
                </AccordionPanel>
                <AccordionPanel pl={"40px"} pb={"8px"}>
                  <Link to="https://alumni.starbucks.com/login/">
                    Alumni Community 
                  </Link>{" "}
                </AccordionPanel>
                <AccordionPanel pl={"40px"} pb={"8px"}>
                  <Link to="https://www.starbucks.com/careers/">
                    U.S. Careers
                  </Link>{" "}
                </AccordionPanel>
                <AccordionPanel pl={"40px"} pb={"8px"}>
                  <Link to="https://www.starbucks.com/careers/international-careers/">
                    International Careers
                  </Link>{" "}
                </AccordionPanel>
              </AccordionItem>
              {/*  */}
              <AccordionItem>
                <Heading>
                  <AccordionButton pb={"32px"}>
                    <Box flex={"1"} textAlign="left" pl={"25px"} fontSize="xl">
                      Social Impact
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </Heading>
                <AccordionPanel pl={"40px"} pb={"8px"}>
                  <Link to="https://www.starbucks.com/responsibility/people/">
                    People
                  </Link>{" "}
                </AccordionPanel>
                <AccordionPanel pl={"40px"} pb={"8px"}>
                  <Link to="https://www.starbucks.com/responsibility/planet/">
                    Planet
                  </Link>{" "}
                </AccordionPanel>
                <AccordionPanel pl={"40px"} pb={"8px"}>
                  <Link to="https://www.starbucks.com/responsibility/reporting-hub/">
                    Environmental and Social Impact Reporting
                  </Link>
                </AccordionPanel>
              </AccordionItem>
              {/*  */}
              <AccordionItem>
                <Heading>
                  <AccordionButton pb={"32px"}>
                    <Box flex={"1"} textAlign="left" pl={"25px"} fontSize="xl">
                      For Business Partners
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </Heading>
                <AccordionPanel pl={"40px"} pb={"8px"}>
                  <Link to="https://www.starbucks.com/about-us/">
                    Landlord Support Center
                  </Link>{" "}
                </AccordionPanel>
                <AccordionPanel pl={"40px"} pb={"8px"}>
                  <Link to="https://www.starbucks.com/coffee/">
                    Suppliers
                  </Link>{" "}
                </AccordionPanel>
                <AccordionPanel pl={"40px"} pb={"8px"}>
                  <Link to="https://stories.starbucks.com/">
                    Corporate Gift Card Sales
                  </Link>{" "}
                </AccordionPanel>
                <AccordionPanel pl={"40px"} pb={"8px"}>
                  <Link to="https://archive.starbucks.com/">
                    Office and Foodservice Coffe
                  </Link>{" "}
                </AccordionPanel>
              </AccordionItem>
              {/*  */}
              <AccordionItem>
                <Heading>
                  <AccordionButton pb={"32px"}>
                    <Box flex={"1"} textAlign="left" pl={"25px"} fontSize="xl">
                      Order and Pickup
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </Heading>
                <AccordionPanel pl={"40px"} pb={"8px"}>
                  <Link to="https://www.starbucks.com/about-us/">
                    Order on the App
                  </Link>{" "}
                </AccordionPanel>
                <AccordionPanel pl={"40px"} pb={"8px"}>
                  <Link to="https://www.starbucks.com/coffee/">
                    Order on the Web
                  </Link>{" "}
                </AccordionPanel>
                <AccordionPanel pl={"40px"} pb={"8px"}>
                  <Link to="https://stories.starbucks.com/">
                    Delivery
                  </Link>{" "}
                </AccordionPanel>
                <AccordionPanel pl={"40px"} pb={"8px"}>
                  <Link to="https://archive.starbucks.com/">
                    Order and Pickup Options
                  </Link>{" "}
                </AccordionPanel>
                <AccordionPanel pl={"40px"} pb={"8px"}>
                  <Link to="https://investor.starbucks.com/ir-home/default.aspx">
                    Explore and Find Coffe for Home
                  </Link>{" "}
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
           <Box borderTop={'2px'} borderColor='gray' px={'40px'}></Box>
           <Box display={'flex'} px={'40px'} >
            
            <SiSpotify /> <BsFacebook/> <FaInstagramSquare/> <FaYoutube /> <AiFillTwitterCircle />
           
            
           </Box>
           <Box display={'flex'} flexDirection='column'  pt={'16px'} pl='40px'> 
           <Link>
           <Text h={'40px'} w='151px'>
           Privacy Notice
           </Text>
           </Link>
           <Link>
           <Text h={'40px'} w='151px'>
           Terms of Use
           </Text>
           </Link>
           <Link>
           <Text h={'40px'} w='151px'>
           CA Supply Chain Act
           </Text>
           </Link>
           <Link>
           <Text h={'40px'} w='151px'>
           Cookies Preferences
           </Text>
           </Link>
           <Text pt={6} fontSize={"sm"} textAlign={"left"} >
                © 2022 Winz Dev Corps. All rights reserved
              </Text>
           </Box>
          </Box>
        </Box>
      </Flex>
    </>
  );
}
