const configQuagga = {
    inputStream: {
        name: "Live",
        type: "LiveStream",
        target: '#scanner-container',
        constraints: {
            width: 480,
            height: 320,
            facingMode: "environment"
        },
    },
    decoder: {
        readers: [
        "code_128_reader",
        "ean_reader",
        "ean_8_reader",
        "code_39_reader",
        "code_39_vin_reader",
        "codabar_reader",
        "upc_reader",
        "upc_e_reader",
        "i2of5_reader"
        ],
        debug: {
            showCanvas: true,
            showPatches: true,
            showFoundPatches: true,
            showSkeleton: true,
            showLabels: true,
            showPatchLabels: true,
            showRemainingPatchLabels: true,
            boxFromPatches: {
                showTransformed: true,
                showTransformedBox: true,
                showBB: true
            }
        }
    }
}

export default configQuagga;
