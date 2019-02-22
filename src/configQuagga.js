const configQuagga = {
    inputStream: {
        name: "Live",
        type: "LiveStream",
        target: '#scanner-container',
        constraints: {
            width: 640,
            height: 480,
            facingMode: "environment"
        },
    },
    decoder: {
        readers: ["ean_reader"],
        locate: true,
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
