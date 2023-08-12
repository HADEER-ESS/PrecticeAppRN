import 'react-native';
import React from 'react';
import renderer, { ReactTestRendererJSON } from "react-test-renderer"
import TextComp from "../src/component/TextComp";


describe("<TextComp/>" , () => {

    const txt = renderer.create(<TextComp Title={"Hello World!"}/>)

    it("The component render successfully" , () =>{
        expect(txt).toMatchSnapshot()
    })

    it("The Title props sends successfully contain data" , ()=>{
        let toJson = txt.toJSON() as ReactTestRendererJSON
        expect(toJson?.children).not.toBeNull()
    })

    it("The props is sended with NULL, or EMPTY" , ()=>{
        let txtEmpty = renderer.create(<TextComp Title={null}/>).toJSON() as ReactTestRendererJSON
        // console.log("TREEEEEEEEEEE " , txtEmpty?.children)
        expect(txtEmpty?.children).toBeNull()
    })
})