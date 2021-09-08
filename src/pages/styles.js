import * as React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'

const StylesPage = () => {
    return (
        <Layout pageTitle="Styles" class="wrapper">
          <div class="row">
            <StaticImage
              class="col-xs-12 col-md-6"
              alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
              src="../images/corporate-services-3.jpg"
            />
            <StaticImage
              class="col-xs-12 col-md-6" 
              alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
              src="../images/corporate-services-3.jpg"
            />
          </div>
          <h2>Grid Layouts</h2>
          <div class="row">
            <div class="col-xs-12 col-md-3">
              <div class="box-row">
                Some Content
              </div>
            </div>
            <div class="col-xs-12 col-md-9">
              <div class="box-row">
                Some Content
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-xs">
              <div class="box-row">
                Some Content
              </div>
            </div>
            <div class="col-xs">
              <div class="box-row">
                Some Content
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-xs-12 col-md-3">
            <h2>Title</h2>
            </div>
            <div class="col-xs-12 col-md-9">
              <div class="row">
                <div class="col-md-4">
                  <h2>Some Content</h2>
                </div>
                <div class="col-xs-12 col-md-8">
                  Las bufandas son útiles para mantenerte caliente, también tienen estilo. Solo necesito tirarme desde un avión con una bufanda para no coger un catarro. Mi perro es negro, mi rata es blanca
                </div>
              </div>

              <div class="row">
                <div class="col-md-4">
                  <h2>Some Content</h2>
                </div>
                <div class="col-xs-12 col-md-8">
                  Las bufandas son útiles para mantenerte caliente, también tienen estilo. Solo necesito tirarme desde un avión con una bufanda para no coger un catarro. Mi perro es negro, mi rata es blanca
                </div>
              </div>

              <div class="row">
                <div class="col-md-4">
                  <h2>Some Content</h2>
                </div>
                <div class="col-xs-12 col-md-8">
                  Las bufandas son útiles para mantenerte caliente, también tienen estilo. Solo necesito tirarme desde un avión con una bufanda para no coger un catarro. Mi perro es negro, mi rata es blanca
                </div>
              </div>
            </div>
          </div>

      </Layout>
    )
}

export default StylesPage