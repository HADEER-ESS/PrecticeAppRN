/**
 * @format
 */

import 'react-native';
import React, {Children, DOMElement} from 'react';
import App from '../App';

// Note: import explicitly to use the types shiped with jest.
import {it, describe, expect} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer, { ReactTestRendererJSON, ReactTestRendererNode } from 'react-test-renderer';
import {Text, TextComponent} from 'react-native';
import TextComp from '../src/component/TextComp';

describe('<App/>', () => {
  it('renders correctly', () => {
    renderer.create(<App />);
  });
  it('has one child', () => {

    const tree = renderer.create(<App />);
    const getChildren = tree.toJSON() as ReactTestRendererJSON
    // const childrenOfScreen =  getChildren.children
    // const getLength = getChildren.children as ReactTestRendererJSON[]

    // console.log("Children on screen " , getChildren?.children?.length)
    
    // getChildren?.children?.forEach(node => {

    //   console.log("NODE..... " , node)
    // })

    //count number of Views in Screen
    expect(getChildren?.children?.length).toEqual(2);
  });
});
