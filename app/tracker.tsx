"use client"

import { useEffect } from "react"

export default function Tracker() {
  useEffect(() => {
    fetch("/api/notify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userAgent: navigator.userAgent,
        ip: window.location.hostname 
      })
    })
  }, [])

  return null
}
