import React, { Component, useState, useEffect } from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

// const position = [54.1050527, 23.75831]
// const position = [10.4980067, -66.8335096]

export default function LeafletMap({ list }) {
  return (
    <>
      <Map center={[54.6872, 25.2797]} zoom={12}>
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {list.map(({ longitude, latitude }) => {
          return <Marker key={longitude} position={[latitude, longitude]} />
        })}
      </Map>
      <style global jsx>{`
        .leaflet-container {
          width: 100%;
          height: 100vh;
        }
      `}</style>
    </>
  )
}
