# Network Devices in Computer Networks

## 1. **Router**
- **Function:** Connects different networks (e.g., LAN to Internet) and directs data packets between them.
- **Key Features:**
  - Assigns IP addresses via DHCP.
  - Provides NAT (Network Address Translation) for Internet sharing.
  - Can have firewall and VPN features.
- **Use Case:** Home Wi-Fi router, enterprise network gateways.

---

## 2. **Switch**
- **Function:** Connects multiple devices within a LAN and forwards data only to the intended device.
- **Key Features:**
  - Operates at Data Link Layer (Layer 2) of OSI model.
  - Some switches are Layer 3 capable (routing between VLANs).
- **Use Case:** Office networks to connect computers, printers, and servers.

---

## 3. **Hub** (Less Common Today)
- **Function:** Basic device that broadcasts incoming data to all connected devices.
- **Key Features:**
  - Operates at Layer 1 (Physical Layer).
  - No intelligence; every packet goes to all devices.
- **Use Case:** Small networks or legacy systems.

---

## 4. **Access Point (AP)**
- **Function:** Extends wireless connectivity in a wired network.
- **Key Features:**
  - Provides Wi-Fi coverage.
  - Can support multiple SSIDs and security settings.
- **Use Case:** Offices, schools, public Wi-Fi hotspots.

---

## 5. **Modem**
- **Function:** Connects a network to an Internet Service Provider (ISP).
- **Key Features:**
  - Converts digital signals to analog (and vice versa) for telephone or cable lines.
  - Sometimes combined with a router in home setups.
- **Use Case:** DSL, cable, fiber Internet connections.

---

## 6. **Network Interface Card (NIC)**
- **Function:** Hardware in a computer/device to connect to a network.
- **Key Features:**
  - Can be wired (Ethernet) or wireless (Wi-Fi/Bluetooth).
  - Has a unique MAC address for identification.
- **Use Case:** Every PC, laptop, server, or IoT device.

---

## 7. **Firewall (Hardware/Software)**
- **Function:** Protects a network by controlling incoming/outgoing traffic based on security rules.
- **Key Features:**
  - Packet filtering, proxy service, or deep packet inspection.
  - Can be standalone or part of a router.
- **Use Case:** Enterprise networks, secure home networks.

---

## 8. **Repeater**
- **Function:** Boosts signals to extend network distance.
- **Key Features:**
  - Operates at Physical Layer (Layer 1).
  - Does not filter or route data.
- **Use Case:** Long Ethernet runs, wireless signal extenders.

---

## 9. **Gateway**
- **Function:** Connects networks with different protocols.
- **Key Features:**
  - Acts as a translator between different network architectures.
- **Use Case:** Connecting corporate networks to the Internet or legacy systems.

---

## 10. **Bridge**
- **Function:** Connects two LAN segments to make them act as a single network.
- **Key Features:**
  - Filters traffic and reduces collision domains.
  - Operates at Data Link Layer.
- **Use Case:** Expanding LAN without routers.

---

## Summary Table

| Device         | Primary Function                                | OSI Layer      |
|----------------|-----------------------------------------------|----------------|
| Router         | Connects networks, routes data                | Layer 3        |
| Switch         | Connects devices, forwards selectively       | Layer 2/3      |
| Hub            | Connects devices, broadcasts data            | Layer 1        |
| Access Point   | Wireless network access                        | Layer 2        |
| Modem          | Connects network to ISP                        | Layer 1/2      |
| NIC            | Connects device to network                     | Layer 2        |
| Firewall       | Controls network traffic for security          | Layer 3/4      |
| Repeater       | Extends network signal                          | Layer 1        |
| Gateway        | Connects different protocols/networks          | Layer 3+       |
| Bridge         | Connects LAN segments                          | Layer 2        |
