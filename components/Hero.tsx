/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Image, Box, Flex, Text, Input, Button, Divider, Icon } from '@chakra-ui/core'
import Container from './Container'

export default function Hero() {
  return (
    <Box
      height='100vh'
      css={{
        scrollSnapAlign: 'start'
      }}
    >
      <Flex
        backgroundImage={`url("https://a0.muscache.com/4ea/air/r:w3100-h2074-sfit,e:fjpg-c80/pictures/0ffd8594-f123-43f0-85bb-7ef88c6f0624.jpg")`}
        height='100vh' /* You must set a specified height */
        backgroundAttachment='fixed' /* Create the parallax scrolling effect */
        backgroundPosition='center' /* Center the image */
        backgroundRepeat='no-repeat' /* Do not repeat the image */
        backgroundSize='cover'
        flexDir='column'
      >
        <Box h='32' />
        {/* <Container> */}
        <Box p='8' borderRadius='md' w='md' h='full' bg='white' height='auto' ml='24'>
          <Text lineHeight='shorter' fontSize='2rem' fontWeight='bold' color='gray.700'>
            Book unique places to stay and things to do.
          </Text>
          <Text mt='5' mb='2' fontSize='xs' fontWeight='bolder' color='gray.700'>
            WHERE
          </Text>
          <Input size='lg' placeholder='Anywhere' />
          <Flex mt='1'>
            <Box width='50%'>
              <Text
                textTransform='uppercase'
                mt='5'
                mb='2'
                fontSize='xs'
                fontWeight='bolder'
                color='gray.700'
              >
                check-in
              </Text>
              <Input
                size='lg'
                placeholder='mm/dd/yyyy'
                roundedTopRight='none'
                roundedBottomRight='none'
              />
            </Box>
            <Box width='50%'>
              <Text
                textTransform='uppercase'
                mt='5'
                mb='2'
                fontSize='xs'
                fontWeight='bolder'
                color='gray.700'
              >
                checkout
              </Text>
              <Input
                size='lg'
                placeholder='mm/dd/yyyy'
                roundedTopLeft='none'
                roundedBottomLeft='none'
                borderLeft='none'
              />
            </Box>
          </Flex>
          <People />
          <Flex mt='1'>
            <Button
              fontSize='md'
              fontWeight='bolder'
              mt='5'
              size='lg'
              color='white'
              width='full'
              bg='red.400'
              _hover={{
                bg: 'red.500'
              }}
            >
              Search
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}

function People() {
  return (
    <Flex mt='1'>
      <Box width='50%'>
        <Text
          textTransform='uppercase'
          mt='5'
          mb='2'
          fontSize='xs'
          fontWeight='bolder'
          color='gray.700'
        >
          adults
        </Text>
        <Input
          size='lg'
          placeholder='1 adult'
          roundedTopRight='none'
          roundedBottomRight='none'
          // borderRight='none'
        />
      </Box>
      <Box width='50%'>
        <Text
          textTransform='uppercase'
          mt='5'
          mb='2'
          fontSize='xs'
          fontWeight='bolder'
          color='gray.700'
        >
          children
        </Text>
        <Input
          size='lg'
          placeholder='0 children'
          roundedTopLeft='none'
          roundedBottomLeft='none'
          borderLeft='none'
        />
      </Box>
    </Flex>
  )
}
