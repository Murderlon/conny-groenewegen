import React, { Fragment } from 'react'
import styled, { withTheme } from 'styled-components'
import { Helmet } from 'react-helmet'

import ReturnLink from '../components/ReturnLink'
import MediaButton from '../components/MediaButton'

const Heading = styled.h1`
  text-transform: uppercase;
  font-weight: 700;
`

const MediaWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;

  a {
    margin: ${({ theme }) => theme.spacing.medium} 0;
    margin-right: ${({ theme }) => theme.spacing.medium};
  }
`

const About = ({ theme }) => {
  return (
    <Fragment>
      <Helmet>
        <title>Conny Groenewegen | About</title>
      </Helmet>
      <ReturnLink to="/">Overview</ReturnLink>
      <Heading>About</Heading>
      <p>
        Na afronding van een studie mode en beeldende kunst ben ik begonnen als
        tekenaar. Gefascineerd door de klare lijn tekende ik wandgrote
        tekeningen van landschappen met ragfijne potloodlijnen op een formaat
        waar je in kon stappen. In een volgende fase kwam het papier van de wand
        en werd het ruimtelijk. Door uitsparingen voor hoofden werd je
        vervolgens letterlijk onderdeel van de tekening. De omzetting van 2D
        naar 3D, van lijn naar draad en omgekeerd is een doorlopend thema in al
        mijn werk: van een kledingstuk of een akoestisch paneel tot een
        flexibele wand.
      </p>
      <p>
        Het gebruik van een draad is als tekenen. Net zoals bij breien ontstaat
        het materiaal waarmee ik werk door rijen in elkaar grijpende lussen
        vanuit één ononderbroken lijn. Daarin zijn alle lussen belangrijk, als
        er eentje breekt heb je een gat. Dit is symbolisch voor intermenselijke
        relaties, je kunt niet iets opleggen of forceren zonder schade aan te
        richten. Op een vergelijkbare manier ga ik samenwerkingen aan waarin ik
        uitdaag en uitgedaagd wordt omdat er tenminste twee punten nodig zijn om
        scherp te kunnen zien en als voorwaarde voor een klare lijn.
      </p>
      <p>
        Daarnaast is mijn werk een uitnodiging om op een andere manier te kijken
        naar herkenbare archetypische vormen met als doel om deze opnieuw te
        duiden. Hiervoor ontwikkel ik onverwachte materialen en maak ik me een
        techniek eigen. Dit doe ik via prototypes waarin ik aanstuur op de
        gewenste de vorm. De resultaten zijn momentopnames en tijdelijke
        voorstellen, omdat voortdurend nieuwe inzichten ontstaan die leiden tot
        een volgend prototype. Daarbij heb ik samen met de mensen met wie ik
        werk de regie in het creëren van eigen spelregels.
      </p>
      <MediaWrapper>
        <MediaButton
          to="mailto:cg@connygroenewegen.nl"
          borderColor={theme.white}
          label="e-mail"
          labelColor={theme.yellow}
        >
          cg@connygroenewegen.nl
        </MediaButton>
        <MediaButton
          to="https://www.instagram.com/conny_groenewegen/"
          borderColor={theme.cyan}
          label="instagram"
          labelColor={theme.cyan}
        >
          conny_groenewegen
        </MediaButton>
        <MediaButton
          to="https://www.linkedin.com/in/conny-groenewegen-275ab1a"
          borderColor={theme.magenta}
          label="linkedin"
          labelColor={theme.magenta}
        >
          conny-groenewegen
        </MediaButton>
      </MediaWrapper>
    </Fragment>
  )
}

export default withTheme(About)
