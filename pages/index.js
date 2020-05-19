import { Box, Flex, Text, Button } from "@chakra-ui/core";

export default function Home() {
  return (
    <Box>
      {/* 1 */}
      <Box mx={{md: 120, sm: 0}}>
        <Flex
          alignItems="stretch"
          flexDirection="row"
          justifyContent="space-around">
          <Box display="flex" width="100%" flexDirection="column"
            height="100vh"
            justifyContent="center">
            <Text as="h1" fontSize="5xl">Platform pendukung terciptanya Smart City di Indonesia</Text>
            <Text mt={5} fontSize='md' color="gray.500">Informasi Layanan Publik Pemerintahan dapat diakses dalam satu aplikasi e-government </Text>
            <Flex mt={10}>
              <Button leftIcon='chat' variantColor="teal" size='lg'>Hubungi</Button>
              <Button variant='ghost' size='lg'>Portofolio</Button>
            </Flex>
          </Box>
          <Box display="flex" width="100%" />
        </Flex>
      </Box>
      {/* 2 */}

    </Box>
  )
}
