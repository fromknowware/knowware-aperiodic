import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Knowware Aperiodic CMS',
  description: 'Content management for Knowware Aperiodic',
}

export default ({ children }: { children: React.ReactNode }) => children
