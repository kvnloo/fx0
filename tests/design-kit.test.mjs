import test from 'node:test'
import assert from 'node:assert/strict'
import {
  applyDesignEdits,
  createTools,
  DESIGN_INSTRUCTIONS,
  designMdInstructions,
  HOST_DESIGN_MD,
  prepareDesignArtifactHtml,
  readDesignMd,
  validateDesignArtifactHtml,
} from '../lib/design-kit.ts'

const doc = '<!doctype html><html><head><title>a</title></head><body><p>one</p></body></html>'

test('the kit exposes fx0 design tools by their fx0 names', () => {
  const host = new Proxy({}, { get: () => () => 0 })
  const names = createTools(host, { allowSubagent: false }).map((tool) => tool.name)
  assert.deepEqual(names.slice(0, 3), ['read_design', 'publish_design', 'edit_design'])
  assert.ok(!names.includes('subagent'))
})

test('edits apply in order and fail closed on a non-unique match', () => {
  assert.deepEqual(applyDesignEdits(doc, [{ oldString: 'one', newString: 'two' }]), { ok: true, html: doc.replace('one', 'two') })
  assert.equal(applyDesignEdits(doc, [{ oldString: 'o', newString: 'x' }]).reason, 'match')
  assert.equal(applyDesignEdits(null, [{ oldString: 'one', newString: 'two' }]).reason, 'missing')
  assert.equal(applyDesignEdits(doc, []).reason, 'invalid')
})

test('host styles ship as files and wrap into the DESIGN.md instructions', async () => {
  assert.deepEqual(HOST_DESIGN_MD.map((style) => style.id), ['zeros-night'])
  const style = await readDesignMd('zeros-night')
  assert.match(style.text, /#0c0c0a/)
  assert.match(designMdInstructions(style), /<design_md>/)
  assert.match(DESIGN_INSTRUCTIONS, /publish_design/)
  await assert.rejects(readDesignMd('../package'))
})

test('validation and preparation are the ones fx0 renders with', () => {
  assert.equal(validateDesignArtifactHtml(doc).ok, true)
  assert.match(prepareDesignArtifactHtml(doc, "default-src 'none'"), /Content-Security-Policy/)
})
