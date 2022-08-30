
import './mylabel.css'
export interface MyLabelProps {
   /**
   * This is the text to show in tag
   */
  label: string
  /**
   * This is the size to text in tag
   */
  size: 'normal' | 'h1' | 'h2' | 'h3'
  color:'primary' | 'secondary' | 'tertiary'
  allCaps:boolean
  /**
   * Custom color font
   */
  fontColor?:string
}
export const MyLabel = ({
  label = 'No label',
  size = 'normal',
  allCaps=false,
  color ='primary',
  fontColor

}: MyLabelProps) => {
  return <span className={`${size} label text-${color}`}
    style={{color:fontColor}}
  >
    {allCaps? label.toUpperCase():label}
  </span>

}
