import * as _ from '../lang'

export const kal = _.word('kal', {
  noun: 'storm',
  adj: 'fast',
  adv: 'fast',
})

// This is Delphine's word
export const kalasam = _.word('kalasam', {
  img: 'horse_photo_by_Marc.jpg',
  noun: 'horse',
  desc: () =>
    `${_.kalasam}, ${_.kalasam}, ${_.kalasam}, ... Can you hear the calling of the storm's feet ?`,
  etym: () => [_.kal, _.sam],
})
