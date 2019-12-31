---
title: "{{ slicestr .Name 11 | humanize | title }}"
contact: TBC
eventStartDate: {{ time (substr .Name 0 10) }}
eventEndDate:
publishDate: {{ .Date }}
expiryDate:
description:
event_types: ["category2_ride"] 
venue: "seaton-burn-services.md"
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

Details to be confirmed.