import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Menu1() {
  const [data, setData] = useState([]);

  useEffect(() => {
    onGetData();
  }, []);

  let onGetData = async () => {
    try {
      let response = await axios.get("http://localhost:5000/hot-coffees");
      setData(response.data);
    } catch (error) {}
  };

  return (
    <>
      <Box maxWidth={"1225px"} h="200vh" pt={"52px"} display='flex'>
        <Box>
          <Box pt={"40px"} pl="131px">
            <Box maxW={"150px"} h="100vh">
              <Heading fontSize={"xl"} pb="16px">
                Drinks
              </Heading>
              <Text pb={"16px"} textColor="gray">
                Hot Coffees
              </Text>
              <Text pb={"16px"} textColor="gray">
                Hot Teas
              </Text>
              <Text pb={"16px"} textColor="gray">
                Hot Drinks
              </Text>
              <Text pb={"16px"} textColor="gray">
                Frappucino Blended Beverages
              </Text>
              <Text pb={"16px"} textColor="gray">
                Cold Coffes
              </Text>
              <Text pb={"16px"} textColor="gray">
                Iced Teas
              </Text>
              <Text pb={"24px"} textColor="gray">
                Cold Drinks
              </Text>
              <Heading fontSize={'xl'} pb='16px'>
                Food
              </Heading>
              <Text pb={'16px'} textColor='gray'>
                Hot Breakfast
              </Text>
              <Text pb={'16px'} textColor='gray'>
                Bakery
              </Text>
              <Text pb={'16px'} textColor='gray'>
                Lunch
              </Text>
              <Text pb={'16px'} textColor='gray'>
                Snacks & Sweets
              </Text>
              <Text pb={'24px'} textColor='gray'>
                Oatmeal & Yogurt
              </Text>
              <Heading fontSize={'xl'} pb='16px'>
                At Home Coffe
              </Heading>
              <Text pb={'16px'} textColor='gray'>
                Whole Bean
              </Text>
              <Text pb={'16px'} textColor='gray'>
                Ground
              </Text>
              <Text pb={'24px'} textColor='gray'>
                VIA Instant
              </Text>
              <Heading fontSize={'xl'} pb='16px'>
                Merchandise
              </Heading>
              <Text pb={'16px'} textColor='gray'>
                Cold Cups
              </Text>
              <Text pb={'16px'} textColor='gray'>
                Tumblers
              </Text>
              <Text pb={'24px'} textColor='gray'>
                Other
              </Text>
              <Heading fontSize={'xl'} pb='16px'>
                Gift Cards
              </Heading>
              <Text pb={'16px'} textColor='gray'>
                Happy Birthday
              </Text>
              <Text pb={'16px'} textColor='gray'>
                Thank You
              </Text>
              <Text pb={'16px'} textColor='gray'>
                Traditional
              </Text>
            </Box>
          </Box>
        </Box>
        <Box pl={'119px'} pt='40px'>
        <Heading fontSize={"3xl"} h="87px" w={"727px"}>
            Menu
          </Heading>
        <Box>
        <Heading fontSize={'2xl'} h='52px' w={'727px'} borderBlockEnd='1px' borderColor={'gray'}>
            Drinks
          </Heading>
        </Box>
        </Box>
      </Box>
    </>
  );
}
