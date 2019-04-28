const MATCH_LIST = {
  'there': 'their',
  'their': 'there',
  'they\'re': 'there',
  'There': 'Their',
  'Their': 'There',
  'They\'re': 'There',
  'THERE': 'THEIR',
  'THEIR': 'THERE',
  'THEY\'RE': 'THERE'
};

function transformTextNodes(node) {
  // TODO(you): Implement this function! See HW spec for details.
  if(node.nodeType == Node.TEXT_NODE) {
    let str = node.textContent.split(/\s+/);
    str = str.map ( chr => { return  MATCH_LIST.hasOwnProperty(chr)? MATCH_LIST[chr] : chr;  } );
    node.textContent = str.join(' ');
  }
  for (const child of node.childNodes) {
    if (child.nodeName !== 'SCRIPT' && child.nodeName !=='STYLE' ) transformTextNodes(child);
  }
}

transformTextNodes(document.body);

// Log statement to test that the extension loaded properly.
console.log('Evil extension loaded!');
console.log('Extension updated');
