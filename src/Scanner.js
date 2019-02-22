import React from 'react';
import Quagga from 'quagga'
import Webcam from "react-webcam";

const api = (id_producto) => {
    return `https://d3e6htiiul5ek9.cloudfront.net/prod/producto?limit=30&id_producto=${id_producto}&array_sucursales=22-1-6,19-1-03296,12-1-97,10-1-268,22-1-16,19-1-00973,12-1-99,22-1-20,19-1-00812,22-1-3,22-1-24,24-1-292,22-1-18,22-1-17,10-1-32,22-1-1,22-1-31,12-1-95,19-1-00983,12-1-165,10-1-33,22-1-26,10-1-41,9-3-5218,19-1-00989,19-1-00959,22-1-5,22-1-11,12-1-96,16-1-1202`
}

export default class Scanner extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            codigo: false
        }

        this.getScreenshot = this.getScreenshot.bind(this)
    }

    async obtengerProducto(id_producto) {
        const resp = await fetch(api(id_producto))
        if (resp.status === 200) {
            const data = await resp.json()
            this.setState({
                producto: data
            });
        }
    }

    setRef = webcam => {
        this.webcam = webcam;
    };

    scanImage(dataUri) {
        Quagga.decodeSingle({
            decoder: {
                readers: ["ean_reader"],
            },
            locate: true,
            src: dataUri
        }, function(result) {
            if(result.codeResult) {
                this.obtengerProducto(result.codeResult.code)
                this.setState({
                    codigo: result.codeResult.code,
                    error: false
                });
            } else {
                this.setState({
                    error: "Error de lectura"
                });
            }
        }.bind(this));
    }

    getScreenshot() {
        if (this.webcam.getScreenshot()) {
            this.scanImage(this.webcam.getScreenshot())
        } else {
            this.setState({
                error: "No se puede capturar"
            });
        }
    }

    render() {
        return (
            <div className="container text-center">
                <h2>Escanear productos</h2>
                {this.state.error &&
                    <div className="alert alert-danger" role="alert">{this.state.error}</div>
                }

                {this.state.codigo &&
                    <h4>Código: {this.state.codigo}</h4>
                }

                {this.state.producto &&
                    <div>
                        <h6>{this.state.producto.producto.nombre}</h6>
                        <h6>{this.state.producto.producto.marca}</h6>
                        <h6>Precio mínimo: {this.state.producto.producto.precioMin}</h6>
                        <h6>Precio máximo: {this.state.producto.producto.precioMax}</h6>
                    </div>
                }
                <Webcam
                    style={{backgroundColor: '#333', width: '100%', height: '370px', borderRadius: '20px'}}
                    audio={false}
                    ref={this.setRef}
                    screenshotFormat="image/jpeg"
                    videoConstraints={{
                        width: 640,
                        height: 480,
                        facingMode: { exact: "environment" }
                    }}
                />
                <br />
                <div className="clearfix"></div>
                <button type="button" className="btn btn-primary" onClick={this.getScreenshot}>Escanear</button>
            </div>
        );
    }
}
