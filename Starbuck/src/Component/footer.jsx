import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { useLocation } from "react-router-dom";

// const ListHeader = ({ children }: { children: ReactNode }) => {
//   return (
//     <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
//       {children}
//     </Text>
//   );
// };

export default function Footer() {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/" ? null : (
        <>
          <Box
            mt={"50px"}
            bg= 'whitesmoke'
            color= "black"
            borderTop={'1px'}
          >
            <Container as={Stack} maxW={"6xl"} py={10}>
              <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
                <Stack align={"flex-start"}>
                  <Text fontWeight={"500"} fontSize={"lg"} mb={2}>About Us</Text>
                  <Link href={"https://www.starbucks.com/about-us/"}>
                    Our Company
                  </Link>
                  <Stack direction={"row"} align={"center"} spacing={2}>
                    <Link href={"https://www.starbucks.com/coffee/"}>
                      Our Coffe
                    </Link>
                  </Stack>
                  <Link href={"https://stories.starbucks.com/"}>
                    Stories and News
                  </Link>
                  <Link href={"https://archive.starbucks.com/"}>
                    Starbucks Archive
                  </Link>
                  <Link
                    href={"https://investor.starbucks.com/ir-home/default.aspx"}
                  >
                    Investor Relations
                  </Link>
                  <Link href={"https://customerservice.starbucks.com/"}>
                    Customer Service
                  </Link>
                </Stack>
                <Stack align={"flex-start"}>
                  <Text fontWeight={"500"} fontSize={"lg"} mb={2}>Careers</Text>
                  <Link href={"#"}>About Us</Link>
                  <Link href={"#"}>Press</Link>
                  <Link href={"#"}>Careers</Link>
                  <Link href={"#"}>Contact Us</Link>
                  <Link href={"#"}>Partners</Link>
                </Stack>
                <Stack align={"flex-start"}>
                  <Text fontWeight={"500"} fontSize={"lg"} mb={2}>Legal</Text>
                  <Link href={"#"}>Cookies Policy</Link>
                  <Link href={"#"}>Privacy Policy</Link>
                  <Link href={"#"}>Terms of Service</Link>
                  <Link href={"#"}>Law Enforcement</Link>
                  <Link href={"#"}>Status</Link>
                </Stack>
                <Stack align={"flex-start"}>
                  <Text fontWeight={"500"} fontSize={"lg"} mb={2}>Follow Us</Text>
                  <Link href={"#"}>Facebook</Link>
                  <Link href={"#"}>Twitter</Link>
                  <Link href={"#"}>Dribbble</Link>
                  <Link href={"#"}>Instagram</Link>
                  <Link href={"#"}>LinkedIn</Link>
                </Stack>
              </SimpleGrid>
            </Container>
            <Box py={10}>
              <Flex
                align={"center"}
                _before={{
                  content: '""',
                  borderBottom: "1px solid",
                  borderColor: "gray.700",
                  flexGrow: 1,
                  mr: 8,
                }}
                _after={{
                  content: '""',
                  borderBottom: "1px solid",
                  borderColor: "gray.700",
                  flexGrow: 1,
                  ml: 8,
                }}
              >
                {/* <Logo /> */}
              </Flex>
              <Text pt={6} fontSize={"sm"} textAlign={"left"} ml="320px">
                © 2022 Winz Dev Corps. All rights reserved
              </Text>
            </Box>
          </Box>
        </>
      )}
    </>
  );
}
