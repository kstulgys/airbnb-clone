import { Flex } from '@chakra-ui/core'

export default function Container(props) {
  return <Flex flexDir='column' px='4' mx='auto' maxWidth='5xl' width='full' {...props} />
}
