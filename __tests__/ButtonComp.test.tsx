import 'react-native';
import React from 'react';
import renderer, { ReactTestRendererJSON } from "react-test-renderer"
import {fireEvent, render} from "@testing-library/react-native"
import ButtonComp from '../src/component/ButtonComp';

describe("<ButtonComp/>" , ()=>{
    const mockedFun = jest.fn()
    const btn = renderer.create(<ButtonComp btnText={"Click"} btnPressFunction={mockedFun}/>)

    it("MAke sure the element render successfully" , ()=>{
        expect(btn).toMatchSnapshot()
    })

    it("The button fires" , ()=>{
        const {getByText} = render(
            <ButtonComp btnText={"Click"} btnPressFunction={mockedFun}/>
        )

        fireEvent.press(getByText("Click"))

        expect(mockedFun).toBeCalled()
    })
})