import React, { Fragment } from 'react'

import Microscope from '../components/Microscope'

const Index = () => (
  <Fragment>
    <Microscope />
    <h2>Collectives</h2>
    <section>
      <h3>FaMa</h3>
      <p>
        Fashion Machine (FaMa) is commenting on and asking critical questions
        about the (waste) production of the worldwide clothing industry.
      </p>
    </section>
    <section>
      <h3>Electric Co.</h3>
      <p>
        Process driven research revealing the constructive potential of soft
        tech materials.
      </p>
    </section>
  </Fragment>
)

export default Index
