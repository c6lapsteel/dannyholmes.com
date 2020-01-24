---
title: "{{ slicestr .Name 11 | humanize | title }}"
leader: A Leader
description: "Follow our suggested motorycycle ride to {{ slicestr .Name 11 | humanize | title }}."
eventStartDate: {{ time (substr .Name 0 10) }}
publishDate: {{ .Date }}
expiryDate:
summary:
mileage: 
googleMaps_URL: 
route_directions: ["northumberland"]
route_towns:
route_roads: 
route_cafes:
resources:
- src: 'documents/{{ .Name }}.pdf'
  name: Route Description (PDF)
- src: 'documents/{{ .Name }}.gpx'
  name: Route (GPX)
- src: 'documents/{{ .Name }}.itn'
  name: Route (ITN)
aliases:
    - 
draft: false
---

## Route Description

## Food and Drink

## Look Out For