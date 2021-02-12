
let main () =
  let es = Join.Prefix {name="es"; join="h"} in
  let o = Join.Prefix {name="o"; join="h"} in
  let la = Join.Word {name="la"; join="l"} in
  let ir = Join.Word {name="ir"; join="l"} in
      Js.log (Join.fold [es;o;la;ir]);;

main ();;