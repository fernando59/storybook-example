import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MyLabel } from "../../components/MyLabel/MyLabel";



//exportacion por defecto
export default {
    title:'UI/Labels/MyLabel',
    component:MyLabel
} as ComponentMeta<typeof MyLabel>



//se crea un template 
const Template:ComponentStory<typeof MyLabel> =(args)=><MyLabel {...args}  />


//Crear submenus
export const Basic = Template.bind({})
export const AllCaps= Template.bind({})
export const Secondary= Template.bind({})

