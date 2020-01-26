import React from 'react'
import {
  render as MJMLRender,
  Mjml,
  MjmlHead,
  MjmlTitle,
  MjmlPreview,
  MjmlBody,
  MjmlSection,
  MjmlColumn,
  MjmlButton,
  MjmlImage
} from 'mjml-react';

export const { html, errors } = MJMLRender((
  <Mjml>
    <MjmlHead>
      <MjmlTitle>Last Minute Offer</MjmlTitle>
      <MjmlPreview>Last Minute Offer...</MjmlPreview>
    </MjmlHead>
    <MjmlBody width={500}>
      <MjmlSection fullWidth backgroundColor="#efefef">
        <MjmlColumn>
          <MjmlImage src="https://static.wixstatic.com/media/5cb24728abef45dabebe7edc1d97ddd2.jpg"/>
        </MjmlColumn>
      </MjmlSection>
      <MjmlSection>
        <MjmlColumn>
          <MjmlButton
            padding="20px"
            backgroundColor="#346DB7"
            href="https://www.wix.com/"
            >
            I like it!
          </MjmlButton>
        </MjmlColumn>
      </MjmlSection>
    </MjmlBody>
  </Mjml>
), {validationLevel: 'soft'});

