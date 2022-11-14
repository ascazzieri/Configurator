const agents_vendor_list = [
    "GENERIC",
    "Allen-Bradley",
    "ABB",
    "Axis Communications",
    "B&amp;R",
    "Beckhoff",
    "Beijer",
    "Bihl+Wiedemann",
    "Bosch Rexroth",
    "BRControls",
    "Cognex",
    "Comau Robotics",
    "Control Techniques",
    "COPA-DATA",
    "Danfoss",
    "Eaton Moeller",
    "ELAU",
    "ESA",
    "Exor",
    "FANUC Robotics",
    "Fatek Automation",
    "GE IP",
    "Grundfos",
    "Hakko",
    "Hilscher",
    "Hirschmann",
    "Horner",
    "IDEC",
    "ifm electronic",
    "IMO",
    "InduSoft",
    "Inovance",
    "Invensys Wonderware",
    "Kawasaki Robotics",
    "Keyence",
    "Koyo",
    "KUKA Robotics",
    "Lenze",
    "Mitsubishi Electric",
    "Omron",
    "Panasonic",
    "Parker",
    "Pepperl+Fuchs",
    "Pilz",
    "Phoenix Contact",
    "Priva",
    "Pro-face",
    "Rockwell Automation",
    "Saia-Burgess",
    "Schneider Electric",
    "Secomea",
    "SEW",
    "Sick",
    "Siemens",
    "Unitronics",
    "Universal Robots",
    "Vacon",
    "VIPA",
    "Wago",
    "Weintek",
    "Yaskawa"
]

const agent_vendor_device_type = {
    "GENERIC": [
        "LogTunnel Client",
        "LogTunnel Master (Pull)",
        "LogTunnel Master (Push)",
        "Web access (WWW)",
        "Remote Desktop (RDP)",
        "Remote Desktop (VNC)",
        "View-only VNC",
        "Desktop PC",
        "All ports, 1-way NAT",
        "Mobile VPN",
        "Subnet",
        "Device",
        "Secure Shell (SSH)",
        "FTP",
        "Shared Folder"
    ],
    "Allen-Bradley": [
        "Ethernet"
    ],
    "ABB": [
        "Robot"
    ],
    "Axis Communications": [
        "IP Camera"
    ],
    "B&amp;R": [
        "Ethernet"
    ],
    "Beckhoff": [
        "Embedded Agent",
        "Ethernet",
        "Legacy (Ethernet)"
    ],
    "Beijer": [
        "E410 Panel",
        "iX HMI",
        "Exter HMI"
    ],
    "Bihl+Wiedemann": [
        "Ethernet"
    ],
    "Bosch Rexroth": [
        "IndraDrive",
        "IndraMotion MLC"
    ],
    "BRControls": [
        "Ethernet",
        "BRC-45",
        "BRC-46"
    ],
    "Cognex": [
        "Ethernet"
    ],
    "Comau Robotics": [
        "Control Unit"
    ],
    "Control Techniques": [
        "Ethernet"
    ],
    "COPA-DATA": [
        "Zenon VNC",
        "Zenon Web Client",
        "Zenon All Service"
    ],
    "Danfoss": [
        "AK-SC255 Ethernet"
    ],
    "Eaton Moeller": [
        "Ethernet HMI"
    ],
    "ELAU": [
        "Ethernet"
    ],
    "ESA": [
        "Ethernet"
    ],
    "Exor": [
        "Ethernet HMI"
    ],
    "FANUC Robotics": [
        "Ethernet"
    ],
    "Fatek Automation": [
        "Ethernet"
    ],
    "GE IP": [
        "QuickPanel+",
        "Ethernet"
    ],
    "Grundfos": [
        "VNC Server"
    ],
    "Hakko": [
        "Ethernet HMI"
    ],
    "Hilscher": [
        "NetLink Gateway"
    ],
    "Hirschmann": [
        "Embedded Agent",
        "Switch",
        "Industrial Protocol Switch",
        "Industrial HiVision Server"
    ],
    "Horner": [
        "Ethernet"
    ],
    "IDEC": [
        "Ethernet"
    ],
    "ifm electronic": [
        "Ethernet"
    ],
    "IMO": [
        "Ethernet"
    ],
    "InduSoft": [
        "Web Studio"
    ],
    "Inovance": [
        "Ethernet"
    ],
    "Invensys Wonderware": [
        "Ethernet"
    ],
    "Kawasaki Robotics": [
        "Ethernet"
    ],
    "Keyence": [
        "Ethernet"
    ],
    "Koyo": [
        "Ethernet"
    ],
    "KUKA Robotics": [
        "Ethernet"
    ],
    "Lenze": [
        "Ethernet",
        "Inverter"
    ],
    "Mitsubishi Electric": [
        "Ethernet",
        "HMI (GOT series)",
        "Remote4U"
    ],
    "Omron": [
        "Ethernet PLC",
        "Ethernet HMI",
        "Vision"
    ],
    "Panasonic": [
        "Ethernet"
    ],
    "Parker": [
        "PAC Controller"
    ],
    "Pepperl+Fuchs": [
        "Ethernet"
    ],
    "Pilz": [
        "Ethernet"
    ],
    "Phoenix Contact": [
        "Ethernet"
    ],
    "Priva": [
        "Ethernet"
    ],
    "Pro-face": [
        "Ethernet",
        "Mobile App"
    ],
    "Rockwell Automation": [
        "Ethernet"
    ],
    "Saia-Burgess": [
        "Ether-S-Bus"
    ],
    "Schneider Electric": [
        "Ethernet",
        "Mobile App"
    ],
    "Secomea": [
        "SiteManager",
        "SiteManager Embedded",
        "TrustGate"
    ],
    "SEW": [
        "Inverter"
    ],
    "Sick": [
        "Ethernet"
    ],
    "Siemens": [
        "Ethernet",
        "Q80 Recorder"
    ],
    "Unitronics": [
        "Ethernet",
        "Unistream"
    ],
    "Universal Robots": [
        "Ethernet"
    ],
    "Vacon": [
        "Inverter"
    ],
    "VIPA": [
        "PLC",
        "HMI"
    ],
    "Wago": [
        "Ethernet"
    ],
    "Weintek": [
        "Ethernet"
    ],
    "Yaskawa": [
        "Ethernet"
    ]
}

export { agents_vendor_list, agent_vendor_device_type }