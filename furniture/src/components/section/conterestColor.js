export function conterestColor (bgcolor,textColor){
    if(!textColor)
       return bgcolor=='primary-color' ? 'text-white' : 'primary-color-text'
    return textColor;
}