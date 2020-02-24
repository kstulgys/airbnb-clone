/** @jsx jsx */
import { jsx } from '@emotion/core'
import React, { useState, useEffect } from 'react'
import {
  Flex,
  Box,
  Image,
  Text,
  Divider,
  Switch,
  Stack,
  useDisclosure,
  Grid,
  Badge,
  Spinner
} from '@chakra-ui/core'
import Container from './Container'
// import Map from './Map'
import dynamic from 'next/dynamic'
import getData from '../lib/getData'

const MapWithNoSSR = dynamic(() => import('./Map'), {
  ssr: false
})

export default function Listings() {
  const { isOpen, onOpen, onClose } = useDisclosure(false)
  const [list, setList] = useState([])

  useEffect(() => {
    getData().then(setList)
  }, [])

  const handleToggle = () => {
    isOpen ? onClose() : onOpen()
  }

  return (
    <Box
      height='100vh'
      css={{
        scrollSnapAlign: 'start'
      }}
    >
      <Flex px='6' boxShadow='sm' height='16'>
        <Flex ml='auto' alignItems='center' height='full'>
          <Text pr='4'>Show map</Text>
          <Switch mt='1' size='lg' color='red' isChecked={isOpen} onChange={handleToggle} />
        </Flex>
      </Flex>

      {isOpen ? <ItemListWithMap list={list} /> : <ItemList list={list} />}
    </Box>
  )
}

interface IItem {
  name: string
  shortDescription: string
  longitude: string
  latitude: string
  urls: { regular: string }
  id: string
}

interface IItemList {
  list: IItem[]
}

function ItemListWithMap(props: IItemList) {
  const { list } = props
  // const [position, setPosition] = useState([10.4980067, -66.8335096])
  return (
    <Stack isInline position='relative' height='calc(100vh - 4rem)' overflowY='scroll'>
      <Box width='45%'>
        {list.map(({ id, ...rest }) => {
          return <ListItem {...rest} key={id} />
        })}
      </Box>
      <Box width='55%' position='sticky' top='0' right='0'>
        <MapWithNoSSR list={list} />
      </Box>
    </Stack>
  )
}

function ListItem(props) {
  const { key, name, shortDescription, longitude, latitude, urls } = props
  return (
    <>
      <Stack isInline spacing='6' height='auto' p='6'>
        <Box flex='1.4'>
          <Image height='48' width='full' objectFit='cover' borderRadius='md' src={urls.regular} />
        </Box>
        <Box flex='2'>
          <Text textTransform='uppercase'>{name}</Text>
          <Text mt='2'>{shortDescription}</Text>
        </Box>
      </Stack>
      <Box px='6'>
        <Divider borderColor='gray.300' py='0' my='0' />
      </Box>
    </>
  )
}

function Loader() {
  return (
    <Flex>
      <Box mx='auto'>
        <Spinner size='xl' />
      </Box>
    </Flex>
  )
}

function ItemList({ list }: IItemList) {
  return (
    <Box pt='6' height='calc(100vh - 4rem)' overflowY='scroll'>
      {!list.length && <Loader />}
      <Container maxWidth='1600px'>
        <Grid gridTemplateColumns='repeat(auto-fit, minmax(310px, 1fr))' gridGap='4'>
          {list.map(({ id, ...rest }) => {
            return <GridItem key={id} {...rest} />
          })}
        </Grid>
      </Container>
    </Box>
  )
}

function GridItem({ name, shortDescription, urls }) {
  return (
    <Box>
      <Image width='full' height='64' src={urls.regular} objectFit='cover' borderRadius='md' />
      <Stack isInline spacing='4' alignItems='center' mt='3'>
        <Badge>Plus</Badge>
        <Text fontSize='sm' color='gray.500'>
          Entire guest house 2 beds
        </Text>
      </Stack>
      <Text mb='5' mt='1' fontSize='md' textTransform='capitalize'>
        {name}
      </Text>
    </Box>
  )
}
