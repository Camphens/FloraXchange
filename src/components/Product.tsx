import React from 'react';
import './Product.css';

export default class Product extends React.Component <any, any> {
    
    constructor(props: any) {
        super(props);
        this.state = {
            item: props.item
        };
    }

    componentWillReceiveProps(nextProps: any){
        this.setState({item: nextProps.item})
    }

    render() {
        var { item } = this.state;
        if( item.Fotos.length === 0 ){
            return(
                <div className="card product">
                <div className="product-img">
                </div>

                <div className="product-text">
                    <div className="product-text-row title">{item.Naam}</div>
                    <div className="product-text-row">Hoogte:  {item.Hoogte}</div>
                    <div className="product-text-row">Potmaat: {item.Potmaat}</div>
                </div>
            </div>
            )}

        return(
            <div className="card product">
                <div className="product-img">
                    <img alt={item.Naam} src={item.Fotos[0].UrlThumb360}/>
                </div>

                <div className="product-text">
                    <div className="product-text-row title">{item.Naam}</div>
                    <div className="product-text-row">{item.Hoogte === "" ? "" : ("Hoogte: ")}{item.Hoogte}</div>
                    <div className="product-text-row">{item.Potmaat === "" ? "" : ("Potmaat: ")}{item.Potmaat}</div>
                </div>
            </div>
        )
    }
}