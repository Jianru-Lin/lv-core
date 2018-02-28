import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Section } from './components/Section'
import { SubSection } from './components/SubSection'
import { MenuItem, MenuItemWithState, ButtonMenu, Icon } from 'lv-core'

const content = (
  <div>
    <Section title="MenuItem">
      <SubSection title="{ hover: false, open: false }">
        <ButtonMenu data={{ hover: false, open: false }} onChange={_ => { }}></ButtonMenu>
      </SubSection>
    </Section >
  </div>
)

ReactDOM.render(content, document.getElementById('root'))
