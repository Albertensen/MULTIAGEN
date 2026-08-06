module.exports = () => {
  const CALL_RE = /\[CALL:\s*([a-zA-Z0-9_\- ]+)\]/g;
  const sampleText = 'Agent says [CALL: my_agent_name] to start';
  const found = [];
  let m;
  while ((m = CALL_RE.exec(sampleText)) !== null) {
    found.push(m[1].trim());
  }
  console.log('Extracted calls:', found);
  if (found.includes('my_agent_name')) {
    console.log('SUCCESS: Parser extracted correct agent name');
  } else {
    console.log('FAILURE: Parser did not extract agent name');
  }
}