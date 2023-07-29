
function replaceChars() {

  const chars_replace = [
    ['equivale a', '≡'],
    ['implica taut', '⇒'],
    ['solo si taut', '⇔'],
    ['implica', '→'],
    ['solo si', '↔'],
    ['no', '¬'],
    ['y', '∧'],
    ['o', '∨']
  ]

  let text = document.getElementById('textInput').value
  let textOutput = document.getElementById('textOutput')

  for (var i = 0; i < chars_replace.length; i++) {
    text = text.replaceAll(chars_replace[i][0], chars_replace[i][1]);
  }

  textOutput.value = text;

}

async function copyText() {
  let text = document.getElementById('textOutput').value;
  try { await navigator.clipboard.writeText(text); }
  catch (err) { alert('Error al copiar: ', err); }
  finally { alert('Texto copiado ✔️') }
}