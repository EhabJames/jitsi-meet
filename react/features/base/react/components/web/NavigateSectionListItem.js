// @flow

import React, { Component } from 'react';

import Container from './Container';
import Text from './Text';
import type { Item } from '../../Types';

/**
 * The type of the React {@code Component} props of
 * {@link NavigateSectionListItem}.
 */
type Props = {

    /**
     * Function to be invoked when an item is pressed. The item's URL is passed.
     */
    onPress: ?Function,

    /**
     * A item containing data to be rendered
     */
    item: Item
};

/**
 * Implements a React/Web {@link Component} for displaying an item in a
 * NavigateSectionList
 *
 * @extends Component
 */
export default class NavigateSectionListItem<P: Props>
    extends Component<P> {

    /**
     * Renders the content of this component.
     *
     * @returns {ReactElement}
     */
    render() {
        const { elementAfter, lines, title } = this.props.item;
        const { onPress } = this.props;

        /**
         * Initiliazes the date and duration of the conference to the an empty
         * string in case for some reason there is an error where the item data
         * lines doesn't contain one or both of those values (even though this
         * unlikely the app shouldn't break because of it)
         * @type {string}
         */
        let date = '';
        let duration = '';

        if (lines[0]) {
            date = lines[0];
        }
        if (lines[1]) {
            duration = lines[1];
        }

        const rootClassName = `navigate-section-list-tile ${
            onPress ? 'with-click-handler' : 'without-click-handler'}`;

        return (
            <Container
                className = { rootClassName }
                onClick = { onPress }>
                <Container className = 'navigate-section-list-tile-info'>
                    <Text
                        className = 'navigate-section-tile-title'>
                        { title }
                    </Text>
                    <Text
                        className = 'navigate-section-tile-body'>
                        { date }
                    </Text>
                    <Text
                        className = 'navigate-section-tile-body'>
                        { duration }
                    </Text>
                </Container>
                { elementAfter || null }
            </Container>
        );
    }
}
