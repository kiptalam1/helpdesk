1. Problem Statement (what you are actually solving)

Small and mid-sized service businesses (agencies, IT support teams, property managers, logistics coordinators) suffer from:

requests arriving through multiple channels (email, forms, calls, chat)
no single place of truth for work
no ownership tracking (who is doing what)
no SLA visibility (what is late / urgent)
manual coordination across tools like email + spreadsheets + Trello
Core problem:

Unstructured business requests cannot be reliably tracked, assigned, and resolved at scale.

2. Solution Overview

You are building a Request Ingestion + Workflow System.

A single web application that:

collects external requests through a public entry point
converts them into structured “work items”
assigns and tracks them internally
provides visibility, accountability, and resolution flow 3. Final Product Definition (what you are building)

A single SaaS-style application with two surfaces:

A) Public Request Intake Layer
   /support (or /request)
simple form for external users
converts input into structured requests
B) Internal Operations System
   /inbox → triage
   /requests/[id] → detail view
   /dashboard → overview
   /admin → system control

Built on:
Next.js + Supabase

4. Final MVP Scope (complete system, nothing missing)
   4.1 Public Layer
      /support
      form fields:
      - name
      - email
      - subject
      - message
      - type (support/sales/other)
    submits request to backend API
   4.2 Authentication System
      login for internal users only
      roles:
      admin
      agent
      viewer
   4.3 Internal Inbox (/inbox)
   list of all incoming requests
   filters:
   open
   in progress
   resolved
   unassigned
   assign request to agent
   4.4 Request Detail Page (/requests/[id])
   full request thread
   status updates
   internal notes
   assignment control
   timestamps (created, updated, resolved)
   4.5 Dashboard (/dashboard)
   total requests
   open vs resolved
   SLA breaches
   agent workload
   4.6 Admin Panel (/admin)
   user management
   role assignment
   system overview
   basic configuration (optional SLA thresholds)
   4.7 Workflow Engine
   status lifecycle:
   open → assigned → in progress → resolved
   ownership required for progress
   audit trail (who did what)
5. Data Model (Supabase schema)
   users
   id
   email
   role (admin / agent / viewer)
   requests
   id
   title
   description
   status
   priority
   source (support form)
   created_at
   updated_at
   assigned_to
   request_comments
   id
   request_id
   author_id
   message
   created_at
