/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: import explicitly to use the types shiped with jest.
import {it, describe, expect} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer, { ReactTestRendererJSON } from 'react-test-renderer';

describe('<App/>', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<App />);
    expect(tree).toMatchSnapshot()
  });
  it('has two child', () => {

    const tree = renderer.create(<App />).toJSON() as ReactTestRendererJSON
    // const getChildren = tree.toJSON() as ReactTestRendererJSON
    // const childrenOfScreen =  getChildren.children
    // const getLength = getChildren.children as ReactTestRendererJSON[]

    // console.log("Children on screen " , getChildren?.children?.length)
    
    // getChildren?.children?.forEach(node => {

    //   console.log("NODE..... " , node)
    // })

    //count number of Views in Screen
    // expect(getChildren?.children?.length).toEqual(2);
    expect(tree?.children?.length).toBe(2)
  });
});
