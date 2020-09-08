import checkPropTypes from 'check-prop-types';
import { findByTestAttr, checkProps } from '../../shared/utils';
import React from 'react';
import { SET_TITLE_INPUT } from '../../constants';
import { shallow } from 'enzyme';
import { Title } from './Title';
import { titleInputReducer } from '../../reducers';

const setUp = (props = {}) => {
    const component = shallow(<Title {...props} />);
    return component;
}

describe('Title Component', () => {

    describe('Set Title Input Reducer', () => {

        it('should return default state', () => {
            const newState = titleInputReducer(undefined, {});
            expect(newState).toEqual('');
        })

        it('should return new state if returning type', () => {
            const newState = titleInputReducer(undefined, 
                {
                    type: SET_TITLE_INPUT, 
                    payload: 'title input reducer test'
                }
            );
            expect(newState).toEqual('title input reducer test');
        })

    })

    describe('Checking Prop Types', () => {

        it('should not throw a warning', () => {
    
            const expectedProps = {
                title: 'Test Title'
            };
            const propsErr = checkProps (Title, expectedProps);
            expect(propsErr).toBeUndefined();

        })
    })

    describe('Has Props', () => {

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

    describe('Has NO Props', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = setUp();
        });
    });

});