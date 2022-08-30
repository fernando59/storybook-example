import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MyLabel } from "../../components/MyLabel/MyLabel";



//exportacion por defecto
export default {
    title:'UI/Labels/MyLabel',
    component:MyLabel,
    argTypes:{
        size:{control:'select'},
        color:{control:'select'}
    }
} as ComponentMeta<typeof MyLabel>



//se crea un template 
const Template:ComponentStory<typeof MyLabel> =(args)=><MyLabel {...args}  />


//Crear submenus
export const Basic = Template.bind({})
Basic.args ={
    size:'normal',
    allCaps:false

}
export const AllCaps= Template.bind({})
AllCaps.args ={
    size:'normal',
    allCaps:true
}
export const Secondary= Template.bind({})

Secondary.args ={
    size:'normal',
    allCaps:false,
    color:'secondary'

}

export const Tertiary= Template.bind({})

Tertiary.args ={
    size:'normal',
    allCaps:false,
    color:'tertiary'

}


export const CustomFontColor= Template.bind({})

CustomFontColor.args ={
    size:'h1',
    fontColor:'#333'
}