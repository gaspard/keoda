import * as _ from '../words'

export const food = _.card('food', {
  writ: 'food',
  desc: () => `
# Food

See also ${_.fruits}.

* ${_.piule} (peas)
* ${_.egina} (chicory)
* ${_.fena} (cabbage) 
* ${_.piutaj} (leek) 
* ${_.ulul} (asparagus) 
* ${_.piuna} (spinach) 
* ${_.eri} (cherry) 
* ${_.palajil} (apricot) 
* ${_.pantame} (tomato) 
* ${_.wiyon} (prune) 
* ${_.gopona} (pumpkin) 
* ${_.pona} (orange) 
* ${_.ponale} (tangerine) 

`,
})
