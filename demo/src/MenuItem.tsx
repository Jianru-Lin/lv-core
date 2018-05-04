import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Section } from './components/Section';
import { SubSection } from './components/SubSection';
import { MenuItem, MenuItemWithState, Menu, Icon } from 'lv-core';

const content = (
    <div>
        <Section title="MenuItem">
            <SubSection title="normal">
                <MenuItem data={{ hover: false }} onChange={_ => {}}>
                    MenuItem
                </MenuItem>
            </SubSection>
            <SubSection title="hover">
                <MenuItem data={{ hover: true }} onChange={_ => {}}>
                    MenuItem:hover
                </MenuItem>
            </SubSection>
            <SubSection title="with state">
                <MenuItemWithState>MenuItem:hover</MenuItemWithState>
            </SubSection>
        </Section>
        <Section title="MenuItem in Menu">
            <SubSection title="one item">
                <Menu>
                    <MenuItem data={{ hover: false }} onChange={_ => {}}>
                        MenuItem
                    </MenuItem>
                </Menu>
            </SubSection>

            <SubSection title="two items">
                <Menu>
                    <MenuItem data={{ hover: false }} onChange={_ => {}}>
                        MenuItem1
                    </MenuItem>
                    <MenuItem data={{ hover: false }} onChange={_ => {}}>
                        MenuItem2
                    </MenuItem>
                </Menu>
            </SubSection>

            <SubSection title="two items (icons)">
                <Menu>
                    <MenuItem data={{ hover: false }} onChange={_ => {}}>
                        <Icon name="add" style={{ marginRight: '0.5em' }} /> Add
                    </MenuItem>
                    <MenuItem data={{ hover: false }} onChange={_ => {}}>
                        <Icon name="edit" style={{ marginRight: '0.5em' }} /> Edit
                    </MenuItem>
                </Menu>
            </SubSection>

            <SubSection title="two items (icons) with state + click handler">
                <Menu>
                    <MenuItemWithState
                        onClick={() => {
                            alert('Click: Add');
                        }}>
                        <Icon name="add" style={{ marginRight: '0.5em' }} /> Add
                    </MenuItemWithState>
                    <MenuItemWithState
                        onClick={() => {
                            alert('Click: Edit');
                        }}>
                        <Icon name="edit" style={{ marginRight: '0.5em' }} /> Edit
                    </MenuItemWithState>
                </Menu>
            </SubSection>
        </Section>
    </div>
);

ReactDOM.render(content, document.getElementById('root'));
