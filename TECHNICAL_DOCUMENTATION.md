# Week 10 Technical Documentation
## Group 8 – Customer Information & Relationship Tool

### Project phase
Phase 4 – Implementation

### Primary deliverable
A browser-based prototype demonstrating the proposed staff workflow for Cơm Nhà Restaurant.

### Requirements implemented
| Requirement | Prototype evidence |
|---|---|
| Search for a customer | Search by name, phone number or email |
| Identify new vs returning customer | Automatically calculated from visit history |
| View customer details | Customer profile screen |
| View visit history | Visit history table |
| View customer preferences | Preference chips on customer profile |
| View customer notes | Customer notes section |
| Add customer notes | Add Note function |
| Add a new customer | Add Customer form |
| Staff access concept | Authorised-staff indicator and staff profile |

### Technical decisions
1. **Front-end prototype first**
   - HTML, CSS and JavaScript were used so the team could demonstrate the intended workflow quickly.
   - This avoids prematurely building a production CRM before the workflow is validated with the client.

2. **New/returning status is calculated**
   - The prototype does not store a separate `is_returning` field.
   - A customer with one or more recorded visits is classified as returning.
   - This reduces duplicated or inconsistent data.

3. **Local sample data**
   - Sample customer data is used for demonstration only.
   - Browser localStorage is used to preserve changes during prototype testing.
   - No real customer information should be entered into this prototype.

4. **Scope control**
   - The prototype does not replace a POS system.
   - It does not process payments.
   - It does not provide bulk marketing automation.
   - It does not represent a production-ready authentication or security implementation.

### Current barriers
- Some customer data fields still require client confirmation.
- Staff roles and edit permissions need confirmation.
- The connection to the existing reservation/POS environment is conceptual at this stage.
- The prototype requires client testing before final refinement.

### Next steps
- Demonstrate the prototype to Jimmy.
- Record client feedback.
- Refine data fields and workflow.
- Test against project requirements.
- Capture screenshots and decisions for Assessment 3.
