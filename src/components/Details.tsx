import React from 'react';
import './Details.css';

export default class Details extends React.Component <any, any> {
    
    constructor(props: any) {
        super(props);
        this.state = {
            item: props.location.state.item,
            fotos: [],
            fotoindex: 0
        };

        this.changeIndex = this.changeIndex.bind(this);
    }

    componentWillMount(){
        this.state.item.Fotos.forEach((foto: { UrlThumb600: any; }) => {
            let fotos = this.state.fotos;
            fotos.push(foto.UrlThumb600);
            this.setState({fotos: fotos})   
        });
    }

    changeIndex(item: any){
        for (let index = 0; index < this.state.fotos.length; index++) {
            if (this.state.fotos[index] === item)
            {
                this.setState({fotoindex: index});
            }
        }
    }

    getBeladingen(item: any){
        if(item.Beladingen.length > 0)
        {
            return(
            <div>
                <b>Beladingen</b>
                {item.Beladingen.map((regel: any) => (
                    <div className="beladingen card">
                        Fust:           {regel.FustOmschrijving}
                        <br/>
                        Ladingsdrager:  {regel.Ladingdrager}
                        <br/>
                        Afmetingen:     {regel.Omschrijving}
                        <br/>
                        Stuks per fust: {regel.AantalStuksPerFust}
                        <br/>
                        Fusts per laag: {regel.AantalFustPerLaag}
                        <br/>
                        Laag per drager:{regel.AantalLagenPerDrager}
                    </div>
                ))}
            </div>
        )}
    }

    getAanbod(item: any){
        return(
            <div>
                <b>Aanbod</b>
                {item.AanbodRegels.map((regel: any) => (
                    <p>
                        Aantal stuks: {regel.Stuks}
                        <br/>
                        Periode: {regel.PeriodeOmschrijving}
                        <br/>
                        Vanaf prijs: €{regel.VanafPrijs}
                    </p>
                ))}
            </div>
        )
    }

    getEigenschappen(item: any){
        return(
            <div>
                {item.Eigenschappen.map((eigenschap:any) => (
                    <div className="eigenschap-row">
                        <h1>{eigenschap.EigenschapNaam}</h1>
                        <h3>{eigenschap.Waarde}</h3>
                    </div>
                ))}
            </div>
        )
    }

    render() {
        var { item, fotos, fotoindex } = this.state;

        return(
            <div className="product-screen">
                <div className="product-header">
                    {item.Naam}
                    <h3>{item.ArtikelGroepNaam}</h3>
                </div>

                <div className="product-body">
                    <div className="left">
                        <img alt="Product Foto" src={fotos[fotoindex]}/>                        
                    </div>
                    <div className="right">
                        {this.getEigenschappen(item)}
                        {/* {this.getAanbod(item)}                        */}
                    </div>
                </div>

                <div className="product-footer">
                    {fotos.map((foto: any) => (
                                <img alt="Product Foto" src={foto} onClick={() => this.changeIndex(foto)}/>
                            ))}
                </div>
            </div>
        )
    }
}