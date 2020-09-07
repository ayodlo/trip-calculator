import checkPropTypes from 'check-prop-types';
import { findByTestAttr, checkProps } from '../../shared/utils';
import React from 'react';
import { shallow } from 'enzyme';
import { Title } from './Title';

const setUp = (props = {}) => {
    const component = shallow(<Title {...props} />);
    return component;
}

describe('Header Component', () => {

    describe('checking prop types', () => {

        it('should not throw a warning', () => {
    
            const expectedProps = {
                title: 'Test Title'
            };
            const propsErr = checkProps (Title, expectedProps);
            expect(propsErr).toBeUndefined();

        })
    })

    describe('has props', () => {

        let component;
        beforeEach(() => {
            component = setUp();
        })

        it('should render without errors', () => {
            const wrapper = findByTestAttr(component, 'title-page-container');
            expect(wrapper.length).toBe(1);
        })

        it('should render title page center wrapper', () => {
            const wrapper = findByTestAttr(component, 'title-page-center');
            expect(wrapper.length).toBe(1);
        })

        it('should render title page header', () => {
            const wrapper = findByTestAttr(component, 'title-page-header');
            expect(wrapper.length).toBe(1);
        })

        it('should render title page input', () => {
            const wrapper = findByTestAttr(component, 'title-page-input');
            expect(wrapper.length).toBe(1);
        })

        it('should render title page button', () => {
            const wrapper = findByTestAttr(component, 'title-page-button');
            expect(wrapper.length).toBe(1);
        })
    })

    describe('has NO props', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = setUp();
        });
    });

});