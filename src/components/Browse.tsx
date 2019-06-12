import React from 'react';
import { Link } from 'react-router-dom';
import Product from './Product';

import './Browse.css';

export default class Browse extends React.Component <any, any> {
    
    constructor(props: any) {
        super(props);
        this.state = {
          items: [],
          shownItems: [],
          filter: [],
          isLoaded: false,
        };
        this.changeItems = this.changeItems.bind(this);
      }

      changeItems(e: any){
        let filterItems = this.state.items.filter((x: { Potmaat: any; }) => x.Potmaat === e);
        this.setState({shownItems: filterItems});
      }
    
      componentDidMount(){
        fetch('https://api.floraxchange.nl/artikel?relatieid=215')
        .then(res => { 
          return res.json();
        })
        .then(json => {
           this.setState({
            isLoaded: true,
            items: json,
            shownItems: json
          });

          json.forEach((item: { Potmaat: any; }) => {
            if (!this.state.filter.includes(item.Potmaat)){
              let filter = this.state.filter;
              filter.push(item.Potmaat);
              this.setState({filter : filter});
            }}
          );
        });
      }
    
      render(){
        var { isLoaded, filter, shownItems } = this.state;

        if (!isLoaded){
          return (
            <div className="spinnerbody">
              <div className="spinner-border text-success" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          )
        }
    
        
        return (
          <div className="browse-screen">
            <div className="container-fluid descriptive-title">
              Artikelen
            </div>
            <div className="sexy-line">
            </div>

            <div className="browse-grid">
              {shownItems.map((item: any) => (
                <div>
                  <Link to={{pathname: "/details", state: {item: item}}} style={{textDecoration: "none", color:"black"}}>
                    <Product key={item.ID} item={item}/>
                  </Link>
                </div>
                )
              )}
            </div>

            <div className="card filter">
                  <div className="own-row separate">
                    Potmaat
                  </div>
                {filter.map((instance: any)=> (
                  <div className="own-row" onClick={() => this.changeItems(instance)}>
                    {instance === "" ? "Onbekend" : instance}
                  </div> )
                )}
              </div>

          </div>
        );
      }
      
}