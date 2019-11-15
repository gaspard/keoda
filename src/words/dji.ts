import * as _ from '.'

export const dji = _.word('dji', {
  noun: '10',
  desc: () =>
    `Pour les dizaines, on utilise dji au lieu de ${_.pi} ${_.ipi} (mais on peut aussi dire ${_.pi} ${_.ipi})`,
  derived: [_.pi, _.ipi],
})
_.see(_.counting)

export const djipa = _.word('djipa', {
  noun: 'souvenir (être dieu.e)',
})
