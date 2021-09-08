import * as React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'

const StylesPage = () => {
    return (
        <Layout pageTitle="Styles (h1)" class="wrapper">
          <section class="row">
            <StaticImage
              class="col-xs-12 col-md-6"
              alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
              src="../images/corporate-services-3.jpg"
            />
            <StaticImage
              class="col-xs-12 col-md-6" 
              alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
              src="../images/hero-corporate.jpg"
            />
          </section>
          <div class="row">
            <div class="col-xs-12 col-md-3">
              <div class="box-row">
                &nbsp;
              </div>
            </div>
            <div class="col-xs-12 col-md-9">
              <div class="box-row">
                 &nbsp;
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-xs">
              <div class="box-row">
                 &nbsp;
              </div>
            </div>
            <div class="col-xs">
              <div class="box-row">
                 &nbsp;
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-xs-12 col-md-3">
            <h2>h2 Title</h2>
            </div>
            <div class="col-xs-12 col-md-9">

              <div class="row">
                <div class="col-xs-12 col-md-4">
                  <h2>h2 Content Title</h2>
                </div>
                <div class="col-xs-12 col-md-8">
                 <p>Las bufandas son útiles para mantenerte caliente, <a href="#">text link</a> también tienen estilo. Solo necesito tirarme desde un avión con una bufanda para no coger un catarro. Mi perro es negro, mi rata es blanca</p>
                </div>
              </div>

              <div class="row">
                <div class="col-xs-12 col-md-4">
                  <h2>h2 Title</h2>
                </div>
                <div class="col-xs-12 col-md-8">
                  <p>Las bufandas son útiles para mantenerte caliente, también tienen estilo. <span style={{textDecoration: 'underline'}}>Solo necesito tirarme desde un avión</span> con una bufanda para no coger un catarro. Mi perro es negro, mi rata es blanca</p>
                </div>
              </div>

              <div class="row">
                <div class="col-xs-12 col-md-4">
                  <h2>h2 Title</h2>
                </div>
                <div class="col-xs-12 col-md-8">
                  <div class="row">
                    <div class="col-xs-12 col-md-6">
                      <p>Unordered List</p>
                      <ul>
                        <li>List Item</li>
                        <li>List Item</li>
                        <li>List Item</li>
                        <li>List Item</li>
                      </ul>
                    </div>
                    <div class="col-xs-12 col-md-6">
                      <p>Ordered List</p>
                      <ol>
                        <li>List Item</li>
                        <li>List Item</li>
                        <li>List Item</li>
                        <li>List Item</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

      </Layout>
    )
}

export default StylesPage