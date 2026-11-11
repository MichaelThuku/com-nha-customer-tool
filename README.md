# Cơm Nhà Guest Relationship Tool — V7 Final Complete Prototype

This is the corrected Week 12 final prototype. It uses plain HTML, CSS and JavaScript with browser `localStorage` for demo data.

## Demo accounts

### Staff
- Username: `staff`
- Password: `staff123`
- Access: Front Desk and Customers

### Manager
- Username: `manager`
- Password: `manager123`
- Access: Front Desk, Customers, Insights and Settings

**Important:** Insights and Settings are intentionally manager-only. If you sign in as Staff, those tabs are hidden.

## Key features
- Phone-first customer recognition
- Australian number normalisation: `+61 412...`, `61 412...`, `0412...` and spaced/unspaced versions are compared as the same number
- New and existing customer flow
- Reservations and walk-ins
- Booked, Arrived, Completed, No-show and Cancelled statuses
- Clickable customer names from Reservations & Arrivals
- Customer profile editing
- Staff notes can be added at any time from an existing profile
- Change history / audit trail
- New / Occasional / Regular / Frequent customer levels
- Highly visible frequency colour coding on customer and arrival cards
- Manager-editable frequency thresholds
- Good to Know factual customer snapshot
- Important dietary and birthday flags
- Visit Story timeline
- Visit history includes reservation/walk-in, party size, status and recorded orders
- Visit-completion dialog records dishes and an optional service note
- Manager Insights with Today, This Week, This Month, Last 3 Months, All Time and Custom date filters
- Customer Snapshot with clickable frequency groups
- Reservation & visit metrics
- Average party size and busiest times
- Preference summaries and most-recorded dishes
- Needs Attention alerts for birthdays, loyal arrivals, lapsed customers, dietary requirements, incomplete profiles and retention reviews
- Data quality summary
- Manager-configurable Insights panels
- Manager Settings for reservation rules, deposit threshold, large-party handling and default duration
- Restaurant information, opening hours, surcharge and internal service message
- Manager-editable quick categories
- Service alert controls
- Prototype staff-account management with Staff / Manager roles and activate/deactivate controls
- Data-quality safeguards and exact duplicate-phone blocking
- Configurable data-retention periods by customer relationship level
- Manager retention review with Keep / De-identify / Delete
- No automatic deletion
- Responsive tablet/mobile layout
- Reset Demo Data button for testing

## Prototype limitation
This is a front-end prototype. Production deployment would require a secure server/database, real authentication and role enforcement, protected audit logs, privacy governance, backups, and integrations with the restaurant's live reservation/POS systems.
