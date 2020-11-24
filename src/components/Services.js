import React, { Component } from 'react';
import Title from './Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: 'free cocktails',
        info: 'Free cocktails served on the day of your arrival.',
      },
      {
        icon: <FaHiking />,
        title: 'hiking trails',
        info: 'some of the best hiking trails you could imagine.',
      },
      {
        icon: <FaShuttleVan />,
        title: 'airport transfers',
        info: 'shuttle available to transport you to and from the airport.',
      },
      {
        icon: <FaBeer />,
        title: 'craft beer',
        info: 'an assortment of craft beer breweries to cater for any taste. ',
      },
    ],
  };

  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
