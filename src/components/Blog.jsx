import React from 'react';
import placeholder from 'assets/placeholder.png';
import play from 'assets/play.png';
import styled from 'styled-components';
import Title from './Title';

const Blog = () => {
  const blogData = [
    {
      title: "Summer trip to mountains",
      type: "Adventure",
      description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores deleniti rem delectus optio harum omnis veniam adipisci ducimus deserunt repudiandae?",
    },
    {
      title: "Flowers purple from sky",
      type: "Personal",
      description: 
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam debitis consectetur ex tempora voluptatum deleniti, officiis dicta eos illo adipisci!",
    },
    {
      title: "Rock conert main stage",
      type: "Mucsic",
      description: 
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea est repudiandae nesciunt mollitia ad molestias dignissimos praesentium fugit reiciendis quis?",
    }
  ];
  return (
    <Section id='blog'>
      <Title value="blog"/>
      <div className="decoration">

      </div>

      <div className="blogs">
        {
          blogData.map(({title, type, description}, index)=>{
            return(
              <div className="blog">
                <div className="image">
                <img src={placeholder} alt="Placeholder"/>
                </div>
                <div className="title">
                  <h3>{title}</h3>
                </div>
                <span className='type'>{type}</span>
                <div className="description">
                  <p>{description}</p>
                </div>
                <div className="more">
                  <img src={play} alt="play" />
                  <span>Read more</span>
                </div>
              </div>
            )
          })
        }
      </div>
    </Section>
  )
};

const Section = styled.section`
  min-height: 100vh;
  position: relative;

  .decoration{
    position: absolute;
    height: 20rem;
    width: 70vw;
    border: 0.5rem solid var(--secondary-color);
    left: 15%;
    top: -2rem;
  }
  
  .blogs{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    margin: 5rem 20rem;
    
    .blog{
      display: flex;
      flex-direction: column;
      gap: 1rem;
      
      .image{
        height: 22rem;
        background-color: #a686f0af;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .title{
        h3{
          color: var(--secondary-color);
          font-size: 2rem;

        }
      }
      .type{      
          color: var(--primary-color);
          font-weight: bolder;
          text-transform: uppercase;
      }
      .description{
        height: 10rem;
        color: var(--primary-color);
      }
    }
    .more{
      display: flex;
      align-items: center;
      gap: 1rem;
      cursor: pointer;
      span{
        letter-spacing: 0.1rem;
        text-transform: uppercase;
        corlor: var(--primary-color);
      }
    }
  }
`;

export default Blog;
