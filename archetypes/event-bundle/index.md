---
title: "{{ slicestr .Name 11 | humanize | title }}"
contact: April Goodwin
eventStartDate: {{ time (substr .Name 0 10) }}
eventEndDate:
publishDate: 2019-01-01T07:00:00+01:00
expiryDate:
description:
event_types: [ "social"] 
venue: "west-moor-social-club.md"
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

Confirm your place on the starting grid!