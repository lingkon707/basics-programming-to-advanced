# Zero Trust Security: “Never Trust, Always Verify”

## 1. **Concept**
- Traditional security assumes that anything inside the network is trustworthy.
- Zero Trust flips this assumption: **no user, device, or system is trusted by default**, whether inside or outside the network.
- Every access request must be **verified before granting permission**.

---

## 2. **Core Principles**
1. **Verify Explicitly**
   - Every access request is authenticated and authorized.
   - Factors include:
     - User identity (username, password, biometrics)
     - Device health (OS updates, antivirus, security patches)
     - Location and time
     - Network context (IP address, connection type)
   
2. **Least Privilege Access**
   - Users/devices get **only the access needed** to perform their tasks.
   - Reduces risk if credentials are compromised.

3. **Continuous Monitoring**
   - Authentication is ongoing; sessions are continuously evaluated.
   - Suspicious behavior triggers re-authentication or access revocation.

4. **Microsegmentation**
   - Network is divided into small zones.
   - Even if one segment is compromised, attackers cannot move freely across the network.

5. **Encrypt Everything**
   - Data in transit and at rest is encrypted.
   - Ensures confidentiality and integrity.

---

## 3. **Implementation Steps**
1. **Identify critical assets** (servers, databases, applications).
2. **Authenticate and authorize** every user/device for access.
3. **Segment network** into secure zones.
4. **Implement multifactor authentication (MFA)**.
5. **Continuously monitor** user behavior and network activity.
6. **Log and analyze events** for anomalies.

---

## 4. **Technologies Supporting Zero Trust**
- Identity and Access Management (IAM)
- Multi-Factor Authentication (MFA)
- Endpoint Detection & Response (EDR)
- Network Access Control (NAC)
- Security Information and Event Management (SIEM)
- Microsegmentation tools (software-defined networking)

---

## 5. **Benefits**
- Minimizes insider threats.
- Reduces risk from stolen credentials.
- Limits lateral movement for attackers.
- Improves compliance with security regulations.

---

## 6. **Example**
- Employee tries to access the finance database:
  1. System verifies their **identity** via MFA.
  2. Checks their **device security** (patches, antivirus).
  3. Checks **network context** (trusted VPN?).
  4. Grants access only to the specific database, not the entire network.
  5. Monitors activity for unusual behavior (e.g., large data download).
