import React, { Component } from 'react';
import Quagga from 'quagga'
import configQuagga from './configQuagga.js';

import image from './IMG_2934.jpg';

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            codigo: "Procesando...",
            scannerIsRunning: false
        }

        this.handlerClick = this.handlerClick.bind(this)
    }

    componentDidMount() {
        Quagga.decodeSingle({
            decoder: {
                readers: ["ean_reader"],
            },
            locate: true,
            src: image
        }, function(result){
            if(result.codeResult) {
                this.setState({
                    codigo: result.codeResult.code
                });
            } else {
                this.setState({
                    codigo: "Error de lectura"
                });
            }
        }.bind(this));
    }

    startScanner() {
        Quagga.init(configQuagga, function (err) {
            if (err) {
                console.log(err);
                return
            }

            console.log("Initialization finished. Ready to start");
            Quagga.start();

            this.setState({
                scannerIsRunning: true
            });
        }.bind(this));

        Quagga.onProcessed(function (result) {
            var drawingCtx = Quagga.canvas.ctx.overlay,
            drawingCanvas = Quagga.canvas.dom.overlay;

            if (result) {
                if (result.boxes) {
                    drawingCtx.clearRect(0, 0, parseInt(drawingCanvas.getAttribute("width")), parseInt(drawingCanvas.getAttribute("height")));
                    result.boxes.filter(function (box) {
                        return box !== result.box;
                    }).forEach(function (box) {
                        Quagga.ImageDebug.drawPath(box, { x: 0, y: 1 }, drawingCtx, { color: "green", lineWidth: 2 });
                    });
                }

                if (result.box) {
                    Quagga.ImageDebug.drawPath(result.box, { x: 0, y: 1 }, drawingCtx, { color: "#00F", lineWidth: 2 });
                }

                if (result.codeResult && result.codeResult.code) {
                    Quagga.ImageDebug.drawPath(result.line, { x: 'x', y: 'y' }, drawingCtx, { color: 'red', lineWidth: 3 });
                }
            }
        });


        Quagga.onDetected(function (result) {
            console.log("Barcode detected and processed : [" + result.codeResult.code + "]", result);
        });
    }

    stopScanner() {
        Quagga.stop()
        this.setState({
            scannerIsRunning: false
        });
    }

    handlerClick(event) {
        if (this.state.scannerIsRunning) {
            this.stopScanner()
        } else {
            this.startScanner();
        }
    }

    render() {
        return (
            <div className="App">
            <h1>Código: {this.state.codigo}</h1>
            <img src={image} alt=""/>
            <div id="scanner-container"></div>
            <input onClick={this.handlerClick} type="button" id="btn" value="Start/Stop the scanner" />
            </div>
            );
    }
}

export default App;

