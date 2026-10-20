// fx0's design agent as a kit for other hosts: the same tools, instructions,
// edit rule and artifact validation fx0 runs, without its Next.js app, journal
// or auth. A host supplies a ToolHost (where the one HTML document lives) and
// passes createTools(host) to its own libfx agent. Import as `fx0/design-kit`.
import { readFile } from 'node:fs/promises'

// @ts-expect-error Node strip-types tests require the source extension.
export { createTools, tail, type AskQuestion, type ToolHost } from './tools.ts'
// @ts-expect-error Node strip-types tests require the source extension.
export { applyDesignEdits, DESIGN_INSTRUCTIONS, designMdInstructions, type DesignEditResult } from './design-instructions.ts'
export {
  DESIGN_ARTIFACT_EMBEDDED_CSP,
  MAX_DESIGN_ARTIFACT_BYTES,
  normalizeDesignArtifactHtml,
  prepareDesignArtifactHtml,
  validateDesignArtifactHtml,
  type DesignArtifactValidation,
  // @ts-expect-error Node strip-types tests require the source extension.
} from './design-artifact.ts'
// @ts-expect-error Node strip-types tests require the source extension.
export { DESIGN_MD_CATALOG, DESIGN_MD_MAX_BYTES, type DesignMdInput, type DesignMdOption } from './design-md.ts'

// DESIGN.md files for embedding hosts. They are not in fx0's own picker
// (DESIGN_MD_CATALOG); a host names one as its default style.
export const HOST_DESIGN_MD: readonly { id: string; name: string; description: string }[] = [
  {
    id: 'zeros-night',
    name: 'zerOS Living Night',
    description: 'Warm near-black canvas, one gold accent, liquid glass, Cormorant + Hanken Grotesk + IBM Plex Mono.',
  },
]

const KNOWN = new Set<string>(['apple', 'claude', 'vercel', 'notion', 'airbnb', 'linear.app', 'stripe', 'figma', 'bmw-m', 'coinbase', 'zeros-night'])

/** Reads a catalog or host DESIGN.md shipped in lib/design-md by id. */
export async function readDesignMd(id: string): Promise<{ name: string; text: string }> {
  if (!KNOWN.has(id)) throw new Error(`unknown design.md: ${id.slice(0, 40)}`)
  const text = await readFile(new URL(`./design-md/${id}.md`, import.meta.url), 'utf8')
  return { name: `${id}.md`, text }
}
