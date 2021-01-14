import * as _ from '..'

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
* ${_.erina} (cherry) 
* ${_.palajil} (apricot) 
* ${_.pantame} (tomato) 
* ${_.wiyon} (prune) 
* ${_.gopona} (pumpkin) 
* ${_.pona} (orange) 
* ${_.ponale} (tangerine) 

`,
})
