let prova_wifi = [
    {
        "WiFi_Ima_Client": 'prova',
    },
    {
        "WiFi_Ima_Sec": "prova"
    },
    {
        "WiFi_Ima_Client": 'prova',
    },
    {
        "WiFi_Ima_Sec": "prova"
    },
    {
        "WiFi_Ima_Client": 'prova',
    },
    {
        "WiFi_Ima_Sec": "prova"
    }
]

let wifi_founded = []

function wifi_scan() {
    //scanning code here
    wifi_founded = JSON.parse(JSON.stringify(prova_wifi))

    return wifi_founded
}
function checkAerial() {
    return true
}


export { wifi_scan, checkAerial }