type word = {name: string; join: string}
type chain = Prefix of word  | Word of word

let joinMorphemes (left : chain) (right: word) =
  match left with
  | Prefix (l) -> l.name ^ l.join ^ right.name
  | Word (l) -> l.name ^ right.join ^ right.name

let join (left: chain) (right: chain) =
  match right with
  | Prefix (r) -> Prefix ({name= joinMorphemes left r; join= r.join})
  | Word (r) -> Word ({name= joinMorphemes left r; join= r.join})


let fold wlist =
  let rec foldl (acc: chain) (right: chain list) =
    match right with
    | [] -> acc
    | h :: t -> foldl (join acc h) t in
  match wlist with
  | [] -> ""
  | h :: t -> 
    match (foldl h t) with
    | Prefix (w) -> w.name
    | Word (w) -> w.name
